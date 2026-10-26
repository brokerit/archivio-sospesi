# Archivio Sospesi — Evolvia · A4 Energie

Piccola web app per gestire i contratti in sospeso tra il Back Office di Evolvia e il Back Office di A4 Energie.

| Colonna | Chi la compila |
|---|---|
| Cliente | BO Evolvia |
| Plico | BO Evolvia |
| Note BO (motivo del sospeso) | BO Evolvia |
| Allegati (PDF, JPG, HEIC) | A4 Energie (anche Evolvia può caricare) |
| Note Partner | A4 Energie |

**Stati automatici**
- *In attesa partner* → quando crei la pratica
- *Risposta ricevuta* → appena A4 scrive una nota o carica un file
- *Chiusa* → la chiudi tu dal pulsante "Chiudi pratica" (puoi anche "Rimandare al partner" o "Riaprire")

Gli aggiornamenti arrivano in tempo reale: se A4 carica un documento lo vedi comparire senza ricaricare la pagina.
Le foto HEIC dell'iPhone vengono convertite in JPG al caricamento, così si aprono su qualsiasi PC.

**Sicurezza:** nessuna registrazione pubblica, solo gli account che crei tu. Il bucket dei file è privato
(link di download temporanei di 2 minuti). Il partner può modificare solo le proprie note, non cliente/plico/note BO,
e può eliminare solo i file caricati da lui.

---

## Messa online (circa 15 minuti)

### 1. Supabase
1. Crea un nuovo progetto su supabase.com (piano gratuito va benissimo).
2. **SQL Editor → New query** → incolla tutto `supabase/schema.sql` → **Run**.
3. **Authentication → Sign In / Providers → Email**: disattiva *Allow new users to sign up*.
4. **Authentication → Users → Add user → Create new user**: crea il tuo account e quello di A4 (spunta *Auto Confirm User*).
5. Apri `supabase/utenti.sql`, sostituisci le email e lancialo nel SQL Editor.
6. **Project Settings → API**: copia *Project URL* e *anon public key*.

### 2. In locale (facoltativo, per provarla)
```bash
cp .env.example .env      # incolla URL e anon key
npm install
npm run dev
```

### 3. Vercel
1. Carica la cartella su un repo GitHub e importalo su Vercel (framework: Vite, rilevato da solo).
2. In **Environment Variables** aggiungi `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`.
3. Deploy. Se vuoi, collega un sottodominio (es. `sospesi.evolviaticketing.it`).

---

## Struttura
```
supabase/schema.sql    tabelle, permessi, bucket file, realtime
supabase/utenti.sql    assegnazione ruoli (bo / partner)
src/App.jsx            login + caricamento profilo
src/components/        Archivio, Pratica, Allegati, NuovaPratica
```
