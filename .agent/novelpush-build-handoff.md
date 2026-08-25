# NovelPush Implementation Handoff

Prepared August 25, 2026. This is the implementation contract for the first public NovelPush site and non-authenticated demo campaign dashboard.

## Product boundary

NovelPush is a book-first campaign workspace for self-published authors. It helps an author turn one book, its listing, and their own words into a coordinated Facebook, Instagram, and X campaign. Do not state or imply that it currently provides analytics, sales attribution, retailer integrations, reader-list growth, automatic scheduling, or any social-network capability that has not shipped.

Copy Desk is a separately purchased, limited-capacity human editorial service. It is not an AI-copywriting guarantee.

## Brand system

- `Ink Blue` `#0B1D33`: primary field, header/footer, editorial depth.
- `Gold` `#D4AF37`: rules, icon details, active controls, restrained CTAs.
- `Ivory` `#F5F2E9`: reading surface and light sections.
- `Slate` `#51607A`: secondary interface text.
- `Mist` `#E3E4E6`: borders and quiet UI fills.
- Display type: `Lora` (or `Lora Display` if available in the project) for headlines.
- UI/body type: `Inter`.
- Use fine gold rules, generous editorial whitespace, large calm headlines, book/paper texture, and rounded-but-not-playful panels. Avoid gradients, neon, influencer imagery, growth-hack copy, excessive exclamation points, and dense SaaS chrome.
- Logo language: a simple open-book mark with three gold push/signal bars; pair with a Lora wordmark. Use a code-native CSS/SVG treatment if no approved logo asset is checked into the repo.

## Required route map

| Route | Purpose | Key content |
| --- | --- | --- |
| `/` | Marketing homepage | Hero, campaign workflow, platform tailoring, Copy Desk, pricing preview, FAQ, email capture, MadeThis badge. |
| `/pricing` | Full pricing and plan choice | `$9`, `$19`, `$39` tiers; Copy Desk `$49`, `$79`, `$129`; links only to platform checkout URLs declared in `BUSINESS.md`. |
| `/demo` | Interactive sample dashboard | Sample campaign for fictional title *Beneath the Broken Sky*; dashboard, campaign list, post previews, progress state. |
| `/checkout/success` | Platform return state | Calm confirmation and “return to NovelPush” CTA; no payment verification claim. |
| `/checkout/canceled` | Platform return state | Reassuring cancellation state, pricing return CTA; no pressure language. |
| `/privacy` and `/terms` | Required launch placeholders | Publish owner-approved legal copy before accepting customers. |

If existing repo conventions use route groups or different legal paths, preserve those conventions while retaining this user-facing behavior.

## Homepage copy contract

### Hero

Eyebrow: `A book-first campaign workspace`

Headline: `Your story, everywhere.`

Supporting copy: `Turn one book and the words you already have into a calm, coordinated campaign for the places readers follow you.`

Primary CTA: `Explore the demo` → `/demo`

Secondary CTA: `See plans` → `/pricing`

Microcopy: `Built for book launches, sales, and backlist revivals.`

### Campaign-first section

Headline: `Start with the book. Not an empty calendar.`

Body: `Add the title, listing, campaign moment, and the message you want readers to hear. NovelPush keeps the work centered on the story while helping you prepare it for each platform.`

Three steps: `Choose the moment` / `Shape your posts` / `Prepare every platform`.

### Platform section

Headline: `One campaign. A considered version for each platform.`

Body: `Keep the heart of your message while adapting its presentation for Facebook, Instagram, and X. You remain in control of every word and claim.`

Use capability language such as `prepare` and `tailor`; do not promise autonomous publishing unless repository behavior proves it.

### Copy Desk section

Headline: `When the blank page is the blocker.`

Body: `Copy Desk is an optional, limited-capacity editorial service for authors who want a polished campaign built from their book details, notes, and voice guidance.`

CTA: `View Copy Desk options` → `/pricing#copy-desk`

### Closing/email section

Headline: `Share your story with intention.`

Email-only signup uses the platform `/site/notify` proxy with event `subscriber.added`. Do not install an email SDK. Avoid claiming a guide is sent unless the `agent_reply` flow is actually connected.

### FAQ

1. `Is NovelPush another social-media scheduler?` — No; it begins with a promotional moment for a specific book.
2. `Will it write my campaign for me?` — You supply your copy; Copy Desk is the optional human editorial alternative.
3. `Which platforms are included?` — The first workflow is designed for Facebook, Instagram, and X; state exact live connection/publishing behavior only after verification.
4. `Can I use it for a backlist book?` — Yes; launch, promotion, and revival moments are central use cases.
5. `What is an active campaign?` — Define only when capacity enforcement exists.
6. `What is Copy Desk?` — A paid limited-capacity editorial service, not an outcome guarantee.

