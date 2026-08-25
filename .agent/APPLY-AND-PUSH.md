# Applying the NovelPush Handoff

Prepared August 25, 2026.

## Current blocker

`https://github.com/RemBert-Dash/novelpush.git` could not be cloned without credentials on August 25, 2026. This means it was not publicly readable from this worker session at the time of the probe. No application source, dependencies, build scripts, or checkout IDs could be inspected.

## Fastest owner path

1. Make `RemBert-Dash/novelpush` publicly readable temporarily, or use the platform’s selected-repository authorization when it becomes available.
2. Confirm a root `BUSINESS.md` contains the platform URL, business slug, and product IDs for First Chapter, Author Shelf, and Imprint. Do not substitute Stripe URLs.
3. From the repository root, apply the attached artifact patch:

```bash
git apply .agent/novelpush-artifact.patch
```

4. Review the created `.agent/` materials, then implement `novelpush-build-handoff.md` against the repository’s existing app structure.
5. Validate the implementation:

```bash
npm run build
npx tsc --noEmit
```

6. Stage, commit, and push from the repository root:

```bash
git add .agent/novelpush-build-handoff.md .agent/APPLY-AND-PUSH.md .agent/MEMORY.md <implemented-site-files>
git commit -m "Build NovelPush launch site and demo dashboard"
git push origin main
```

## What is attached

- `novelpush-artifact.patch` adds this handoff, application instructions, and durable project memory to a repository that does not yet contain them.
- The patch deliberately does **not** fabricate application code against an unknown framework. Applying it is safe, but it cannot replace the repository-specific implementation step.

## Non-negotiable build constraints

- Use the approved Ink Blue / Gold / Ivory editorial system and Lora + Inter.
- Include the visible `Built with MadeThis` footer badge.
- Add homepage, pricing, demo dashboard, checkout success/canceled, metadata, and responsive states.
- Use only the platform checkout URLs in `BUSINESS.md`.
- Never add Stripe, Clerk, Resend, SendGrid, Postmark, or API keys.
- For email/contact behavior use `/site/notify` with the approved event names only.
