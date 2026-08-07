# Jake William Coldiron — Portfolio Site

Plain HTML/CSS/JS, no build step, no framework. Ready for GitHub Pages.

## Structure
```
index.html          Home
about.html           About / experience
publications.html    Publications list
projects.html         Personal projects
gallery.html          Photo gallery
contact.html           Contact links
css/style.css          All styling
js/main.js              Mobile nav toggle
images/                  Put your photos here
```

## Before you publish — replace placeholders
Search for `placeholder-note` and `example.com` across the files. Specifically:
- **Publications**: edit the entries in `publications.html` (and the featured ones on `index.html`)
- **Projects**: edit the cards in `projects.html`
- **Gallery**: drop images into `images/` and swap each `.gallery-slot` div in `gallery.html` for `<img src="images/yourphoto.jpg" alt="...">`
- **Contact**: replace the email/GitHub/LinkedIn links in `contact.html` and in every page footer
- **About**: replace the bio and timeline entries in `about.html`

## Deploy to GitHub Pages (nuking your old site)

1. On GitHub, go to your existing `username.github.io` repo (or create it if starting fresh).
2. Delete the old contents (or just delete and recreate the repo) — either works, but recreating is cleanest.
3. Clone it locally, or use the GitHub web UI to upload these files:
   ```
   git clone https://github.com/USERNAME/USERNAME.github.io.git
   cd USERNAME.github.io
   # copy all files from this folder in, replacing everything
   git add -A
   git commit -m "Rebuild site from scratch"
   git push
   ```
4. GitHub Pages will publish automatically at `https://USERNAME.github.io` within a minute or two.
5. If it's a project page instead of a user page (repo name isn't `username.github.io`), go to
   **Settings → Pages** in the repo and set the source branch to `main` (or `master`), root folder.

## Customizing further
- Colors and fonts are all CSS variables at the top of `css/style.css` — change `--teal`, `--crimson`, `--bg`, etc. in one place.
- The Kaplan–Meier curve on the homepage and the forest-plot style rows are hand-coded SVG/CSS — search for `.km-` and `.focus-row` / `.forest-track` in `style.css` if you want to adjust them.