## Pricing copy contract

### Plans

| Plan | Monthly price | Campaign capacity / positioning |
| --- | ---: | --- |
| First Chapter | `$9` | One active campaign; a single title or promotion moment. |
| Author Shelf | `$19` | Up to five active campaigns; an ongoing author catalog. |
| Imprint | `$39` | Up to fifteen active campaigns; a larger catalog or multiple author identities. |

Use `Platform checkout` links only, constructed from the checkout base and product IDs in `BUSINESS.md`: `{PLATFORM_URL}/checkout/{businessSlug}/{productId}`. Do not add Stripe libraries, Stripe API routes, or a card form. If IDs are missing, render disabled/plain-language “Checkout coming soon” CTAs rather than guessing URLs.

### Copy Desk

- `Campaign Polish` — `$49`: supplied copy refined for one promotional moment.
- `Launch Set` — `$79`: cohesive platform-ready campaign set from supplied notes and voice guidance.
- `Reader Season` — `$129`: broader campaign support for a launch window or backlist revival.

All Copy Desk language must say that final scope, turnaround, revisions, and availability are confirmed before purchase.

## Demo dashboard contract

Use client state only; this is a demo, not authenticated product behavior.

### Desktop composition

- Dark ink-blue left rail: logo, `Dashboard`, `Campaigns`, `Calendar`, `Posts`, `Accounts`, `Billing`, `Settings`.
- Ivory application surface with compact top bar, quiet gold `New campaign` action, and author avatar.
- Opening greeting: `Good morning, Author.` then `Let’s share your story.`
- Metrics: `2 Campaigns Live`, `18 Posts Scheduled`, `7 Platforms` only if explicitly labelled `Sample activity`; safer alternative is `2 Sample Campaigns`, `18 Draft Posts`, `3 Platform Formats`.
- Upcoming card: fictional title *Beneath the Broken Sky* by `L. Marrow`, date `May 24, 2025`, and Facebook/Instagram/X visual indicators.
- Campaign detail contains a progress stepper: `Book details` → `Campaign message` → `Platform posts` → `Ready to review`.
- Tabs or chips switch platform preview copy. Mark all actions `Demo` or persist only in local component state.

### Responsive behavior

- Under `1024px`: collapse the permanent rail to an icon/menu trigger; campaign cards stack two-wide then one-wide.
- Under `768px`: top bar trims to brand + menu + avatar; metrics become a two-column grid; action labels remain readable.
- Under `480px`: single-column sections; hero CTAs stack full width; pricing cards retain one clear recommended tier only if already present in source content.
- Respect visible keyboard focus, `prefers-reduced-motion`, adequate text contrast, and 44px touch targets.

## Technical requirements

- Match existing project patterns and dependencies before adding files.
- Use `next/font/google` for Lora and Inter if this is a Next.js application and existing setup permits it.
- Give all interactive components (dashboard tabs, mobile navigation, signup form) a top-level `"use client"` directive.
- If checkout pages read search parameters, place the `useSearchParams()` client component inside `Suspense`.
- Add page metadata for homepage, pricing, demo, success, and canceled routes. Homepage title: `NovelPush — Your story, everywhere.`
- Add Open Graph metadata using an approved repo asset only; do not create a misleading product screenshot.
- Footer must include a visible `Built with MadeThis` badge/link; do not hide it behind a menu or conditional render.

## Notify proxy contract

Use a same-origin `/site/notify` request only. Do not include Resend, SendGrid, Postmark, or other email SDKs.

- Email-only newsletter: `event: "subscriber.added"` and a non-empty email.
- Contact form: `event: "contact_inquiry"` and non-empty name and email.
- Free-guide delivery only when implemented: `event: "agent_reply"`.
- Include friendly client-side success and error states; preserve an accessible `aria-live` status region.

## Verification checklist

1. Run `npm install` only if lockfile/project setup requires it.
2. Run `npm run build`.
3. Run `npx tsc --noEmit` when TypeScript is configured.
4. Run the project’s focused tests/lint script if provided.
5. Test `/`, `/pricing`, `/demo`, `/checkout/success`, and `/checkout/canceled` at desktop and 375px width.
6. Confirm no Stripe, Clerk, or third-party email package/import is introduced.
7. Confirm every checkout URL comes from `BUSINESS.md` and no API key is required.
