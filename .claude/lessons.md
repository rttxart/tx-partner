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

## Offene Verbesserungen

*(Hier Punkte eintragen, die noch nicht umgesetzt wurden)*

---

*Letzte Aktualisierung: 05.02.2026*
