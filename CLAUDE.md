# TX-Partner - Claude Code Konfiguration

## Projekt-Kontext

- **Projekt:** TX-Partner Website (tx-partner.com)
- **Stack:** Statisches HTML + Tailwind CSS 3.4.0 + Vanilla JS
- **Dokumentation:** `docs/projekt-dokumentation.md`
- **Branding:** `docs/branding.md`
- **Teams:** `TX Partner Team/` (21 Agenten in 4 Teams)

---

## Workflow Orchestration

### 1. Plan Mode Default
- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, STOP and re-plan immediately - don't keep pushing
- Use plan mode for verification steps, not just building
- Write detailed specs upfront to reduce ambiguity

### 2. Subagent Strategy
- Offload research, exploration, and parallel analysis to subagents
- Keep main context window clean
- For complex problems, throw more compute at it via subagents
- One task per subagent for focused execution

### 3. Self-Improvement Loop
- After ANY correction from the user: update `.claude/lessons.md` with the pattern
- Write rules for yourself that prevent the same mistake
- Ruthlessly iterate on these lessons until mistake rate drops
- **Review `.claude/lessons.md` at session start** for relevant project patterns

### 4. Verification Before Done
- Never mark a task complete without proving it works
- Run `npm run build` after CSS/HTML changes
- Test on local server (`npx http-server -p 3001`)
- **Diff behavior between main and your changes** when relevant
- Ask yourself: "Would a staff engineer approve this?"
- Run tests, check logs, demonstrate corrections

### 5. Demand Elegance (Balanced)
- For non-trivial changes: pause and ask "is there a more elegant way?"
- If a fix feels hacky: **"Knowing everything I know now, implement the elegant solution"**
- Skip this for simple, obvious fixes - don't over-engineer
- Challenge your own work before presenting it

### 6. Autonomous Bug Fixing
- When given a bug report: just fix it. Don't ask for hand-holding
- Point at logs, errors, failing tests -> then resolve them
- Zero context switching required from the user
- **Go fix failing CI tests without being told how**

---

## TX-Partner Teams

**Basis-Pfad:** `TX Partner Team/`

### Team-Übersicht

| Team | Ordner | Agenten | Fokus |
|------|--------|---------|-------|
| Website Team | `website-team/` | 6 | Entwicklung, Design, SEO, Performance, QA |
| Content Team | `content-team/` | 10 | Blog, Social, SEO-Content, Community |
| Marketing Team | `marketing-team/` | 3 | Strategie, Kampagnen, Brand |
| Legal-Tax Team | `legal-tax-team/` | 2 | Recht & Steuern (AT) |

### Website Team (`website-team/`)
| Agent | Datei | Expertise |
|-------|-------|-----------|
| Frontend-Entwickler | `01-frontend-entwickler.md` | HTML, Tailwind, JS, Komponenten |
| UI/UX Designer | `02-ui-ux-designer.md` | Layouts, Design-System, Animationen |
| SEO/GEO Spezialist | `03-seo-geo-spezialist.md` | Meta-Tags, Schema.org, Keywords |
| Search Console Experte | `04-search-console-experte.md` | Indexierung, Crawl-Fehler, Core Web Vitals |
| Performance Engineer | `05-performance-engineer.md` | Ladezeiten, Caching, LCP |
| QA & Testing | `06-qa-testing.md` | Cross-Browser, Accessibility |

### Content Team (`content-team/`)
| Agent | Datei | Expertise |
|-------|-------|-----------|
| Blog-Autor | `01-blog-autor.md` | SEO-optimierte Artikel |
| SEO-Analyst | `02-seo-analyst.md` | Keyword-Recherche |
| Social Media | `03-social-media.md` | LinkedIn, X Content |
| FAQ-Experte | `04-faq-experte.md` | How-to Guides |
| GEO-Stratege | `05-geo-stratege.md` | KI-Optimierung (ChatGPT, Perplexity) |
| Community | `06-community.md` | Reddit, Foren |
| Content-Kalender | `07-content-kalender.md` | 3-Monats-Planung |
| News-Researcher | `08-news-researcher.md` | Trends & Events |
| Visual Designer | `09-visual-designer.md` | Grafiken, Canva |
| Charakter-Guide | `10-charakter-guide.md` | Markenpersönlichkeit |

