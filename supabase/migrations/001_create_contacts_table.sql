-- Crea la tabella contacts per salvare gli indirizzi email
CREATE TABLE IF NOT EXISTS public.contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Abilita Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Crea una policy per permettere inserimenti pubblici (solo inserimento)
CREATE POLICY "Enable insert access for all users" ON public.contacts
    FOR INSERT WITH CHECK (true);

-- Crea una policy per permettere lettura solo agli amministratori autenticati
CREATE POLICY "Enable read access for authenticated users" ON public.contacts
    FOR SELECT USING (auth.role() = 'authenticated');