import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-sea text-foam">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-[family-name:var(--font-display)] text-lg">
            Maryland Blue Crab Company
          </p>
          <p className="mt-2 max-w-md text-sm text-foam/80">
            B2B wholesale for US seafood distributors. Italian invasive blue crab
            from Mediterranean waters, processed with Tagliapietra.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/product/" className="hover:underline">
            Product & origin
          </Link>
          <Link href="/inquiry/" className="hover:underline">
            Request supply conversation
          </Link>
          <a
            href="https://www.tagliapietrasrl.com/"
            className="hover:underline"
            rel="noreferrer"
            target="_blank"
          >
            Tagliapietra partner site
          </a>
        </div>
      </div>
    </footer>
  );
}
