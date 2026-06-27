# Sagar — Finance & Fiction

A personal website with a Bloomberg-terminal aesthetic. Pure HTML, CSS, and vanilla JS — no build step.

## Files
- `index.html` — the page (all sections in one file with anchor navigation)
- `styles.css` — styling and animations
- `script.js` — ticker, knowledge garden, quotes, content lists
- `.nojekyll` — tells GitHub Pages to serve files as-is

## Run locally
Just open `index.html` in a browser. Or:
```bash
python3 -m http.server 8000
```

## Deploy to GitHub Pages
1. Create a new GitHub repository.
2. Upload all files in this folder to the repo root.
3. Settings → Pages → Source: `Deploy from a branch` → Branch: `main` / root.
4. Your site will be live at `https://<username>.github.io/<repo>/`.

## Customize
- Personal info / contact: edit the `LINKS` array in `script.js`.
- Projects, books, research: edit the corresponding arrays in `script.js`.
- Colors & fonts: edit the `:root` variables in `styles.css`.