### Marketing Team (`marketing-team/`)
| Agent | Datei | Expertise |
|-------|-------|-----------|
| Marketing Director | `01-marketing-director.md` | Strategie, KPIs, Marktanalyse |
| Campaign Manager | `02-campaign-manager.md` | Paid Ads, Funnels, A/B-Testing |
| Brand Guardian | `03-brand-guardian.md` | CI-Einhaltung, Brand Guidelines |

### Legal-Tax Team (`legal-tax-team/`)
| Agent | Datei | Expertise |
|-------|-------|-----------|
| Legal Advisor AT | `01-legal-advisor-at.md` | Vertragsrecht, DSGVO, Markenrecht |
| Tax Advisor AT | `02-tax-advisor-at.md` | USt, KöSt, Rechnungslegung DACH |

**Hinweis:** Legal-Tax ersetzt keine echte Rechts-/Steuerberatung.

---

## Team-Aufruf & Orchestrierung

### Einzelnen Agenten aufrufen
User sagt: **"Arbeite als [Agent]"** oder **"[Agent]-Aufgabe"**
-> Lies `TX Partner Team/[team]/[agent].md` und folge den Anweisungen

**Beispiele:**
- "Arbeite als Frontend-Entwickler" -> Lies `website-team/01-frontend-entwickler.md`
- "SEO-Analyst: Keyword-Recherche für DAC8" -> Lies `content-team/02-seo-analyst.md`
- "Brand Guardian: Prüfe diesen Text" -> Lies `marketing-team/03-brand-guardian.md`

### Ganzes Team orchestrieren
User sagt: **"Website-Team: [Aufgabe]"** oder **"Aktiviere das [Team]"**
-> Orchestriere mehrere Agenten des Teams sequenziell oder parallel

**Team-Workflows:**

**Website-Team Feature:**
```
1. UI/UX Designer    -> Design & Layout planen
2. Frontend-Entwickler -> Code implementieren
3. SEO/GEO Spezialist -> SEO-Optimierung
4. Performance Engineer -> Speed-Optimierung
5. QA & Testing       -> Qualitätssicherung
```

**Content-Team Artikel:**
```
1. News-Researcher   -> Thema recherchieren
2. SEO-Analyst       -> Keywords bestimmen
3. Blog-Autor        -> Artikel schreiben
4. Charakter-Guide   -> Ton prüfen
5. Social Media      -> Promotion-Posts erstellen
```

**Marketing-Team Kampagne:**
```
1. Marketing Director -> Strategie festlegen
2. Campaign Manager   -> Kampagne planen
3. Brand Guardian     -> CI-Konformität prüfen
```

### Cross-Team Orchestrierung
User sagt: **"Alle Teams: [Aufgabe]"** oder **"Cross-Team für [Projekt]"**
-> Koordiniere Agenten aus verschiedenen Teams

**Beispiel: Neue Landing Page**
```
Marketing Director  -> Zielgruppe & Messaging
UI/UX Designer      -> Layout entwerfen
Frontend-Entwickler -> Implementieren
SEO/GEO Spezialist  -> Meta-Tags & Schema
Content-Team        -> Texte verfassen
QA & Testing        -> Finale Prüfung
```

---

## Task Management

1. **Plan First**: Write plan to `.claude/plans/` with checkable items
2. **Verify Plan**: Check in before starting implementation
3. **Track Progress**: Use TodoWrite, mark items complete as you go
4. **Explain Changes**: High-level summary at each step
5. **Document Results**: Update `docs/projekt-dokumentation.md` after major changes
6. **Capture Lessons**: Update `.claude/lessons.md` after corrections

---

## Core Principles

- **Simplicity First**: Make every change as simple as possible. Impact minimal code.
- **No Laziness**: Find root causes. No temporary fixes. Senior developer standards.
- **Minimal Impact**: Changes should only touch what's necessary. Avoid introducing bugs.
- **Mobile-First**: Always test responsive behavior
- **DSGVO-konform**: No external resources without consent

---

## Build Commands

```bash
npm run build           # Tailwind CSS kompilieren (minifiziert)
npm run watch           # Entwicklungsmodus mit Auto-Reload
npx http-server -p 3001 # Lokaler Server starten
```

---

## Qualitätsstandards

- HTML5 valide
- Tailwind CSS (keine Inline-Styles)
- Accessibility WCAG 2.1 AA
- Core Web Vitals optimiert
- Dark Mode Support
- Responsive (Mobile-First)
- Keine Breaking Changes ohne Warnung
