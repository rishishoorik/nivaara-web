import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import faviconAsset from "../assets/nivaara-logo-warm.png";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ReserveRail } from "../components/ReserveRail";

function NotFoundComponent() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="eyebrow mb-4">Page Not Found</div>
        <h1 className="font-display text-7xl text-navy">404</h1>
        <p className="mt-4 text-muted-foreground">The page you're looking for has wandered off the path.</p>
        <Link to="/" className="btn-primary mt-8">Return Home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ reset }: ErrorComponentProps) {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-cream">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-navy">Something went wrong</h1>
        <p className="mt-3 text-muted-foreground text-sm">Please try again or return home.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-primary">Try again</button>
          <a href="/" className="btn-outline">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Hotel Nivaara Tirupati — Luxury Hotel Near Tirumala Temple" },
      { name: "description", content: "Hotel Nivaara Tirupati offers luxury rooms, fine dining and grand banquet halls moments from Tirumala Balaji Temple. Book direct for the best rates." },
      { name: "author", content: "Hotel Nivaara" },
      { name: "theme-color", content: "#16314c" },
      { property: "og:site_name", content: "Hotel Nivaara Tirupati" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Hotel Nivaara Tirupati — Luxury Hotel Near Tirumala Temple" },
      { property: "og:description", content: "Hotel Nivaara Tirupati offers luxury rooms, fine dining and grand banquet halls moments from Tirumala Balaji Temple. Book direct for the best rates." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Hotel Nivaara Tirupati — Luxury Hotel Near Tirumala Temple" },
      { name: "twitter:description", content: "Hotel Nivaara Tirupati offers luxury rooms, fine dining and grand banquet halls moments from Tirumala Balaji Temple. Book direct for the best rates." },
      { property: "og:image", content: "https://nivaarahotels.com/hotel-nivaara-tirupati.jpg" },
      { name: "twitter:image", content: "https://nivaarahotels.com/hotel-nivaara-tirupati.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap" },
      { rel: "icon", href: faviconAsset, type: "image/png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Hotel",
          name: "Hotel Nivaara Tirupati",
          image: "https://nivaarahotels.com/hotel-nivaara-tirupati.jpg",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Next to APSRTC Central Bus Station",
            addressLocality: "Tirupati",
            postalCode: "517501",
            addressRegion: "AP",
            addressCountry: "IN",
          },
          telephone: "+91-9030057115",
          email: "res.tpt@nivaarahotels.com",
          priceRange: "₹₹₹",
          starRating: { "@type": "Rating", ratingValue: "4" },
          amenityFeature: [
            "Free Wi-Fi","24/7 Room Service","Multi-cuisine Restaurant",
            "Banquet Halls","Valet Parking","Travel Desk","Doctor on Call"
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <ReserveRail />
      <main className="min-h-screen pt-[var(--header-height,190px)]">
        <Outlet />
      </main>

      <Footer />
    </QueryClientProvider>
  );
}
