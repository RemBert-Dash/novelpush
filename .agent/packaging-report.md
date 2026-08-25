# NovelPush source packaging report

- Archive: `novelpush-source.zip`
- Packaging date: August 25, 2026
- Source recovered from the validated NovelPush rebuild artifact.
- ZIP root directly contains `package.json`, `app/`, `components/`, `public/`, and required Next.js/TypeScript/ESLint configuration files. It has no enclosing `novelpush/` directory.
- Excluded build and dependency outputs: `node_modules/` and `.next/`.
- Validation used: the included rebuild report records successful `npm install`, `npm run typecheck`, `npm run lint`, and `npm run build` on August 25, 2026. Archive structure is additionally validated with `unzip -t` and a clean extraction check.
