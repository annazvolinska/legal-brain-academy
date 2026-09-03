# Legal Brain Academy — Legal Context Engineering (landing page)

Static site. No npm, no React, no build step. Three files:

- `index.html` — the page
- `styles.css` — all styling (linked from index.html)
- `script.js` — nav, accordions, reveals, cookie banner (linked from index.html)
- `.nojekyll` — tells GitHub Pages to serve files as-is

## Open locally
Double-click `index.html`. It works straight from the file system.

## Deploy on GitHub Pages
1. Create a new GitHub repository (public).
2. Upload `index.html`, `styles.css`, `script.js` and `.nojekyll` to the repository root ("Add file" → "Upload files" → Commit).
3. Repository **Settings** → **Pages**.
4. Under "Build and deployment": Source = **Deploy from a branch**, Branch = **main**, Folder = **/ (root)**. Save.
5. Wait ~1 minute, then open the URL shown on that page: `https://<your-username>.github.io/<repo-name>/`.

## Custom domain (optional)
Settings → Pages → Custom domain, enter the domain, then add the DNS records GitHub shows you.

## Editing content
All copy lives in `index.html`. External URLs (application form, social profiles, legal documents) are plain `<a href="https://…" target="_blank" rel="noopener noreferrer">` links — edit them in place.
