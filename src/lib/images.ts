// Centralized image map — owner-supplied photography from Hotel Nivaara.
// Files live in src/assets and are bundled with the application.
// Note: legacy slot filenames are reused for new content (see comments below).
import ext1 from "../assets/nivaara/ext-1.jpg"; // facade — hero
import ext2 from "../assets/nivaara/ext-2.jpg"; // facade — angled
import ext3 from "../assets/nivaara/ext-3.jpg"; // facade — frontal
import lobby1 from "../assets/nivaara/lobby-1.jpg"; // reception niche
import lobby2 from "../assets/nivaara/lobby-2.jpg"; // grand lobby (chandelier)
import lobby3 from "../assets/nivaara/lobby-3.jpg"; // reception counter
import room1 from "../assets/nivaara2/exec-king-v2.jpg"; // executive king
import room2 from "../assets/nivaara/room-2.jpg"; // executive double
import room3 from "../assets/nivaara2/superior-room-v2.jpg"; // superior
import room4 from "../assets/nivaara/room-4.jpg"; // suite lounge
// room5 removed — legacy asset was unavailable; roomBath now uses bathA
import room6 from "../assets/nivaara/room-6.jpg"; // room with view
import rest1 from "../assets/nivaara/restaurant-1.jpg"; // Dakshin dining hall
import rest2 from "../assets/nivaara/restaurant-2-v3.jpg"; // restaurant interior (new photo, ceiling cropped, enhanced)
import rest3 from "../assets/nivaara/restaurant-3.jpg"; // Dakshin signage / cafe
import rest4 from "../assets/nivaara/restaurant-4.jpg"; // buffet spread
// "food-*" slots now host banquet & conference photography
import banq1 from "../assets/nivaara/food-1.jpg"; // grand banquet (theatre)
import banq2 from "../assets/nivaara/food-2.jpg"; // banquet with linens
import banq3 from "../assets/nivaara/food-3.jpg"; // pillarless hall (empty)
import banq4 from "../assets/nivaara/food-4.jpg"; // conference hall arch lighting
import banq5 from "../assets/nivaara/food-5.jpg"; // banquet with red drapes
// Curated, enhanced room hero shots (v2) for the homepage Rooms & Tariffs cards
import roomDoubleV2 from "../assets/nivaara2/executive-room-v3.jpg";
import roomTwinV2 from "../assets/nivaara/room-executive-twin-v2.jpg";
import roomSuperiorV2 from "../assets/nivaara2/superior-room-new.jpg";
import conferenceRedV2 from "../assets/nivaara/conference-red-v2.jpg";
import banquetCropped from "../assets/banquet-cropped.png"; // grand banquet, ceiling cropped & enhanced
import banquetHeroV2 from "../assets/banquet-hero-v6.jpg"; // homepage banquet hero — updated photo
import grand9Hall from "../assets/nivaara/grand9-hall.jpg"; // Grand-9 ballroom — theatre setup
import pavilionBoardroom from "../assets/pavilion-boardroom.jpg"; // grand pavilion boardroom setup
import boardroomTable from "../assets/boardroom-table.jpg"; // executive board room — long table setup
import facadeHero from "../assets/nivaara-facade-hero.jpg"; // new hero facade — daylight, branded signage

// Tirumala curated imagery
import tirumala1 from "../assets/tirumala/tirumala-1.jpg";
import tirumala2 from "../assets/tirumala/tirumala-2.jpg";
import tirumala3 from "../assets/tirumala/tirumala-3.jpg";
import tirumala4 from "../assets/tirumala/tirumala-4.jpg";
import tirumala5 from "../assets/tirumala/tirumala-5.jpg";
import temple from "../assets/tirumala/temple.png";

// Temple imagery for the Tirumala pilgrimage section (no owner photo provided).
const TEMPLE = temple;

