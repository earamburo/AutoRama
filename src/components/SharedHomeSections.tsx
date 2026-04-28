import { Link } from "react-router-dom";

type Props = {
  title: string;
  children?: React.ReactNode;
  accentWords?: string[];
};

export function SharedHomeSections({ title, children, accentWords = [] }: Props) {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-28 lg:px-10 lg:py-32">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#3b5bdb]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
                The Shop
              </span>
            </div>
            <h2 className="font-display fluid-display-sm uppercase tracking-wide">
              Built By
              <br />
              <span className="text-[#3b5bdb]">Enthusiasts.</span>
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-[#9ca3af] md:col-span-6 md:col-start-7">
            <p>
              Autorama Motors is a small shop in South Austin focused on vintage Japanese sports
              cars and American muscle. We buy, sell, restore, and maintain pre-1980 iron.
            </p>
            <p>
              Every car that leaves the shop has been through our hands. Sorted mechanically,
              photographed honestly, and priced for what it is. If something is wrong with a car,
              we'll tell you — we'd rather lose a sale than ship a problem.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 pt-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-white transition-colors hover:text-[#4c6ef5]"
            >
              <span className="h-px w-8 bg-[#3b5bdb]" /> Our Story
            </Link>
          </div>
        </div>
      </section>

      {children}

      <div className="border-y border-white/5 bg-[#0a0a0f]">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-6 lg:px-10">
          <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">
            Homepage Variation ·{" "}
            <span className="text-[#3b5bdb]">{title}</span>
            {accentWords.length > 0 && (
              <span className="ml-2 text-white/30">· {accentWords.join(" / ")}</span>
            )}
          </div>
          <Link
            to="/"
            className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white transition-colors hover:text-[#4c6ef5]"
          >
            ← All Variations
          </Link>
        </div>
      </div>
    </>
  );
}
