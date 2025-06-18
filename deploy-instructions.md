
# Deploy su GitHub Pages con Dominio Personalizzato

## Passi da seguire:

### 1. Connessione GitHub
1. In Lovable, clicca su GitHub → Connect to GitHub
2. Autorizza l'app Lovable su GitHub
3. Seleziona il tuo account GitHub
4. Clicca "Create Repository"

### 2. Configurazione GitHub Pages
1. Vai nelle impostazioni del repository su GitHub
2. Sezione "Pages" → Source: **"GitHub Actions"** (NON "Deploy from a branch")
3. Il workflow si attiverà automaticamente ad ogni push

### 3. Configurazione DNS su Register.it
Per il tuo dominio su Register.it, configura questi record DNS:

**Record A (per il dominio principale):**
```
Nome: @
Tipo: A
Valore: 185.199.108.153
TTL: 3600

Nome: @
Tipo: A  
Valore: 185.199.109.153
TTL: 3600

Nome: @
Tipo: A
Valore: 185.199.110.153
TTL: 3600

Nome: @
Tipo: A
Valore: 185.199.111.153
TTL: 3600
```

**Record CNAME (per www):**
```
Nome: www
Tipo: CNAME
Valore: tuousername.github.io
TTL: 3600
```

### 4. Configurazione Supabase
Nel dashboard Supabase, vai su Authentication → URL Configuration:

**Site URL:** `https://zerox.technology`

**Redirect URLs:**
- `https://zerox.technology/**`
- `https://www.zerox.technology/**`
- `https://tuousername.github.io/**` (per testing)

### 5. Verifica Configurazione GitHub Pages
**IMPORTANTE:** Nella sezione Pages delle impostazioni GitHub:
- Source deve essere impostato su **"GitHub Actions"**
- NON selezionare "Deploy from a branch"
- Il file CNAME viene gestito automaticamente dal workflow

### 6. Test del Deploy
Dopo aver configurato tutto:
1. Fai un commit e push al repository
2. Controlla la tab "Actions" su GitHub per vedere il progresso
3. Una volta completato, il sito sarà disponibile su zerox.technology

## Note Importanti:
- Usa il nuovo sistema GitHub Actions (non il vecchio gh-pages)
- La propagazione DNS può richiedere 24-48 ore
- GitHub Pages abilita automaticamente HTTPS
- Il sito si aggiorna automaticamente ad ogni push su main
- Tutti i file statici sono ottimizzati per la produzione

## Risoluzione Problemi:
- Se vedi 404, verifica che Source sia "GitHub Actions" nelle impostazioni Pages
- Controlla che il workflow sia completato con successo nella tab Actions
- Verifica che il dominio personalizzato sia configurato correttamente