export const IMG = {
  // Exterior / facade
  exteriorTwilight: facadeHero,
  exteriorNight:    ext3,
  exteriorWalk:     ext2,
  entranceArch:     lobby1,

  // Interior / lobby
  lobbyChandelier:  lobby2,
  hotelHero:        facadeHero,
  bgPattern:        lobby3,
  detailMoment:     lobby3,
  reception:        lobby3,

  // Rooms
  roomKing:         room1,
  roomTwin:         room2,
  roomSuperior:     room3,
  roomDetail:       room4,
  roomBath:         bathA,
  roomView:         room6,
  // Homepage hero room shots — enhanced, curated v2
  roomDoubleHero:   roomDoubleV2,
  roomTwinHero:     roomTwinV2,
  roomSuperiorHero: roomSuperiorV2,
  roomHero:         roomDoubleV2,


  // Dining — restaurant interiors
  diningHall:       rest1,
  diningInterior2:  rest2,
  diningInterior3:  rest3,
  diningInterior4:  rest4,

  // Legacy "food" keys now point to banquet/conference imagery
  diningSalad:      banq1,
  diningTandoori:   rest2, // Dakshin restaurant — set tables, proper dining hall
  diningPlate3:     rest1,
  diningPlate4:     rest2,
  diningPlate5:     rest3,

  // Banquets / Celebrations
  banquetGrand:     grand9Hall, // Grand-9 ballroom — theatre seating
  banquetGrand2:    banq2,
  banquetHall:      banq3,
  conferenceRed:    conferenceRedV2,
  meetingMarble:    pavilionBoardroom,
  conferenceArch:   boardroomTable,

  // Temple
  temple:           TEMPLE,
} as const;

// ---- Expanded interior set (curated from owner Drive, enhanced) ----
import roomA from "../assets/nivaara2/room-a.jpg";
import roomB from "../assets/nivaara2/room-b.jpg";
import roomC from "../assets/nivaara2/room-c.jpg";
import roomD from "../assets/nivaara2/room-d.jpg";
import roomE from "../assets/nivaara2/room-e.jpg";
import roomF from "../assets/nivaara2/room-f.jpg";
import roomG from "../assets/nivaara2/room-g.jpg";
import roomH from "../assets/nivaara2/room-h.jpg";
import roomI from "../assets/nivaara2/room-i.jpg";
import roomJ from "../assets/nivaara2/room-j.jpg";
import roomK from "../assets/nivaara2/room-k.jpg";
import roomL from "../assets/nivaara2/room-l.jpg";
import roomM from "../assets/nivaara2/room-m.jpg";
import roomN from "../assets/nivaara2/room-n.jpg";
import roomO from "../assets/nivaara2/room-o.jpg";
import bathA from "../assets/nivaara2/bath-a.jpg";
import bathB from "../assets/nivaara2/bath-b.jpg";
import bathC from "../assets/nivaara2/bath-c-rotated.jpg"; // rotated 90° left (counter-clockwise) for gallery layout
import vanityA from "../assets/nivaara2/vanity-a.jpg";
import vanityB from "../assets/nivaara2/vanity-b.jpg";
import corridorA from "../assets/nivaara2/corridor-a.jpg";
import corridorB from "../assets/nivaara2/corridor-b.jpg";
import corridorC from "../assets/nivaara2/corridor-c.jpg";
import foyerA from "../assets/nivaara2/foyer-a.jpg";

