# Configurazione Cloudflare per zerox.technology

## Passi per migliorare la sicurezza HTTPS:

### 1. Registrati su Cloudflare
- Vai su cloudflare.com
- Aggiungi il sito zerox.technology

### 2. Cambia i Nameserver del dominio
Sostituisci i nameserver attuali con quelli di Cloudflare:
```
ns1.cloudflare.com
ns2.cloudflare.com
```

### 3. Configurazioni DNS su Cloudflare
Crea questi record DNS:
```
Type: CNAME
Name: @
Content: m3nk4.github.io
Proxy: Arancione (Proxied)

Type: CNAME  
Name: www
Content: m3nk4.github.io
Proxy: Arancione (Proxied)
```

### 4. Impostazioni SSL/TLS
- SSL/TLS → Overview → Modalità: "Full"
- SSL/TLS → Edge Certificates → "Always Use HTTPS": ON
- SSL/TLS → Edge Certificates → "HSTS": Abilita

### 5. Security Settings
- Security → Settings → Security Level: "Medium"
- Security → Bot Fight Mode: ON

### Vantaggi:
✅ Certificato SSL automatico
✅ CDN globale (sito più veloce)
✅ Protezione DDoS
✅ Always HTTPS
✅ Cache intelligente