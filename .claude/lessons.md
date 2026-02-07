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

## Team-Orchestrierung Learnings (07.02.2026)

### KRITISCH: Teams bei Content-Erstellung IMMER einsetzen
- **Problem:** Content ohne Team-Orchestrierung erstellt → fehlende Markenidentität, falscher Ton
- **Lesson:** IMMER die TX-Partner Agenten konsultieren, BEVOR Content geschrieben wird
- **Workflow:**
  1. Charakter-Guide → Ton & Persönlichkeit
  2. Blog-Autor → Content nach Template
  3. UI/UX Designer → Layout & Konsistenz
  4. Frontend-Entwickler → Implementierung

### DAC8-Blog-Template als Referenz
- `blog/krypto-dokumentation.html` ist das REFERENZ-Template für alle Blog-Artikel
- Struktur: Section Numbers, Pull-Quotes, Info-Boxes, Sticky ToC, Aurora Card CTA
- IMMER dieses Template als Vorlage nutzen!

### Dark Mode Script MUSS im Head
- Das Dark Mode Script MUSS im `<head>` VOR allen anderen Scripts stehen
- Ohne dieses Script: Flash of unstyled content + Dark Mode funktioniert nicht
- Template kopieren von bestehenden funktionierenden Seiten

---

## Tool-spezifische Learnings (07.02.2026)

### CoinTracking-spezifisch
- **Scam-Tokens/Dust Attacks**: Bei CoinTracking häufiges Problem wegen Ticker-Namen-Logik
- **Spam Center**: CoinTracking hat ein Spam Center wo man Scam-Token-Contracts markieren kann
- **"Analyse → Checks"**: Der alte "Transaktionsfluss Report" heißt jetzt "Analyse → Checks"
- **Manuelle Einträge erkennen**: NICHT am "Typ" erkennbar (ist immer gleich), sondern wenn TX keine ID (Tx-Hash) hat
- **Börsen-Namen**: Häufiges Problem: Namen falsch geschrieben oder ausgelassen

### Blockpit-spezifisch
- **KEINE Scam-Tokens/Dust Attacks**: Bei Blockpit untypisch (anders als CoinTracking)
- **"merge"**: Blockpit-Terminologie für "Zusammenführen"
- **Ursache für doppelte Einträge**: Wenn bestehende TX nicht zum Transfer gemerged wird und stattdessen manuell eingetragen
- **Balancing-Einträge**: Verschwinden automatisch bei Neuberechnung – NICHT manuell entfernen!
- **"DeFi"** statt "Bridge TX": Bridge ist nur ein Teil von DeFi-Problemen

---

## UI/UX Learnings (07.02.2026)

### Hero H1 Standard (KRITISCH!)
- **NUR `hero-h1` Class verwenden** - keine zusätzlichen `text-3xl sm:text-4xl` etc.!
- Die `hero-h1` Klasse in input.css steuert alle responsive Größen
- **Kurze, prägnante Headlines** - max. 3-5 Wörter pro Zeile
- **Nur EIN Element mit Gradient** - nicht der ganze Text!
- Referenz: `index.html` Hero-Struktur

### Beispiel korrekter Hero:
```html
<h1 class="hero-h1 text-brand-navy dark:text-white mb-6 tracking-tight">
    <span class="text-gradient">Highlight</span><br>
    Rest der Headline
</h1>
```

### Keine neuen Effekte
- Nur bestehende CSS-Effekte verwenden (card-spotlight, aurora-card, etc.)
- Bei Unsicherheit: Referenz-Seiten prüfen

### Dark Mode Toggle (KRITISCH!)
- Das Script im `<head>` setzt nur den INITIALEN Zustand
- Der **Toggle-Button braucht ein separates EventListener-Script** am Ende von `<body>`
- IMMER prüfen ob beide Scripts vorhanden sind!

```javascript
// Am Ende von <body> vor </body>:
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
});
```

### Umlaute in Blogs
- ä, ö, ü verwenden, NICHT ae, oe, ue
- Bei Agent-generierten Texten: Umlaute prüfen!

---

## 50k Landingpage Template (07.02.2026)

### Referenz-Datei
`krypto-finanzamt-rueckfrage.html` ist das REFERENZ-Template für alle Landingpages.

### Pflicht-Elemente einer 50k Landingpage

#### 1. Dark Mode Scripts (BEIDE erforderlich!)
```html
<!-- Im <head> VOR allen anderen Scripts -->
<script>
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
</script>

<!-- Am Ende von <body> vor </body> -->
<script>
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    themeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
    });
</script>
```

