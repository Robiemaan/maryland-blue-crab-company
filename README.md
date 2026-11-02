# Maryland Blue Crab Company - US commercial site

B2B wholesale website for Maryland Blue Crab Company.

Audience: US seafood wholesalers and distributors (not consumer retail).

Product messaging encoded on the site:

- Italian invasive blue crab from Mediterranean waters
- Processed with [Tagliapietra](https://www.tagliapietrasrl.com/)
- Better quality, cleaner waters, and cheaper than US blue crab
- Pricing / Incoterms / certifications are not invented here - shared on inquiry

## Stack

- Next.js 15 (App Router) with static export
- TypeScript + Tailwind CSS v4
- Deploy preview via GitHub Pages
- Inquiry delivery via Formspree-compatible endpoint (static-host friendly)

## Local run

```bash
npm install
cp .env.example .env.local
# set NEXT_PUBLIC_INQUIRY_ENDPOINT to your Formspree form URL
npm run dev
```

Open `http://localhost:3000/maryland-blue-crab-company/` (basePath matches GitHub Pages).

To run at site root locally:

```bash
PAGES_BASE_PATH= npm run dev
```

## Build

```bash
npm run build
```

Static files land in `out/`.

## Inquiry / lead capture

The `/inquiry/` form POSTs JSON to `NEXT_PUBLIC_INQUIRY_ENDPOINT` (Formspree or compatible).

Required fields: company, contact name, work email. Optional: phone, destination, volume, notes.

Spam basics:

- Honeypot field (`website` / `_gotcha`) - bots that fill it get a silent success and no upstream POST
- Client cooldown (60s) between successful submits in the same browser session

Success copy confirms a human follow-up. It never invents pricing.

### Chief of Staff setup (required for live inbox delivery)

1. Create a Formspree form (or equivalent) that emails the **founder inbox**.
2. In Formspree notification settings, add Sales / Outreach as a CC **or** set `NEXT_PUBLIC_INQUIRY_SALES_CC`.
3. Add GitHub Actions repository secrets on `Robiemaan/maryland-blue-crab-company`:
   - `NEXT_PUBLIC_INQUIRY_ENDPOINT` = `https://formspree.io/f/<id>`
   - `NEXT_PUBLIC_INQUIRY_SALES_CC` = sales inbox (optional if Formspree UI already CCs Sales)
4. Re-run **Deploy GitHub Pages** so the static build inlines the public endpoint.
5. Smoke-test from the preview `/inquiry/` page and confirm the founder (+ Sales) receive the lead email.

Local check without a real Formspree account:

```bash
npm run verify:inquiry
```

## Deploy preview (GitHub Pages)

1. Push `main` to the GitHub repo.
2. Repo Settings → Pages → Source: **GitHub Actions**.
3. The `Deploy GitHub Pages` workflow builds the static export and publishes it.
4. Preview URL (project pages):
   `https://<github-user>.github.io/maryland-blue-crab-company/`

Manual re-deploy: Actions → Deploy GitHub Pages → Run workflow.

## Routes

| Path | Purpose |
| --- | --- |
| `/` | Homepage shell + approved positioning |
| `/product/` | Product + origin brief (specs, Tagliapietra, sources, inquiry CTA) |
| `/inquiry/` | Wholesaler inquiry form → founder inbox endpoint |

## Out of scope (for now)

- Final brand system
- Public pricing, Incoterms, or compliance claims
