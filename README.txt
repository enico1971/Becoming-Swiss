# Becoming Swiss — PWA (installierbar & offline)

Dieser Ordner enthält die App als **Progressive Web App**: installierbar auf dem Handy und offline nutzbar.

## Dateien
- `index.html` — die App
- `manifest.json` — App-Infos (Name, Icon, Farben)
- `service-worker.js` — macht die App offline-fähig
- `icon-192.png`, `icon-512.png` — App-Symbol (Schweizer Kreuz)

## Wichtig: PWA braucht einen Webserver (https)
Eine PWA funktioniert **nicht** per Doppelklick (`file://`). Sie braucht http(s).
Zwei einfache Wege:

### A) Lokal testen (am Computer)
Im Ordner ein Terminal öffnen und starten:
```
python3 -m http.server 8000
```
Dann im Browser öffnen: `http://localhost:8000`
Dort kann der Service Worker laufen und du kannst „installieren".

### B) Kostenlos veröffentlichen (empfohlen)
Lade den **ganzen Ordner** auf einen dieser Gratis-Dienste:
- **Netlify Drop**: app.netlify.com/drop — Ordner reinziehen, fertig (sofort https-Link)
- **GitHub Pages**: Repo erstellen, Dateien hochladen, Pages aktivieren
- **Vercel**: vercel.com — Ordner hochladen

Du bekommst eine https-Adresse. Diese am Handy öffnen → Browser bietet „Zum Startbildschirm hinzufügen" an.

## Installieren am Handy
- **iPhone (Safari)**: Teilen-Symbol → „Zum Home-Bildschirm"
- **Android (Chrome)**: Menü ⋮ → „App installieren" / „Zum Startbildschirm hinzufügen"

Danach startet die App wie eine echte App — auch ohne Internet.

## Hinweis zum Speicher (Fortschritt)
Auf einer echten https-Seite funktioniert das Speichern (localStorage) voll: Fortschritt,
unterbrochene Tests usw. bleiben erhalten. In der Vorschau (Artefakt) war das gesperrt.
