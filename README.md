# One Commit to Production

A single-page React + Vite dashboard for demonstrating a Git commit flowing through Jenkins, Docker Hub, and production.

## Requirements

- Node.js LTS (includes npm)
- Git
- Docker (for your container build/deploy workflow)
- Jenkins and a Docker Hub account for your CI/CD pipeline

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Create a production build

```bash
npm run build
```

The optimized static site is generated in `dist/`.

Preview the production build locally:

```bash
npm run preview
```

## Notes

The pipeline cards and deployment values are static demo content. They are not connected to Jenkins or Docker Hub APIs. Update the sample repository/image values in `src/App.jsx` to match your setup.
