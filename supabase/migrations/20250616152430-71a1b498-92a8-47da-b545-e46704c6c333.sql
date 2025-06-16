
-- Rimuovi le colonne non utilizzate dalla tabella contacts
ALTER TABLE public.contacts 
DROP COLUMN IF EXISTS country_code,
DROP COLUMN IF EXISTS whatsapp_number;

-- Aggiungi un indice per migliorare le performance sulle query per email
CREATE INDEX IF NOT EXISTS idx_contacts_email ON public.contacts(email);

-- Aggiungi un indice per le query ordinate per data di creazione
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON public.contacts(created_at DESC);

-- Aggiungi un constraint per assicurarsi che l'email sia unica
ALTER TABLE public.contacts 
ADD CONSTRAINT contacts_email_unique UNIQUE (email);
