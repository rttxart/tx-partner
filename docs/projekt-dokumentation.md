# TX-Partner Projekt-Dokumentation

**Version:** 2.0.0
**Stand:** 05.02.2026
**Status:** Produktiv (Launch-Phase)

---

## Inhaltsverzeichnis

1. [Projektübersicht](#1-projektübersicht)
2. [Technologie-Stack](#2-technologie-stack)
3. [Projektstruktur](#3-projektstruktur)
4. [Branding & Design-System](#4-branding--design-system)
5. [UI/UX Komponenten](#5-uiux-komponenten)
6. [Seiten & Features](#6-seiten--features)
7. [SEO & Content-Strategie](#7-seo--content-strategie)
8. [Integrationen](#8-integrationen)
9. [Performance & Optimierung](#9-performance--optimierung)
10. [Änderungsprotokoll](#10-änderungsprotokoll)

---

## 1. Projektübersicht

### 1.1 Über TX-Partner

**TX-Partner** ist ein B2C/B2B-Service für professionelle Krypto-Dokumentation mit Fokus auf den DACH-Raum (Deutschland, Österreich, Schweiz).

| Attribut | Wert |
|----------|------|
| **Unternehmensname** | TX-Partner (Solvum GmbH i.G.) |
| **Domain** | tx-partner.com |
| **Zielmarkt** | DACH (DE, AT, CH) |
| **Sprache** | Deutsch (formelles "Sie") |
| **Gründer** | Robert Thorn, Johannes Anderl |
| **Standort** | Wien/Graz, Österreich |

### 1.2 Mission & Vision

- **Mission:** Wir schaffen die Datengrundlage für fehlerfreie Krypto-Steuerreports
- **Vision:** Jeder Krypto-Investor soll mit vollständigem Vertrauen in seine Daten seine Steuererklärung abgeben können
- **Slogan:** "Pre-Tax Infrastruktur für Krypto"
- **Tagline:** "Die Referenz für professionelle Krypto-Dokumentation"

### 1.3 Kernphilosophie - 4-Säulen-Standard

1. **Vollständigkeit** - Alle Transaktionen erfasst, keine Lücken
2. **Nachvollziehbarkeit** - Herkunft jeder Position dokumentiert
3. **Technische Korrektheit** - On-Chain-Daten präzise interpretiert
4. **Langfristige Verwertbarkeit** - Geeignet für Finanzamt & Betriebsprüfungen

### 1.4 Zielgruppen

**Primär:**
- Krypto-Investoren mit 3.000+ Transaktionen
- Nutzer von 10+ Plattformen/Wallets
- DeFi/NFT-aktive Anleger
- Personen mit Blockpit/CoinTracking-Problemen

**Sekundär:**
- Steuerberater mit Krypto-Mandanten
- Kanzleien ohne Krypto-Expertise

---

## 2. Technologie-Stack

### 2.1 Übersicht

| Kategorie | Technologie | Version |
|-----------|-------------|---------|
| **Framework** | Statisches HTML | HTML5 |
| **CSS Framework** | Tailwind CSS | 3.4.0 |
| **JavaScript** | Vanilla JS | ES6+ |
| **Build Tool** | Tailwind CLI | 3.4.0 |
| **Paketmanager** | npm | - |
| **Hosting** | Apache Webserver | - |

### 2.2 Abhängigkeiten (package.json)

```json
{
  "name": "tx-partner",
  "version": "2.0.0",
  "devDependencies": {
    "tailwindcss": "^3.4.0"
  }
}
```

### 2.3 Build-Befehle

```bash
npm run build   # Einmalige Kompilierung (minifiziert)
npm run watch   # Entwicklungsmodus mit Auto-Reload
```

### 2.4 Keine externen Frameworks

- **Kein React/Vue/Angular** - Rein statisches HTML
- **Kein jQuery** - Vanilla JavaScript
- **Keine externen CDNs** - DSGVO-konform, alle Assets lokal
- **Keine Tracking-Pixel** - Privacy-first

---

## 3. Projektstruktur

```
tx-partner 2.0/
│
├── 📄 HTML-Seiten (14 Dateien)
│   ├── index.html              # Homepage (112 KB)
│   ├── leistungen.html         # Services (104 KB)
│   ├── ueber-uns.html          # Über uns (85 KB)
│   ├── kontakt.html            # Kontaktformular (60 KB)
│   ├── faq.html                # FAQ (148 KB - größte Seite)
│   ├── blockpit-hinweise.html  # Blockpit-Fehler (81 KB)
│   ├── cointracking-fehler.html # CoinTracking-Fehler (80 KB)
│   ├── dokumentationsstandard.html # 4-Säulen-Standard (83 KB)
│   ├── kundenonboarding.html   # Onboarding-Formular (58 KB)
│   ├── sitemap.html            # HTML-Sitemap (30 KB)
│   ├── agb.html                # AGB (30 KB)
│   ├── datenschutz.html        # Datenschutz (63 KB)
│   ├── impressum.html          # Impressum (32 KB)
│   └── 404.html                # Fehlerseite (9 KB)
│
├── 📁 blog/
│   └── index.html              # Blog-Übersicht
│
├── 📁 templates/
│   └── blog-artikel-vorlage.html  # Kopierbare Vorlage für neue Artikel
│
├── 📁 assets/
│   ├── css/
│   │   ├── tailwind.css        # Kompiliertes CSS (84 KB)
│   │   └── fonts.css           # Font-Definitionen
│   ├── fonts/
│   │   ├── Inter-*.woff2       # Inter (5 Gewichte)
│   │   └── JetBrainsMono-*.woff2 # JetBrains Mono (2 Gewichte)
│   ├── tx-partner-common.js    # Gemeinsame JS-Funktionen (230 Zeilen)
│   ├── logo.svg                # SVG-Logo (8 KB)
│   ├── logo-signature2.png     # PNG-Signatur
│   ├── og-image.jpg            # Open Graph Bild (915 KB)
│   ├── Robert_Thorn*.webp      # Gründer-Fotos
│   └── Johannes_Anderl*.webp   # Gründer-Fotos
│
├── 📁 src/
│   └── input.css               # Tailwind-Eingabe mit Custom CSS
│
├── 📁 docs/
│   ├── branding.md             # Branding-Leitfaden (13.5 KB)
│   ├── aab-input-fuer-anwalt.md # Rechtliche Dokumente
│   └── projekt-dokumentation.md # Diese Dokumentation
│
├── 📁 content/
│   ├── README.md               # Content-Planung
│   ├── woche-01/               # Woche 1 Content (Launch + DAC8)
│   └── woche-02/               # Woche 2 Content (Blockpit/CoinTracking)
│
├── 📁 content-team/
│   ├── 00-overview.md          # Agenten-Übersicht
│   ├── 01-blog-autor.md        # Blog-Autor Agent
│   ├── 02-seo-analyst.md       # SEO-Analyst Agent
│   ├── 03-social-media.md      # Social Media Agent
│   ├── 04-faq-experte.md       # FAQ-Experte Agent
│   ├── 05-geo-stratege.md      # GEO-Stratege Agent
│   ├── 06-community.md         # Community Manager Agent
│   ├── 07-content-kalender.md  # Content-Kalender
│   ├── 08-news-researcher.md   # News-Researcher Agent
│   ├── 09-visual-designer.md   # Visual Designer Agent
│   └── 10-charakter-guide.md   # Marken-Charakter Guide
│
├── 📄 Konfiguration
│   ├── package.json            # NPM-Konfiguration
│   ├── tailwind.config.js      # Tailwind-Konfiguration
│   ├── .htaccess               # Apache-Konfiguration
│   ├── sitemap.xml             # XML-Sitemap
│   ├── robots.txt              # Crawler-Anweisungen
│   └── favicon.png             # Favicon
│
└── 📄 Git
    ├── .gitignore
    └── .gitattributes
```

---

## 4. Branding & Design-System

### 4.1 Farbpalette

#### Primärfarben

| Name | Hex | Tailwind-Klasse | Verwendung |
|------|-----|-----------------|------------|
| **Brand Navy** | #1E3A5F | `bg-brand-navy` | Primärfarbe, Vertrauen, Buttons |
| **Brand Teal** | #3A9EAF | `bg-brand-teal` | Akzentfarbe, Highlights, CTAs |
| **Teal Dark** | #2C7A87 | `bg-brand-tealDark` | Hover-States |

#### Neutrale Farben

| Name | Hex | Verwendung |
|------|-----|------------|
| White | #FFFFFF | Hintergründe |
| Slate-50 | #f8fafc | Helle Flächen |
| Slate-600 | #475569 | Sekundärtext |
| Slate-900 | #0f172a | Haupttext |

#### Dark Mode Farben

| Name | Hex | Verwendung |
|------|-----|------------|
| Dark BG | #050505 | Haupthintergrund |
| Dark Surface | #0F0F0F | Karten, Container |
| Dark Border | rgba(255,255,255,0.08) | Rahmen |

### 4.2 Typografie

#### Schriftarten

| Familie | Typ | Gewichte | Format |
|---------|-----|----------|--------|
| **Inter** | Sans-serif | 400, 500, 600, 700, 800 | WOFF2 |
| **JetBrains Mono** | Monospace | 400, 500 | WOFF2 |

#### Typografie-Hierarchie

| Element | Desktop | Tablet | Mobile | Gewicht |
|---------|---------|--------|--------|---------|
| Hero H1 | 60px | 44px | 28px | 800 |
| H2 | 36px | 30px | 24px | 700 |
| H3 | 24px | 20px | 18px | 600 |
| Body | 16px | 16px | 16px | 400 |
| Small | 14px | 14px | 14px | 400 |

### 4.3 Logo

**Struktur:**
- 4 vertikale Kreise mit variierenden Größen
- Die ersten 3 Kreise: Brand Navy (#1E3A5F)
- Der 4. Kreis: Brand Teal (#3A9EAF)
- Symbolik: Repräsentiert Struktur, Datenfluss und die 4 Säulen

**Dateien:**
- `assets/logo.svg` - Skalierbare Vektorversion (8 KB)
- `assets/logo-signature2.png` - PNG-Signatur

### 4.4 Designprinzipien

1. **Minimalistisch** - Klare Linien, großzügiger Weißraum
2. **Modern** - Glass-Morphism, subtile Animationen
3. **Technisch** - Grid-Hintergründe, Monospace für Code
4. **Professionell** - Keine verspielten Elemente, seriöser Auftritt

### 4.5 Border Radius System

| Element | Wert |
|---------|------|
| Container | 32px |
| Card | 32px |
| Button | 16px |

### 4.6 Animationen

| Name | Dauer | Verwendung |
|------|-------|------------|
| fade-in | 0.6s | Einblenden von Inhalten |
| aurora-pulse | 8s | Hintergrund-Orbs |
| float | 6s | Schwebende Elemente |
| shimmer | 1.5s | Lade-Effekte |
| scroll | 40s | Infinite Scroll |

---

## 5. UI/UX Komponenten

### 5.1 Navigation

#### Glass Navigation Bar
```html
<nav class="glass-nav fixed top-0 w-full z-50">
  <!-- Backdrop Blur + Semi-transparenter Hintergrund -->
</nav>
```

**Eigenschaften:**
- Sticky-Positionierung am oberen Rand
- Glasmorphismus-Effekt (backdrop-blur: 10px)
- Responsive: Desktop-Dropdowns, Mobile-Hamburger

#### Mobile Menu
- ID: `mobile-menu`
- Animation: max-height 0 → 600px
- ESC-Taste zum Schließen
- Click-Outside zum Schließen

### 5.2 Buttons

#### Primary Button
```css
.btn-primary {
  background: brand-navy;
  color: white;
  padding: 1rem 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 14px rgba(30,58,95,0.25);
  transition: transform 0.3s, box-shadow 0.3s;
}
.btn-primary:hover {
  transform: translateY(-2px);
}
```

#### Secondary Button
```css
.btn-secondary {
  background: slate-100;
  color: brand-navy;
  border: 1px solid slate-200;
  padding: 0.75rem 1.5rem;
  border-radius: 16px;
}
```

### 5.3 Formular-Komponenten

#### Form Input
- Floating Labels (absolut positioniert)
- Focus-State: Teal-Outline + Shadow
- Schriftart: Inter/JetBrains Mono für Labels

#### Custom Checkbox
- Versteckter nativer Input
- Benutzerdefinierte Box mit Animation
- Checkmark-SVG bei aktiviert

### 5.4 Card-Komponenten

#### Card Spotlight
```css
.card-spotlight {
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease;
}
.card-spotlight::before {
  /* Radial gradient spotlight on hover */
}
```

#### Glass Card
- Semi-transparenter Hintergrund
- Backdrop-Filter Blur
- Subtile Rahmen

### 5.5 Hero-Komponenten

- **Hero Section:** Min-Height 90vh, Flex-Center
- **Hero H1:** Responsive Skalierung, Letter-Spacing -0.015em
- **Hero Subheadline:** Responsive Größe, Font-Weight 500
- **Hero Eyebrow:** Uppercase, Tracking 0.1em, 12px

### 5.6 Interaktive Elemente

#### FAQ Accordion
- Grid-basierte Animation (grid-template-rows 0fr → 1fr)
- Icon-Rotation bei geöffnet
- Smooth Transition 0.4s

#### Theme Toggle
- Sun/Moon Icons
- LocalStorage-Persistenz
- Respektiert System-Präferenz

#### Scroll Progress Bar
- Fixed Position am oberen Rand
- Breite basiert auf Scroll-Position

---

## 6. Seiten & Features

### 6.1 Seitenübersicht

| Seite | URL | Zweck | Größe |
|-------|-----|-------|-------|
| Homepage | `/` | Landing, Conversion | 112 KB |
| Leistungen | `/leistungen` | Service-Details | 104 KB |
| Über uns | `/ueber-uns` | Team, Glaubwürdigkeit | 85 KB |
| Kontakt | `/kontakt` | Lead-Generierung | 60 KB |
| FAQ | `/faq` | Informationen, SEO | 148 KB |
| Blockpit | `/blockpit-hinweise` | Tool-spezifische Hilfe | 81 KB |
| CoinTracking | `/cointracking-fehler` | Tool-spezifische Hilfe | 80 KB |
| Dokumentationsstandard | `/dokumentationsstandard` | 4-Säulen erklären | 83 KB |
| Onboarding | `/kundenonboarding` | Kunden-Onboarding | 58 KB |
| AGB | `/agb` | Rechtlich | 30 KB |
| Datenschutz | `/datenschutz` | DSGVO | 63 KB |
| Impressum | `/impressum` | Rechtlich | 32 KB |
| 404 | `/404` | Fehlerseite | 9 KB |

### 6.2 Homepage (index.html)

**Hauptfeatures:**
1. **Hero Section** mit Ambient-Animationen
2. **Spotlight-Container** mit Maus-Tracking
3. **Scrollende Transaktions-Animation** (Messy → Clean)
4. **Progress Bar Animation** (0-100%)
5. **3-Card Grid** für Problemdarstellung
6. **Gap Architecture Section** (Problem vs. Lösung)
7. **Statistik-Bereich** mit animierten Countern
8. **Gründer-Profile** mit Bildern
9. **Sticky CTA Button**

**Schema.org:**
- ProfessionalService
- FAQPage (3 Q&A)

### 6.3 Kontaktseite (kontakt.html)

**Formular-Felder:**
- Name (text, required)
- Email (email, required)
- Betreff (select, 5 Optionen)
- Nachricht (textarea, optional)
- Datenschutz-Checkbox (required)

**Betreff-Optionen:**
1. Kostenloser Daten-Check
2. Steuerberater Kooperation
3. Kooperation Infomaterial
4. Allgemeine Anfrage
5. Sonstiges

**Integration:** Make.com Webhook

### 6.4 FAQ-Seite (faq.html)

**Features:**
- Umfangreiche Q&A-Sammlung
- Accordion-Komponenten
- FAQPage Schema.org
- 8+ strukturierte Fragen

### 6.5 Service-Seiten

**Blockpit-Hinweise:**
- Problemlösungen für Blockpit-Fehler
- Status-Badges (UNLABELED, VERIFIED_TX)
- HowTo Schema.org

**CoinTracking-Fehler:**
- Parallel zu Blockpit
- Tool-spezifische Lösungen

---

## 7. SEO & Content-Strategie

### 7.1 Meta-Tags Struktur

```html
<title>Lückenlose Krypto-Dokumentation | TX-Partner</title>
<meta name="description" content="Fehler in Blockpit oder CoinTracking? Wir sorgen für lückenlose Krypto-Dokumentation...">
<meta property="og:type" content="website">
<meta property="og:locale" content="de_DE">
<meta name="twitter:card" content="summary_large_image">
<link rel="canonical" href="https://tx-partner.com/">
```

### 7.2 Schema.org Implementierung

| Schema-Typ | Seite | Inhalt |
|------------|-------|--------|
| ProfessionalService | Homepage, Leistungen | Service-Details, areaServed |
| FAQPage | Homepage, FAQ | Q&A-Paare |
| HowTo | Blockpit-Seite | Fehler-Behebungs-Schritte |
| Organization | Über uns | Gründer, Kontaktdaten |
| ContactPage | Kontakt | Organisation, ContactPoints |

### 7.3 Sitemap.xml Prioritäten

| Priorität | Seiten |
|-----------|--------|
| 1.0 | Homepage |
| 0.9 | Leistungen |
| 0.8 | Über uns, Kontakt, Blockpit, CoinTracking |
| 0.7 | FAQ |
| 0.6 | Dokumentationsstandard, Onboarding |
| 0.3 | Impressum, Datenschutz, AGB |

### 7.4 Keyword-Strategie (5 Cluster)

**Cluster 1: Blockpit**
- Blockpit Fehler
- Blockpit Missing History
- Blockpit unlabeled

**Cluster 2: CoinTracking**
- CoinTracking Fehler
- CoinTracking negative Bestände

**Cluster 3: Krypto Dokumentation**
- Krypto Dokumentation
- Krypto Steuern Deutschland/Österreich
- Professionelle Krypto Buchhaltung

**Cluster 4: DeFi & Komplexität**
- DeFi Steuern
- Staking Steuern
- Liquidity Mining Steuer

**Cluster 5: Regulierung**
- DAC8 2026
- Krypto Meldepflicht

### 7.5 Content-Team System

12 spezialisierte KI-Agenten für Content-Erstellung:

1. **Blog-Autor** - SEO-optimierte Artikel
2. **SEO-Analyst** - Keyword-Recherche
3. **Social Media** - LinkedIn/X Content
4. **FAQ-Experte** - How-to Guides
5. **GEO-Stratege** - KI-Optimierung (ChatGPT, Perplexity)
6. **Community Manager** - Reddit, Foren
7. **Content-Kalender** - 3-Monats-Planung
8. **News-Researcher** - Trends & Events
9. **Visual Designer** - Grafiken & Canva
10. **Charakter-Guide** - Markenpersönlichkeit

### 7.6 Content-Kalender Q1 2026

| Monat | Fokus | Blog | Social | Community |
|-------|-------|------|--------|-----------|
| Februar | DAC8 & Regulierung | 4 | 12 | 8 |
| März | Blockpit Deep-Dive | 4 | 12 | 8 |
| April | Steuer-Deadline DE | 4 | 12 | 8 |

---

## 8. Integrationen

### 8.1 Cal.com Kalender-Buchung

**Endpoint:** `https://app.cal.eu/johannesanderl-tx-partner/dokumentation-prufen`

**Verwendung:**
- "Kostenloser Doku-Check" CTAs
- Alle Service-Seiten
- Homepage Hero

### 8.2 Make.com Webhook

**Endpoint:** `https://hook.eu1.make.com/irg40nzw2tquli2naodlie3odobn4jhd`

**Verwendung:**
- Kontaktformular-Submissions
- Onboarding-Formular

**Datenfelder:**
- name, email, subject, message
- company, phone (optional)

### 8.3 Social Media

| Plattform | Account | URL |
|-----------|---------|-----|
| X (Twitter) | @TX_Partner | https://x.com/TX_Partner |
| LinkedIn | TX-Partner | https://www.linkedin.com/company/tx-partner/ |

### 8.4 Kontakt

- **Email:** info@tx-partner.com
- **Fallback:** info@tx-partner.at

---

## 9. Performance & Optimierung

### 9.1 CSS-Optimierung

- **Tailwind CSS:** Utility-first, nur genutzte Klassen
- **Minifiziert:** 84 KB (kompiliert)
- **Critical CSS:** Inline im `<head>`
- **Below-fold:** `content-visibility: auto`

### 9.2 Font-Optimierung

- **Format:** WOFF2 (komprimiert)
- **Preload:** Kritische Gewichte (600, 700)
- **font-display:** swap

### 9.3 Bild-Optimierung

- **Format:** WebP für Fotos
- **SVG:** Logo (8 KB)
- **Lazy Loading:** `loading="lazy"`
- **Größenangaben:** width/height Attribute

### 9.4 Caching (.htaccess)

```apache
# 1 Jahr Cache für statische Assets
ExpiresByType image/webp "access plus 1 year"
ExpiresByType font/woff2 "access plus 1 year"
ExpiresByType text/css "access plus 1 year"

# GZIP Kompression
AddOutputFilterByType DEFLATE text/html text/css text/javascript
```

### 9.5 Sicherheits-Header

```apache
Header set X-Frame-Options "SAMEORIGIN"
Header set X-XSS-Protection "1; mode=block"
Header set X-Content-Type-Options "nosniff"
Header set Referrer-Policy "strict-origin-when-cross-origin"
```

### 9.6 URL-Rewriting

- Clean URLs ohne .html-Erweiterung
- HTTPS-Erzwingung (301 Redirect)
- www → non-www Redirect

---

## 10. Änderungsprotokoll

### Version 2.2.0 (05.02.2026) - Footer-Konsistenz

**Geändert:**
- **Footer Social Media Icons** - Einheitliche Farbe auf allen 14 Seiten
  - `text-slate-600` → `text-slate-400` (heller, dezenter)
  - Betrifft: X (Twitter) und LinkedIn Icons
  - Geänderte Dateien: `faq.html`, `index.html`, `blog/index.html`, `blog/dac8-2026.html`

- **Footer Dokumentationsstandard-Link** - Einheitliches Styling
  - Entfernt: Inkonsistente Klassen (`text-slate-500`, `duration-300`, `dark:hover:text-brand-teal`)
  - Standard: `text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-brand-teal transition-colors`
  - Geänderte Dateien: `dokumentationsstandard.html`, `datenschutz.html`, `sitemap.html`, `impressum.html`, `leistungen.html`, `blog/index.html`, `blog/dac8-2026.html`

- **Footer-Tag** - Einheitliche Struktur
  - `faq.html`: `pb-32` → `pb-12`, `relative z-30` entfernt
  - `blog/index.html`, `blog/dac8-2026.html`: `dark:bg-[#0C0E14]` → `dark:bg-dark-bg`
  - Standard: `<footer class="pt-24 pb-12 bg-white dark:bg-dark-bg border-t border-slate-200 dark:border-white/5">`

- **Aktive Seiten-Hervorhebung im Footer** - Einheitlich nur Farbe (kein font-bold)
  - Standard-Styling: `text-sm font-medium text-brand-teal dark:text-white transition-colors`
  - `font-bold` entfernt in: `kontakt.html`, `cointracking-fehler.html`, `agb.html`, `datenschutz.html`, `impressum.html`
  - Hervorhebung hinzugefügt in: `faq.html`, `dokumentationsstandard.html`, `sitemap.html`
  - Dark Mode Support (`dark:text-white`) hinzugefügt in: `ueber-uns.html`, `blockpit-hinweise.html`
  - Inkonsistente Link-Klassen korrigiert in: `ueber-uns.html`, `blockpit-hinweise.html`

**Dateien (16 geändert):**
- `index.html`, `faq.html`, `leistungen.html`, `ueber-uns.html`, `kontakt.html`
- `dokumentationsstandard.html`, `cointracking-fehler.html`, `blockpit-hinweise.html`
- `agb.html`, `datenschutz.html`, `impressum.html`, `sitemap.html`
- `blog/index.html`, `blog/dac8-2026.html`

---

### Version 2.1.0 (02.02.2026) - Blog & Mobile Performance

**Hinzugefügt:**
- **Blog-System** implementiert (`/blog`)
  - Blog-Übersicht: `blog/index.html`
  - Artikel-Template: `templates/blog-artikel-vorlage.html`
  - Assets-Ordner: `assets/blog/`
  - Schema.org Blog-Markup
- **Blog-Link** in Navigation (Desktop + Mobile) und Footer aller Seiten
- **Tailwind Typography Plugin** (`@tailwindcss/typography`) für Blog-Artikel
- **Mobile Performance Optimierung**
  - CSS: Animationen (`aurora-pulse`, `float`, `hash-scroll`) auf Mobile deaktiviert
  - JS: Spotlight-Animation auf Mobile deaktiviert
  - Respektiert `prefers-reduced-motion`

**Geändert:**
- `tailwind.config.js`: Content-Pfade erweitert (`./blog/**/*.html`, `./templates/**/*.html`)
- `src/input.css`: Mobile Performance Media Queries hinzugefügt
- `index.html`: Spotlight-Animation nur auf Desktop
- `sitemap.xml`: Blog-URL hinzugefügt
- Alle 13 HTML-Seiten: Blog-Link in Navigation und Footer

**Dateien:**
- Neu: `blog/index.html`, `templates/blog-artikel-vorlage.html`, `assets/blog/`
- Geändert: `src/input.css`, `tailwind.config.js`, `sitemap.xml`, alle HTML-Seiten

---

### Version 2.0.0 (02.02.2026) - Dokumentations-Erstellung

**Hinzugefügt:**
- Vollständige Projekt-Dokumentation erstellt
- Status quo aller Komponenten erfasst

### Vorherige Änderungen (Git-Log)

| Commit | Beschreibung | Datum |
|--------|--------------|-------|
| 46ce97a | Content-Ton professioneller gestaltet | Recent |
| d98394b | TX-Partner Charakter-Guide + Content Rewrite | Recent |
| 67af168 | Content-System mit Visual Designer + Woche 1-2 | Recent |
| fa286e6 | Content-Team-System für SEO & GEO | Recent |
| e258be7 | Sitemap URLs + interne Links für SEO | Recent |

---

## Anhang A: Tailwind Konfiguration (tailwind.config.js)

```javascript
module.exports = {
  content: ["./*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand-navy': '#1E3A5F',
        'brand-teal': '#3A9EAF',
        'brand-tealDark': '#2C7A87',
        'dark-bg': '#050505',
        'dark-surface': '#0F0F0F',
      },
      borderRadius: {
        'container': '32px',
        'card': '32px',
        'button': '16px',
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'aurora-pulse': 'aurora-pulse 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      }
    }
  }
}
```

---

## Anhang B: JavaScript Funktionen (tx-partner-common.js)

| Funktion | Status | Beschreibung |
|----------|--------|--------------|
| initMobileMenu() | AKTIV | Hamburger-Menü, ARIA, ESC-Taste |
| initKeyboardNav() | AKTIV | Dropdown-Tastaturnavigation |
| initContactForm() | AKTIV | Formular mit Make.com Webhook |
| initDynamicYear() | AKTIV | Footer-Jahr automatisch |
| initParallax() | AKTIV | Scroll-verknüpfte Parallax |
| initMagneticButtons() | DEAKTIVIERT | Zu verspielt für B2B |
| initGlassmorphicTilt() | DEAKTIVIERT | Performance-Gründe |

---

## Anhang C: Responsive Breakpoints

| Breakpoint | Pixel | Tailwind-Prefix |
|------------|-------|-----------------|
| Mobile | < 640px | (default) |
| Small | ≥ 640px | sm: |
| Medium | ≥ 768px | md: |
| Large | ≥ 1024px | lg: |
| Extra Large | ≥ 1280px | xl: |
| 2XL | ≥ 1536px | 2xl: |

---

## Anhang D: Accessibility Checklist

- [x] ARIA-Labels auf Buttons
- [x] Semantisches HTML (section, article, nav)
- [x] Focus-visible States
- [x] Keyboard-Navigation
- [x] Color Contrast (Dark Mode)
- [x] prefers-reduced-motion Support
- [x] Skip Links (implizit)
- [ ] Screen Reader Testing (ausstehend)

---

## Kontakt für Dokumentations-Updates

Bei Änderungen am Projekt diese Dokumentation aktualisieren:

1. Neue Features → Abschnitt 6 ergänzen
2. Design-Änderungen → Abschnitt 4 aktualisieren
3. Neue Seiten → Seitenübersicht + Sitemap
4. Neue Integrationen → Abschnitt 8 ergänzen
5. Git-Commits → Abschnitt 10 Änderungsprotokoll

---

*Dokumentation erstellt am 02.02.2026 | TX-Partner v2.0.0*
