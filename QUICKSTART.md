# Quickstart — Erstes Setup auf dem MacBook

**Nur einmal nötig.** Sobald das Repo lokal eingerichtet ist, läuft alles über `git pull` / `git push` (siehe WORKFLOW.md).

---

## Voraussetzungen-Check (3 Min)

```bash
node --version    # ≥ 20
git --version
gh --version      # falls nicht: brew install gh
claude --version
```

Falls `claude` fehlt: https://claude.com/code installieren.

GitHub-Login einmalig:
```bash
gh auth login
```

---

## 1. Terminal öffnen, Projekt-Verzeichnis

```bash
cd ~/Code   # oder dein gewohntes Code-Verzeichnis
```

---

## 2. Next.js Projekt erstellen

```bash
npx create-next-app@latest neue-herbold \
  --typescript --tailwind --app --src-dir \
  --import-alias "@/*" --no-eslint --turbopack --yes

cd neue-herbold
```

---

## 3. Dependencies installieren

```bash
# Core
npm install framer-motion lucide-react
npm install react-hook-form @hookform/resolvers zod

# shadcn/ui
npx shadcn@latest init -d
npx shadcn@latest add button card dialog input textarea label select tabs accordion sheet

# Dev
npm install -D prettier prettier-plugin-tailwindcss
```

---

## 4. Plan-Dateien aus OneDrive rüberkopieren

```bash
# Pfad anpassen falls dein OneDrive anders heißt — check mit: ls ~/Library/CloudStorage/
ONEDRIVE="~/Library/CloudStorage/OneDrive-Personal/JR Agency Services/16_Code-Websites/NEUE HERBOLD"

cp "$ONEDRIVE/PLAN.md" .
cp "$ONEDRIVE/PROGRESS.md" .
cp "$ONEDRIVE/WORKFLOW.md" .
cp "$ONEDRIVE/CLAUDE-START-PROMPT.md" .
cp "$ONEDRIVE/neue-herbold-website-analyse.md" ./CONTENT.md
```

---

## 5. Mit dem bestehenden GitHub-Repo verbinden

Das Repo existiert schon: https://github.com/volljonas45-byte/NEUE-HERBOLD-Maschinen-u.-Anlagenbau-GmbH

```bash
# Default-Remote entfernen (create-next-app setzt manchmal eins)
git remote remove origin 2>/dev/null || true

# Echtes Repo verbinden
git remote add origin https://github.com/volljonas45-byte/NEUE-HERBOLD-Maschinen-u.-Anlagenbau-GmbH.git
git branch -M main

# Falls im Repo schon Files sind (z.B. README): erst pullen mit unrelated-histories
git pull origin main --allow-unrelated-histories --no-edit || true
```

---

## 6. Erster Commit + Push

```bash
git add .
git commit -m "init: next.js setup + plan files"
git push -u origin main
```

→ Auf GitHub.com prüfen ob Files angekommen sind.

---

## 7. Editor + Claude Code öffnen

```bash
cursor .   # oder: code .
claude     # in einem zweiten Terminal-Tab
```

---

## 8. Ersten Prompt an Claude Code

Öffne `CLAUDE-START-PROMPT.md`, kopiere den Inhalt, schicke ihn an Claude Code.

Claude Code wird:
1. PLAN.md, PROGRESS.md, WORKFLOW.md, CONTENT.md lesen
2. Status zusammenfassen
3. Mit Phase 0 (Setup abschließen) + Phase 1 (Design System) starten
4. Nach jedem Schritt PROGRESS.md updaten + committen + pushen
5. Du siehst Fortschritt live auf der GitHub-Pages-URL

---

## 9. Dev-Server starten

In einem dritten Terminal-Tab:

```bash
npm run dev
# → http://localhost:3000
```

---

## Wichtige URLs

| Was | URL |
|---|---|
| Repo | https://github.com/volljonas45-byte/NEUE-HERBOLD-Maschinen-u.-Anlagenbau-GmbH |
| Live (sobald 1. Push da ist) | https://volljonas45-byte.github.io/NEUE-HERBOLD-Maschinen-u.-Anlagenbau-GmbH/ |
| GitHub Actions | https://github.com/volljonas45-byte/NEUE-HERBOLD-Maschinen-u.-Anlagenbau-GmbH/actions |
| Lokal | http://localhost:3000 |

---

## YouTube-Videos vorab herunterladen (parallel, im Hintergrund)

```bash
brew install yt-dlp
mkdir -p ~/Downloads/neue-herbold-videos
cd ~/Downloads/neue-herbold-videos

yt-dlp -f "bestvideo[height<=1080]+bestaudio/best" --merge-output-format mp4 \
  -o "%(title)s.%(ext)s" \
  https://www.youtube.com/watch?v=ssMCAo14qYk \
  https://www.youtube.com/watch?v=5g7265pXYgw \
  https://www.youtube.com/watch?v=PWBjv18xMKE \
  https://www.youtube.com/watch?v=VU13SomD7hI \
  https://www.youtube.com/watch?v=c67ISqz_1Ek \
  https://www.youtube.com/watch?v=mBMmbgb4gkk \
  https://www.youtube.com/watch?v=fqJ4G8xg-Q4 \
  https://www.youtube.com/watch?v=4_mWQKqTOa4 \
  https://www.youtube.com/watch?v=WnOvJc_qeB0 \
  "https://www.youtube.com/watch?v=-bs5NEf7veg" \
  https://www.youtube.com/watch?v=dqd5KiCyupA \
  https://www.youtube.com/watch?v=Ikp-6CZ7DqE \
  https://www.youtube.com/watch?v=v2rnYFtglgw
```

Diese landen später in `public/videos/` im Projekt.

---

## Auf dem zweiten Gerät (später)

Du brauchst KEINEN Quickstart mehr — siehe `WORKFLOW.md`. Kurz:

```bash
git clone https://github.com/volljonas45-byte/NEUE-HERBOLD-Maschinen-u.-Anlagenbau-GmbH.git neue-herbold
cd neue-herbold
npm install
npm run dev
claude
```

Alles andere (PLAN.md, PROGRESS.md, Code) ist schon im Repo.
