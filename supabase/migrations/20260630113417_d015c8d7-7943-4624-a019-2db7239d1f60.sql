
CREATE TABLE public.payments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  purpose TEXT NOT NULL,
  amount_paise INTEGER NOT NULL CHECK (amount_paise >= 100),
  currency TEXT NOT NULL DEFAULT 'INR',
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  notes TEXT,
  razorpay_order_id TEXT NOT NULL UNIQUE,
  razorpay_payment_id TEXT,
  razorpay_signature TEXT,
  status TEXT NOT NULL DEFAULT 'created' CHECK (status IN ('created','paid','failed')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT ALL ON public.payments TO service_role;
-- No anon or authenticated grants: only the server (service role) reads/writes this table.

ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
-- Deny-by-default; no policies = no client access. Server uses service role and bypasses RLS.

CREATE INDEX payments_status_idx ON public.payments (status, created_at DESC);
CREATE INDEX payments_email_idx  ON public.payments (customer_email);
