# Juan Jose Gomez Martinuzzo | Portfolio

[![Deploy to GitHub Pages](https://github.com/jjgomez2k/jjgomez2k.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/jjgomez2k/jjgomez2k.github.io/actions)

Personal portfolio website for **Juan Jose Gomez Martinuzzo** — Senior Full Stack Developer with 5+ years of experience in .NET, Python, Java, Node.js, React, and AWS.

## Live Site

- **jjgmartinuzzo.com** (custom domain)
- **jjgomez2k.github.io** (GitHub Pages)

## Features

- **Zero dependencies** — Pure HTML, CSS, and vanilla JavaScript
- **Multilingual** — English, Spanish, Portuguese, German, Japanese
- **Dark/Light theme** toggle
- **Fully responsive** design
- **Static site** deployed via GitHub Pages

## Tech Stack

| Area | Technologies |
|------|------|
| Built with | HTML5, CSS3 (custom properties), Vanilla JavaScript |
| Deployment | GitHub Pages, GitHub Actions |

## Structure

```
├── index.html          # Single-page portfolio layout
├── style.css           # All styles (custom properties, responsive, animations)
├── script.js           # i18n, theme toggle, scroll effects, contact form
├── CNAME               # Custom domain (jjgmartinuzzo.com)
├── LICENSE             # GPLv3
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions deployment workflow
└── resume.txt          # Professional resume
```

## Sections

- **Hero** — Name, title, location, quick bio, CTA buttons
- **About** — Bio, languages, stats (years, projects, languages, technologies)
- **Experience** — Work history with tech stacks and highlights
- **Skills** — Categorized skills by domain
- **Projects** — Project cards with tags and links
- **Contact** — Email, LinkedIn, and phone

## Local Development

No build step required. Just open `index.html` in a browser.

To serve locally:

```bash
npx serve .
```

## Deployment

Automatic on push to `main` via GitHub Actions. No manual configuration needed.

## License

GPLv3 — See [LICENSE](LICENSE) for details.
