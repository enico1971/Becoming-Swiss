# PWA-Testpaket — "Einbürgerung CH 2027" (alle Sperren aus)

⚠️ Nur zum Testen gedacht. Für den echten App-Store-Build (geplante
Einreichung: Januar) das andere Paket verwenden
(`einbuergerungstest-update.zip`) — nicht dieses hier.

## Was hier anders ist als in der echten App
Alle Freemium-Sperren sind für diesen Testbuild bewusst **deaktiviert**
(`FREE.isPro` ist fest auf `true` gesetzt):
- Alle 26 Kantone sofort offen, kein 🔒
- Kein 10-Fragen/Tag-Limit
- Volle 30er-Prüfungssimulation direkt verfügbar
- Badge zeigt "★ PRO"

Das ist so gewollt — Zweck ist, die gesamte App ohne Einschränkung
durchzuklicken und zu prüfen, ob alles funktioniert (Fragen, Kantone,
Sprachen, Lernkarten, Dashboard, Prüfungssimulation).

## So testest du
1. Diesen Ordnerinhalt in ein GitHub-Repo laden
2. Settings → Pages → Source: main branch aktivieren
3. Link öffnen (z. B. `https://dein-user.github.io/dein-repo/`)
4. Am Handy: "Zum Home-Bildschirm hinzufügen" für den vollen App-ähnlichen
   Eindruck (Icon, kein Browser-Rahmen, offline-fähig)

## Was hiermit NICHT testbar ist
- Die echte Kaufsperre (die ist hier absichtlich aus)
- Der echte In-App-Kauf-Vorgang (StoreKit gibt's nur in der nativen iOS-App)
- Die App-Store-Bewertungsanfrage (braucht ebenfalls das native Plugin)

Für die Sperr-Logik selbst gibt es ein separates Testpaket mit
`?testpro=1`-Schalter — falls du das nochmal brauchst, sag Bescheid.
