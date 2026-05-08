# TODO

- [ ] **T013 — Replace 4 placeholder project cards with 7 real portfolio projects**
  - **Current state:** 4 cards (proj1-4) with generic descriptions, no real project data
  - **Required content** (from resume.txt / resume data):
    1. **ExxonMobil Data Architecture** (K2 Partnering Solutions) — .NET 9, Angular, Azure Functions
    2. **Crefisa Loan Generation** (GFT Technologies) — .NET 8, Jenkins, Oracle, REST/SOAP
    3. **Itaú Financial Processes** (GFT Technologies) — .NET/C#, Python, AWS, Terraform
    4. **Internet & TV Admin Platform** (SYSMAP Solutions) — React, Spring Boot, Kubernetes
    5. **BTG Pactual Funds Revenue** (ACT Digital) — React/Angular, .NET/Java, AWS serverless
    6. **Construix PM Feature** — GraphQL, Node.js, React, PostgreSQL
    7. **Ótima Gestão POS** — .NET Core, Angular, GraphQL, React Native
  - **Also in scope:** Update proj1-4 descriptions to match real project data
  - **Impact:** Portfolio is currently misleading — clients see fake projects instead of real work
  - **Fix:** Rewrite all 7 project cards with real tech stacks, outcomes, and GitHub links
  - **Status: PENDING**

- [ ] **T014 — Fix hero subtitle**
  - **1. Hero label — update title from "Senior Full Stack Developer" to "Senior Software Engineer"**
    - **Current state:** `script.js:10` `'hero.label': 'Senior Full Stack Developer'` (+ 4 i18n translations per language: ES `'Desarrollador Full Stack Senior'`, PT `'Desenvolvedor Full Stack Sênior'`, JP `'シニアフルスタック開発者'`)
    - **Required change:** Update ALL 4 language i18n entries for `hero.label`:
      - EN: `'Senior Software Engineer'`
      - ES: `'Ingeniero de Software Senior'`
      - PT: `'Engenheiro de Software Sênior'`
      - JP: `'シニアソフトウェアエンジニア'`
    - **Files:** `script.js` lines 10, 126, 247, 369
  - **1C. Hero subtitle — remove "Full Stack Developer" prefix, leave only the description**
    - **Current state:** `script.js:11` `'hero.subtitle': 'Full Stack Developer — Engineering robust, scalable solutions'`
    - **Required change:** `'hero.subtitle': 'Engineering robust, scalable solutions'` (delete the "Full Stack Developer —" prefix)
    - **Files:** `script.js` lines 11, 127, 248, 370 (all 4 languages)
  - **Impact:** Hero now displays the candidate's actual name prominently; professional title aligned with current market positioning
  - **Status: PENDING**

---

## NOTES

- **Project cards are the largest content update** — estimated 30-40 lines of HTML + 28 i18n entries (×4 languages)
- **resume.txt** is a read-only reference file — do NOT modify it
