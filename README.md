# DTRS - Train Operations, Deployments & Simulators Hub

A sleek, railway-themed static landing portal built for **DTRS (Dynamic Train Rescheduling System)**. It organizes all project resources into **three dedicated sections**: **Deployments**, **Githubs**, and **Simulators**.

All URLs and configurations are stored in a **single configuration file** (`config.js`) so you can update them in seconds without traversing the codebase.

---

## Deploying to Vercel

This repository is pre-configured and 100% deployment-ready for Vercel.

### Method 1: Push to GitHub & Import in Vercel (Recommended)
1. Push this directory to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial DTRS deployment portal"
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New..." > "Project"**.
3. Import your GitHub repository.
4. Framework Preset: **Other** (Root directory: `./`).
5. Click **"Deploy"**. Your portal will be live on a `*.vercel.app` domain in seconds!

### Method 2: Deploy with Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## Configuration Files Added for Vercel

- [`vercel.json`](file:///c:/Users/AMRITYA/Desktop/SIH%202026/Github%20Template/vercel.json) - Clean URLs, security headers, and asset cache headers.
- [`package.json`](file:///c:/Users/AMRITYA/Desktop/SIH%202026/Github%20Template/package.json) - Project manifest with zero-dependency local preview command.
- [`.gitignore`](file:///c:/Users/AMRITYA/Desktop/SIH%202026/Github%20Template/.gitignore) - Prevents `.vercel` build cache and OS metadata from entering Git.

---

## How to Change URLs (The Easy Way)

Open [`config.js`](file:///c:/Users/AMRITYA/Desktop/SIH%202026/Github%20Template/config.js) to update any destination link:

```javascript
const DTRS_CONFIG = {
  // 1. DEPLOYMENTS
  deployments: [
    {
      id: "Deployement 1",
      platform: "Web Application",
      title: "Admin View of DTRS",
      url: "apps/delays/index.html", // <-- Update to your live URL
      status: "LIVE"
    },
    ...
  ],

  // 2. GITHUBS
  githubs: [ ... ],

  // 3. SIMULATORS
  simulators: [ ... ]
};
```

Whenever you push changes to `config.js`, Vercel will automatically re-deploy your site with the updated links.

---

## Local Development Preview

```powershell
python -m http.server 8000
```
Open in browser: [http://localhost:8000](http://localhost:8000)
