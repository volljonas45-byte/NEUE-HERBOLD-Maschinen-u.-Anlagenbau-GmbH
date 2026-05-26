# Multi-Device-Workflow

Dieses Projekt wird auf mehreren Geräten bearbeitet (MacBook + andere). Damit nichts schiefgeht, gibt es klare Regeln. **Strikt einhalten**, dann läuft alles reibungslos.

---

## Single Source of Truth: das Git-Repo

**Repo:** https://github.com/volljonas45-byte/NEUE-HERBOLD-Maschinen-u.-Anlagenbau-GmbH
**Live:** https://volljonas45-byte.github.io/NEUE-HERBOLD-Maschinen-u.-Anlagenbau-GmbH/

Alles Wichtige lebt im Repo:
- Der Code
- `PLAN.md` (Master-Plan)
- `PROGRESS.md` (aktueller Stand, was abgehakt ist)
- `CONTENT.md` (Crawl-Daten der alten Site)
- `WORKFLOW.md` (diese Datei)
- `CLAUDE-START-PROMPT.md` (Erst-Prompt für Claude Code)

OneDrive ist nur die initiale Ablage — sobald das Repo läuft, ist Git die Quelle der Wahrheit.

---

## Bevor du ein Gerät verlässt (Stop-Routine, ~2 Min)

Egal ob Mittagspause oder Geräte-Wechsel: **immer** diese Schritte durchgehen.

```bash
# 1. PROGRESS.md aktualisieren — kritisch!
#    - Erledigte Checkboxen [x] markieren
#    - "Letzte Aktualisierung" mit Datum + Uhrzeit + Gerät updaten
#    - "Was als nächstes" präzise eintragen
#    - "Aktuelle Probleme" eintragen falls etwas hängt

# 2. Alle Änderungen committen
git add .
git status                                  # check was reingeht
git commit -m "wip: <kurz was du gemacht hast>"

# 3. Pushen
git push

# 4. Prüfen: GitHub Action läuft? Live-URL aktualisiert?
#    https://github.com/volljonas45-byte/NEUE-HERBOLD-Maschinen-u.-Anlagenbau-GmbH/actions
```

**Wenn etwas halbfertig ist:** kein Problem — `wip:` als Commit-Prefix nutzen. PROGRESS.md sollte trotzdem klar sagen "Schritt X ist halb fertig, Buttons noch nicht fertig gestyled".

---

## Wenn du auf einem neuen Gerät startest (Start-Routine, ~3 Min)

```bash
# 1. Ins Projekt-Verzeichnis (oder erstmals clonen, siehe QUICKSTART.md)
cd ~/Code/neue-herbold

# 2. Aktuellen Stand pullen
git pull

# 3. Dependencies aktualisieren falls package.json geändert wurde
npm install

# 4. PROGRESS.md lesen — das ist der wichtigste Schritt
#    - "Letzte Aktualisierung" → wann + Gerät + wer
#    - "Was als nächstes" → das ist dein Startpunkt
#    - "Aktuelle Probleme" → falls da was steht, das zuerst klären
#    - Checkliste durchgehen → wo stehen wir?

# 5. Dev-Server starten
npm run dev

# 6. Claude Code starten und Kontext geben
claude
```

**Erster Prompt an Claude Code beim Wechseln:**

> Wir arbeiten an einem laufenden Projekt. Lies bitte zuerst `PROGRESS.md`, `PLAN.md` und falls nötig `CONTENT.md`. Sage mir dann wo wir stehen, welche Phase aktiv ist, was als nächstes ansteht, und ob es offene Probleme gibt. Dann legen wir los.

Claude Code holt sich den Kontext aus den Files — kein Kontext-Verlust beim Wechseln.

---

## Was NIE committed wird

Im `.gitignore` (wird von `create-next-app` schon meist korrekt gesetzt):

```
node_modules/
.next/
out/
.env*.local
.DS_Store
*.log
.vscode/
.cursor/
```

**Was committen wir IMMER:**
- `package.json` + `package-lock.json`
- Alle `.md` Dateien
- Alle Source-Files in `src/`
- `public/` Assets (Bilder, Videos)
- `next.config.ts`, `tsconfig.json`, etc.
- `.github/workflows/`

---

## Konflikte vermeiden

Bei zwei Geräten Konflikt-Risiko minimal halten:

1. **Pro Gerät immer:** erst `git pull` bevor Änderungen
2. **Keine Stash-Tricks** nötig wenn man die Stop-Routine konsequent macht
3. **Falls Konflikt entsteht** (selten weil nur du arbeitest):
   ```bash
   git pull --rebase
   # Konflikte manuell auflösen
   git add <conflicted-files>
   git rebase --continue
   git push
   ```

---

## Schnell-Referenz

| Aktion | Command |
|---|---|
| Stand pullen | `git pull` |
| Was hat sich geändert | `git status` |
| Was hab ich geändert | `git diff` |
| Commit | `git add . && git commit -m "msg"` |
| Push | `git push` |
| Letzte Commits | `git log --oneline -10` |
| GitHub Action Status | https://github.com/volljonas45-byte/NEUE-HERBOLD-Maschinen-u.-Anlagenbau-GmbH/actions |
| Live Site | https://volljonas45-byte.github.io/NEUE-HERBOLD-Maschinen-u.-Anlagenbau-GmbH/ |
| Lokaler Dev-Server | `npm run dev` → http://localhost:3000 |

---

## Tägliche Checkliste

**Vor dem ersten Code:**
- [ ] `git pull`
- [ ] `npm install` (falls nötig)
- [ ] PROGRESS.md gelesen
- [ ] Klar was zu tun ist

**Vor jeder Pause / vor Geräte-Wechsel:**
- [ ] PROGRESS.md aktualisiert (Checkboxen, "Was als nächstes")
- [ ] `git add . && git commit -m "..."`
- [ ] `git push`
- [ ] GitHub Action erfolgreich? (Browser-Tab)

**Am Ende des Tages:**
- [ ] Tagebuch-Eintrag in PROGRESS.md Changelog
- [ ] Alles gepusht
- [ ] Live-URL geöffnet, Stand visuell verifiziert
