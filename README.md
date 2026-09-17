# Bytefeld – Website

Astro, statische Ausgabe, kein JavaScript im Browser.

## Wo was steht
- Alle Inhalte: `src/data/kunde.json` (`todo`-Felder = gelbe Frage-Kästen; leer = kein Kasten)
- Farben und Schriften: oberster Block in `src/styles/global.css`
- Roboter-Animation: `src/components/Roboter.astro` (Baustein, nur CSS/HTML; Klick zeigt Sprechblase)
- Kontaktformular: `src/components/Formular.astro` (Baustein; leeres `formular.ziel` = Entwurf, Knopf deaktiviert; Versand später per PHP beim Hoster)
- Beispiel-Inhalte: `"beispiel": true` zeigt ein gelbes „Beispiel“-Schild – vor dem Livegang überall entfernen
- `"entwurf": true` in `kunde.json` sperrt die Seite für Suchmaschinen – zum Livegang auf `false`

## Lokal starten
```bash
npm install
npm run dev
```

## Entwurf auf GitHub Pages
1. Einmal lokal `npm install` ausführen (erzeugt `package-lock.json`, wird für den Deploy gebraucht).
2. Repo `bytefeld-website` unter `dbraun98` anlegen und pushen.
3. Im Repo unter Settings → Pages als Quelle „GitHub Actions“ wählen.
4. Nach jedem Push auf `main` liegt der Entwurf unter https://dbraun98.github.io/bytefeld-website/

## Zum Livegang
In `astro.config.mjs` `site` auf die echte Domain setzen und `base` entfernen.
