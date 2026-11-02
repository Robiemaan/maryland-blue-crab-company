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

## Local run

```bash
npm install
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
| `/product/` | Spec-oriented product overview |
| `/inquiry/` | Lead-capture form shell (client-side only until CRM wired) |

## Out of scope (for now)

- Final brand system
- CRM / email delivery for inquiries
- Public pricing, Incoterms, or compliance claims