// Curated gallery — segregated to match the gallery filter chips:
// Exterior / Interior / Dining / Banquets / Tirumala
export const GALLERY = [
  // ── Exterior ─────────────────────────────────────────
  { src: IMG.exteriorTwilight, cat: "Exterior", alt: "Hotel Nivaara contemporary glass facade against the Tirupati sky" },
  { src: IMG.exteriorWalk,     cat: "Exterior", alt: "Angled street-level view of the Hotel Nivaara tower" },
  { src: IMG.exteriorNight,    cat: "Exterior", alt: "Frontal facade of Hotel Nivaara at dusk" },

  // ── Interior — Lobby & Arrival ───────────────────────
  { src: IMG.lobbyChandelier,  cat: "Interior", alt: "Grand lobby with crystal chandelier and marble floor" },
  { src: IMG.reception,        cat: "Interior", alt: "Reception counter framed in warm wood" },
  { src: IMG.entranceArch,     cat: "Interior", alt: "Reception niche with bronze elephant accents" },
  { src: foyerA,           cat: "Interior", alt: "Guest lounge seating with planters and natural light" },

  // ── Interior — Rooms ─────────────────────────────────
  { src: roomA, cat: "Interior", alt: "Executive Room with plush bedding and lounge chairs" },
  { src: roomB, cat: "Interior", alt: "Premium room with work desk and mirrored wardrobe" },
  { src: roomC, cat: "Interior", alt: "Warm-lit Executive Room with king bed" },
  { src: roomD, cat: "Interior", alt: "Executive room with mood-lit cove ceiling" },
  { src: roomE, cat: "Interior", alt: "Spacious Executive King room with feature headboard" },
  { src: roomF, cat: "Interior", alt: "King-bed room with leather lounge accent" },
  { src: roomG, cat: "Interior", alt: "Bright Executive Room with framed art and seating" },
  { src: roomH, cat: "Interior", alt: "Suite-style room with workspace and TV console" },
  { src: roomI, cat: "Interior", alt: "Executive King with mirrored wall and lounge chair" },
  { src: roomJ, cat: "Interior", alt: "Premium Executive room with full-length mirror" },
  { src: roomK, cat: "Interior", alt: "King-bed room with leather sofa and coffee table" },
  { src: roomL, cat: "Interior", alt: "Boutique-styled Executive room interior" },
  { src: roomM, cat: "Interior", alt: "Premium room with view of the city" },
  { src: roomN, cat: "Interior", alt: "Executive Room with twin beds" },
  { src: roomO, cat: "Interior", alt: "Twin-bed room with TV wall console" },
  { src: IMG.roomKing,     cat: "Interior", alt: "Executive Room — alternate angle" },
  { src: IMG.roomSuperior, cat: "Interior", alt: "Superior room with seating area" },

  // ── Interior — Vanity ────────────────────
  { src: vanityA, cat: "Interior", alt: "Dressing vanity with feature mirror and lounge chair" },
  { src: vanityB, cat: "Interior", alt: "In-room workspace with vanity mirror and wall-mounted TV" },

  // ── Interior — Corridors ─────────────────────────────
  { src: corridorA, cat: "Interior", alt: "Guest corridor with cove lighting and timber doors" },
  { src: corridorB, cat: "Interior", alt: "Long corridor with potted greenery and ambient lighting" },
  { src: corridorC, cat: "Interior", alt: "Symmetrical guest-room corridor with linear lighting" },

  // ── Dining ───────────────────────────────────────────
  { src: IMG.diningHall,      cat: "Dining", alt: "Dakshin restaurant — main dining hall set with linens" },
  { src: IMG.diningInterior2, cat: "Dining", alt: "Restaurant dining area with table settings" },
  { src: IMG.diningInterior3, cat: "Dining", alt: "Dakshin signage at the restaurant entrance" },
  { src: IMG.diningInterior4, cat: "Dining", alt: "All-day buffet spread at Dakshin" },

  // ── Banquets ─────────────────────────────────────────
  { src: IMG.banquetGrand,   cat: "Banquets", alt: "Grand-9 ballroom set in theatre style" },
  { src: IMG.banquetGrand2,  cat: "Banquets", alt: "Banquet hall with linen-draped chairs and gold sashes" },
  { src: IMG.banquetHall,    cat: "Banquets", alt: "Pillarless banquet hall ready for event setup" },
  { src: IMG.conferenceArch, cat: "Banquets", alt: "Conference hall with arched lighting niche" },
  { src: IMG.conferenceRed,  cat: "Banquets", alt: "Banquet hall with red drape accents" },

  // ── Tirumala ─────────────────────────────────────────
  { src: tirumala1, cat: "Tirumala", alt: "Golden vimana of Sri Venkateswara Temple at sunrise with mist over Tirumala hills" },
  { src: tirumala2, cat: "Tirumala", alt: "Aerial view of Tirumala temple complex nestled in the Seshachalam hills" },
  { src: tirumala5, cat: "Tirumala", alt: "Tirumala gopuram illuminated against a starry night sky" },
  { src: tirumala4, cat: "Tirumala", alt: "Pilgrims ascending the sacred Alipiri steps to Tirumala" },
  { src: tirumala3, cat: "Tirumala", alt: "Brass oil lamps and marigold garlands glowing at the temple at dusk" },
  { src: IMG.temple, cat: "Tirumala", alt: "Sri Venkateswara temple architecture in Tirumala" },
] as const;