#### 2. Scrollbar CSS (Light + Dark Mode)
```css
/* Scrollbar Light Mode */
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #f1f5f9; }
::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: #94a3b8; }

/* Scrollbar Dark Mode */
.dark ::-webkit-scrollbar-track { background: transparent; }
.dark ::-webkit-scrollbar-thumb { background: #334155; }
.dark ::-webkit-scrollbar-thumb:hover { background: #475569; }
```

#### 3. Hero H1 (Kurz & Prägnant)
```html
<h1 class="hero-h1 text-brand-navy dark:text-white mb-6 tracking-tight">
    <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-navy dark:to-white">Highlight</span><br>
    Rest der Headline?
</h1>
```
- **Max. 3-5 Wörter pro Zeile**
- **NUR ein Element mit Gradient**
- **Keine zusätzlichen font-size Klassen!**

#### 4. Stats Box (nach Hero)
```html
<section class="py-8 bg-white dark:bg-dark-bg">
    <div class="container mx-auto px-6 max-w-4xl">
        <div class="rounded-2xl p-6 md:p-8 bg-gradient-to-br from-brand-teal/5 to-brand-teal/10 dark:from-brand-teal/10 dark:to-brand-teal/15 border border-brand-teal/20 dark:border-brand-teal/30">
            <div class="text-center mb-4">
                <span class="text-xs font-bold uppercase tracking-widest text-brand-teal">Kontext-Label</span>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                    <div class="text-2xl md:text-3xl font-bold text-brand-navy dark:text-brand-teal">Wert</div>
                    <div class="text-xs text-slate-500 dark:text-slate-400 mt-1">Label</div>
                </div>
                <!-- 3 weitere Stats -->
            </div>
        </div>
    </div>
</section>
```

#### 5. Screenshot Premium-Styling (Dark Mode optimiert)
```html
<figure class="screenshot-figure">
    <div class="relative max-w-2xl mx-auto group">
        <div class="rounded-[24px] overflow-hidden bg-slate-100 dark:bg-[#0F0F0F] border border-slate-200 dark:border-white/5 shadow-2xl shadow-brand-navy/10 dark:shadow-black/40">
            <img src="..." alt="..." class="w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]" loading="lazy">
        </div>
        <div class="absolute inset-0 rounded-[24px] border border-white/10 pointer-events-none"></div>
    </div>
    <figcaption class="text-sm text-slate-500 dark:text-slate-400 mt-4 text-center">Caption</figcaption>
</figure>
```

#### 6. Final CTA (Aurora Card)
```html
<section class="below-fold py-20 bg-white dark:bg-dark-bg">
    <div class="container mx-auto max-w-6xl px-4 sm:px-6">
        <div class="relative rounded-card overflow-hidden text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-brand-navy dark:bg-[#0F0F0F] shadow-2xl shadow-brand-navy/30 dark:shadow-none border border-transparent dark:border-white/5">
            <!-- Aurora Blur -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-teal opacity-20 blur-[120px] rounded-full pointer-events-none"></div>

            <div class="relative z-10">
                <h2 class="text-3xl sm:text-4xl md:text-5xl text-white font-bold tracking-tight mb-8">
                    Headline
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-white">Highlight</span>
                </h2>
                <p class="text-lg text-slate-200 max-w-xl mx-auto mb-12">Subtext</p>
                <a href="..." class="btn-primary inline-flex items-center bg-white text-brand-navy font-semibold rounded-button px-8 py-4">
                    Unverbindlicher Doku-Check
                    <svg>...</svg>
                </a>
            </div>
        </div>
    </div>
</section>
```

### Checkliste neue Landingpage
- [ ] Dark Mode Script im `<head>`
- [ ] Dark Mode Toggle Script am Ende `<body>`
- [ ] Scrollbar CSS (Light + Dark)
- [ ] Hero H1 kurz & mit Gradient
- [ ] Stats Box nach Hero
- [ ] Screenshots mit Premium-Styling
- [ ] Final CTA mit Aurora Card
- [ ] `npm run build` ausführen
- [ ] Dark Mode Toggle testen

---

## Formulierungen (07.02.2026)

### Zu verwenden
- "TX-Partner Krypto-Dokumentation" (nicht "TX-Partner Dokumentation")
- "Saubere Krypto-Historie" (nicht "fehlerfreier Report")
- "Audit-Ready" (nicht "korrekt" oder "Report-ready")

### Nicht zu verwenden
- "stressig und teuer" → Panikmache vermeiden!
- "Wir finden..." → "TX-Partner findet..."
- "Datengrundlage" → "Krypto-Dokumentation"

---

## Offene Verbesserungen

*(Hier Punkte eintragen, die noch nicht umgesetzt wurden)*

---

*Letzte Aktualisierung: 07.02.2026*
