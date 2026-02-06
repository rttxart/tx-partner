# TX-Partner - Lessons Learned

Dieses Dokument wird nach jeder Korrektur durch den User aktualisiert.
**Review bei Session-Start für relevante Patterns.**

---

## Projekt-spezifische Learnings

### Footer-Konsistenz (05.02.2026)
- **Problem:** Footer-Styling war inkonsistent über 14+ HTML-Dateien
- **Lesson:** Bei Änderungen an wiederkehrenden Komponenten (Header, Footer, Nav) IMMER alle Dateien prüfen
- **Pattern:** Nutze `Grep` mit `replace_all` für konsistente Änderungen

### Aktive Seiten-Hervorhebung
- **Entscheidung:** Nur Farbe (`text-brand-teal`), KEIN `font-bold`
- **Standard:** `text-sm font-medium text-brand-teal dark:text-white transition-colors`

### Layout-Probleme
- **Problem:** Grid-Layout auf Blockpit-Seite war unausgewogen (Deep Dive unterbrach das Grid)
- **Lesson:** Bei Grid-Layouts prüfen, ob col-span Elemente das Layout stören
- **Fix:** Große Banner/Deep-Dives VOR das Grid setzen, nicht mittendrin

---

## Allgemeine Patterns

### Vor Code-Änderungen
- [ ] Datei zuerst lesen (Read Tool)
- [ ] Bei mehreren Dateien: Explore Agent für Konsistenz-Check
- [ ] `npm run build` nach CSS/HTML Änderungen

### Nach Änderungen
- [ ] Lokalen Server starten und visuell prüfen
- [ ] Mobile-View testen
- [ ] Dark Mode testen

---

## Content-Team Learnings (06.02.2026)

### Begrifflichkeiten - KRITISCH
- **"Krypto-Dokumentation"** ist der EINZIGE Begriff für unsere Dienstleistung
- **NIEMALS "Datengrundlage"** verwenden – das ist kein TX-Partner Begriff
- **"Krypto-Steuertool"** statt "Steuersoftware" (state-of-the-art)

### Markenpositionierung
- TX-Partner immer als **Lösung** positionieren, nicht nur Problem beschreiben
- **Keine Formulierungen**, die andere Anbieter implizieren ("Spezialisten", "Experten")
- Bei Aufzählungen: **"TX-Partner"** statt "Wir" verwenden
- **Kurze Aussagen!** "TX-Partner hat sich auf X spezialisiert." – Fertig.
- **Nicht beschreiben**, was TX-Partner NICHT macht ("Bei einfachen Portfolios reicht...")

### Absolute Aussagen vermeiden
- Immer relativieren: **"meist", "in der Regel", "häufig", "kann", "vermutlich"**
- Keine Garantien oder 100%-Aussagen
- Raum für Ausnahmen lassen

### Tonalität
- **Keine Angst schüren** (FOMO vermeiden)
- Sachlich und professionell, nicht reißerisch
- **"analysieren"** statt "schauen" – professionelle Verben
- Kurz & prägnant – keine langen Erklärungen wenn kurz reicht

### CTA-Formulierung
- **"Unverbindlich"** statt "kostenlos" (oder kostenlos am Ende)
- **Niemals "Verkaufsgespräch"** erwähnen
- Professionelle Sprache im CTA

### Verantwortung
- "Deine Krypto-Dokumentation ist deine Verantwortung."
- "TX-Partner unterstützt dich dabei, dieser Verantwortung nachzukommen."
- Verantwortung bleibt rechtlich beim Kunden!

---

## Offene Verbesserungen

*(Hier Punkte eintragen, die noch nicht umgesetzt wurden)*

---

*Letzte Aktualisierung: 06.02.2026*
