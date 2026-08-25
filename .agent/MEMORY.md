# NovelPush Memory

Updated August 25, 2026.

- Product: NovelPush is a calm, book-first campaign workspace for self-published authors. It turns a book, listing, and author-supplied words into coordinated promotion prepared for Facebook, Instagram, and X.
- Positioning: "Your story, everywhere." Avoid generic scheduler, social-growth-hack, analytics, attribution, retailer-integration, automation, list-growth, and outcome-guarantee claims until verified.
- Brand: Ink Blue `#0B1D33`, Gold `#D4AF37`, Ivory `#F5F2E9`, Slate `#51607A`, Mist `#E3E4E6`; Lora headlines and Inter interface/body; literary editorial spacing, restrained gold rules, book/paper/quiet-author visual world.
- Pricing: First Chapter `$9`; Author Shelf `$19`; Imprint `$39`. Copy Desk (human editorial service): `$49`, `$79`, `$129`. Checkout must use platform URLs in `BUSINESS.md` only.
- Technical limits: never install Stripe, Clerk, or third-party email SDKs. Use `/site/notify`: `subscriber.added` (email-only), `contact_inquiry` (non-empty name+email), `agent_reply` (guide delivery only).
- Must include a visible Built with MadeThis footer badge, responsive marketing surfaces, metadata, demo dashboard, and checkout success/canceled pages.
- Repository status on August 25, 2026: `RemBert-Dash/novelpush` was not publicly cloneable from the worker environment; GitHub requested credentials. No source-level implementation or build validation was possible.
