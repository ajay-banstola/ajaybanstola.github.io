# ajay-portfolio

Personal portfolio + blog for Ajay Banstola. Built with [Astro](https://astro.build), hosted free on GitHub Pages, comments/likes via Giscus.

**Interactive extras:** press <code>`</code> for the terminal, `Ctrl+K` for the command palette.

---

## 1. One-time setup on Windows

1. Install **Git**: download from https://git-scm.com/download/win → run installer, accept all defaults.
2. Install **Node.js LTS**: download from https://nodejs.org → run installer, accept defaults.
3. Install **VS Code**: https://code.visualstudio.com (optional but recommended).
4. Restart your computer (ensures Git/Node are on your PATH).
5. Verify — open **PowerShell** and run:
   ```powershell
   git --version
   node --version
   ```
   Both should print version numbers.

## 2. Run the site locally

Unzip this project somewhere (e.g. `C:\Users\you\ajay-portfolio`), then in PowerShell:

```powershell
cd C:\Users\you\ajay-portfolio
npm install
npm run dev
```

Open http://localhost:4321 — that's your site. Edit files and it live-reloads.

## 3. Push to GitHub

1. Create a new **public** repo at https://github.com/new (e.g. `portfolio`). Don't add a README.
2. In PowerShell, inside the project folder:
   ```powershell
   git init
   git add .
   git commit -m "initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
   (Git will pop up a browser window to sign in the first time.)

## 4. Turn on GitHub Pages

1. In the repo: **Settings → Pages → Source → GitHub Actions**.
2. Go to the **Actions** tab — the "Deploy to GitHub Pages" workflow should already be running (it shipped with this project). When it's green, your site is live at `https://YOUR_USERNAME.github.io/portfolio/`.

## 5. Connect your custom domain

1. **Settings → Pages → Custom domain** → enter your domain (e.g. `ajaybanstola.com`) → Save. GitHub creates a CNAME file for you.
2. At your **domain registrar's DNS settings**, add:
   | Type  | Name | Value |
   |-------|------|----------------------|
   | A     | @    | 185.199.108.153 |
   | A     | @    | 185.199.109.153 |
   | A     | @    | 185.199.110.153 |
   | A     | @    | 185.199.111.153 |
   | CNAME | www  | YOUR_USERNAME.github.io |
3. Wait for DNS to propagate (minutes to a few hours), then back in Settings → Pages, check **Enforce HTTPS**.
4. Update `astro.config.mjs` → set `site: 'https://yourdomain.com'` → commit and push.

## 6. Enable comments + likes (Giscus, free)

1. Repo **Settings → General → Features** → check **Discussions**.
2. Install the Giscus app on the repo: https://github.com/apps/giscus
3. Go to https://giscus.app → enter your repo → choose mapping **pathname**, category **Announcements**.
4. Copy the `data-repo-id` and `data-category-id` values it shows you into `src/components/Giscus.astro`, and set `CONFIGURED = true`.
5. Commit and push. Every blog post now has comments; the emoji reactions are your likes.

## 7. Everyday workflow

- **Write a post:** add a Markdown file to `src/content/blog/` (see the sample posts for the frontmatter format). Filename = URL.
- **Edit site content:** everything (bio, jobs, projects, links) lives in `src/data.ts`.
- **Publish:** `git add . && git commit -m "..." && git push` — live in ~1 minute.

## To-do list for Ajay

- [ ] In `src/data.ts`: write real bullet points for the **Apex Innovations** role.
- [ ] Decide whether to keep `public/resume.pdf` public (it contains your phone number — consider uploading a version without it).
- [ ] Configure Giscus (step 6).
- [ ] Set your real domain in `astro.config.mjs`.
- [ ] Replace the two sample blog posts with real ones.
