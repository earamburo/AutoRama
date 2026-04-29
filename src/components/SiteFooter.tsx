import { Link } from "react-router-dom";
import logo from "@/assets/autorama-logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t-[1px] border-[#3b5bdb] bg-black sm:mt-32">
      <div className="mx-auto max-w-[1400px] px-6 py-14 lg:px-10 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <img src={logo} alt="Autorama Motors" className="h-16 w-auto sm:h-20" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#9ca3af]">
              Vintage car sales, restoration, repair, and paint. Built for enthusiasts, by enthusiasts.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#3b5bdb]">
              Visit
            </h4>
            <p className="text-sm leading-relaxed text-white/80">
              Athens, Georgia
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#3b5bdb]">
              Contact
            </h4>
            <p className="text-sm leading-relaxed text-white/80">
              (512) 555-0142
              <br />
              <a
                href="mailto:shop@autoramamotors.com"
                className="transition-colors hover:text-[#4c6ef5]"
              >
                shop@autoramamotors.com
              </a>
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#3b5bdb]">
              Hours
            </h4>
            <p className="text-sm leading-relaxed text-white/80">
              Tue – Fri · 9:00 – 6:00
              <br />
              Sat · 10:00 – 4:00
              <br />
              Sun / Mon · By appointment
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-6 text-[10px] uppercase tracking-[0.25em] text-white/40 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Autorama Motors</span>
          <div className="flex flex-wrap gap-6">
            <Link to="/inventory" className="transition-colors hover:text-[#4c6ef5]">
              Inventory
            </Link>
            <Link to="/restoration" className="transition-colors hover:text-[#4c6ef5]">
              Restoration
            </Link>
            <Link to="/contact" className="transition-colors hover:text-[#4c6ef5]">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
