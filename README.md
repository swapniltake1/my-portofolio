# Swapnil Take — Data Engineer Portfolio

A personal React portfolio showcasing data engineering skills, projects, and a public resume. Designed as a production-style portfolio for a Data Engineer with ~2.5 years of experience.

## At a glance

- Live site (if deployed) is intended to expose a static React app (Create React App).
- Main app entry: `src/App.js`
- Primary pages/components:
  - Home: `src/routes/Home.js`
  - About: `src/routes/About.js` (route present)
  - Contact: `src/routes/Contact.js` (route present)
  - Projects: `src/routes/Project.js` (route present)
- Editable content lives under `src/components` and `public/resume.html`.

## Tech stack

- Languages: JavaScript, HTML, CSS
- Framework / runtime: React 18 with Create React App (react-scripts)
- Notable libraries:
  - react-router-dom (v6)
  - react-icons
  - @vercel/speed-insights (dev/analysis helper)

Package configuration (key fields) lives in `package.json`. The project declares Node engine `24.x` in package.json — ensure your environment matches or adjust the engines field if needed.

## What changed (summary from previous commit)
- Rebuilt older fresher portfolio into a production-style data-engineering profile.
- Added hero section and KPI cards for ETL/pipeline metrics.
- Sections added: About, Technical Skills, Experience Timeline, Featured Projects, Certifications, Contact, Resume.
- Public resume available at `public/resume.html`.

## Repository structure (top-level)

```
README.md                 <-- this file
package.json
package-lock.json
public/                   <-- static files & resume.html
  └─ resume.html
src/
  App.js                  <-- routes configuration and SpeedInsights
  index.js                <-- app bootstrap (BrowserRouter)
  index.css
  routes/                 <-- route entry points (Home, About, Contact, Project)
  components/             <-- UI & content components (AboutContent, HeroImg, Navbar, Footer, etc.)
    AboutContent.js
    Skills.js
    Experience.js
    WorkCardData.js
    WorkCard.js
    Footer.js
    Form.js
    Certifications.js
    Navbar.js
    HeroImg.js
    ... (styles .css files alongside components)
```

## How to run locally

1. Clone the repo:
   ```bash
   git clone https://github.com/swapniltake1/my-portofolio.git
   cd my-portofolio
   ```

2. Install dependencies and run:
   ```bash
   npm install
   npm start
   ```
   Open http://localhost:3000

Note: package.json sets an engines field `"node": "24.x"`. Use a Node version compatible with this or update the engines field to match your Node version (for example `>=18`), otherwise you may see warnings from some hosts or tools.

## Build (production)

```bash
npm run build
```

Build output will be in `build/`. Serve the build folder with any static hosting (Netlify, Vercel static site, GitHub Pages, S3+CloudFront, etc.).

## Deployment / GitHub Pages notes

- The app uses react-router-dom with path routes including `/swapniltake/…`. If you deploy the site to a subpath (for example, `https://<user>.github.io/swapniltake`), set the router basename or the `homepage` field in `package.json`:
  - Option A — set BrowserRouter basename:
    ```jsx
    <BrowserRouter basename="/swapniltake">
      <App />
    </BrowserRouter>
    ```
    (Edit `src/index.js`.)
  - Option B — set `"homepage": "https://<user>.github.io/swapniltake"` in `package.json` and use a GH Pages deploy step (or gh-pages package) so asset paths resolve correctly.

If you host at the root (example.com or username.github.io), remove the `/swapniltake` path prefixes or ensure BrowserRouter `basename` is correct.

## Where to customize content

- Projects data: `src/components/WorkCardData.js`
- Skills: `src/components/Skills.js`
- Experience timeline: `src/components/Experience.js`
- Contact links & form: `src/components/Form.js`, `src/components/Footer.js`
- Resume (static): `public/resume.html`
- Navbar & routing: `src/components/Navbar.js`, `src/App.js`, `src/index.js`

## Developer notes / suggestions
- React 18 recommends using `ReactDOM.createRoot` (in `src/index.js`) instead of `ReactDOM.render`. Example:
  ```js
  import { createRoot } from 'react-dom/client';
  const root = createRoot(document.getElementById('root'));
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  ```
  This is optional but aligns with current React 18 best practices.

- Routing: The app currently defines routes both at the root (`/`) and with `/swapniltake/` prefixes. Decide one approach:
  - If the app will be deployed under a subpath, use `BrowserRouter basename` to avoid duplicating route definitions.
  - If the app will be deployed at the site root, you can remove the `/swapniltake/*` routes.

- Accessibility & performance:
  - Ensure images have `alt` attributes.
  - Confirm forms have proper labels.
  - Consider lazy-loading large images / heavy components to reduce initial bundle size.

- CI / testing:
  - `react-scripts test` is configured — add tests if you want coverage.
  - Consider adding a workflow to build on push (GitHub Actions) to ensure build stays green.

## Troubleshooting

- If `npm start` fails due to Node version, either install the Node version declared in package.json or adjust the `engines` entry.
- If client-side routing returns 404s in production, ensure your static host is configured to serve `index.html` for unknown paths (SPA fallback) or use HashRouter for hosts that do not support history API fallback.

## Contributing

- Update the files under `src/components` listed above to change content.
- Commit and push to your branch, open a pull request for review.


