# Om Bhatt - Personal Portfolio

A modern, animated personal portfolio for **Om Bhatt**, built with React, Vite, Tailwind CSS, and Framer Motion.

This Render-ready version is **frontend-only**. It does not require Node.js/Express or MongoDB for deployment.

## Project Structure

```text
portfolio/
└── frontend/
    ├── public/
    │   └── assets/
    │       ├── profile.jpg
    │       └── OM_BHATT_Resume.pdf
    ├── src/
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## Run Locally

```bash
cd frontend
npm install
npm run dev
```

Open the local URL shown by Vite (normally `http://localhost:5173`).

## Production Build

```bash
cd frontend
npm install
npm run build
```

The production files are generated in `frontend/dist`.

## Render Deployment

Create a **Static Site** on Render and connect the GitHub repository.

Use these settings:

- **Root Directory:** `frontend`
- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `dist`

No MongoDB or backend environment variables are required.

## Contact Form

The contact form is frontend-only. When a visitor submits it, the visitor's default email application opens with the recipient, subject, name, email, and message filled in. The recipient email is taken from `src/data/portfolioData.js`.

## Personal Photo

The portfolio uses the exact profile image at:

```text
frontend/public/assets/profile.jpg
```

Replace that file with your preferred image if needed.
