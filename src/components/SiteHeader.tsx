import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "@/assets/logo-outline-transparent.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/inventory", label: "Inventory" },
  { to: "/restoration", label: "Restoration" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-1.5 sm:px-6 sm:py-2 lg:px-10">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Autorama Motors" className="h-16 w-auto sm:h-20" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `group relative text-[11px] font-medium uppercase tracking-[0.22em] transition-colors hover:text-white ${isActive ? "text-white" : "text-white/70"}`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px w-full origin-left bg-[#3b5bdb] transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-sm bg-[#3b5bdb] px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-white transition-colors hover:bg-[#4c6ef5] lg:inline-block"
          >
            Inquire
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-white transition-transform ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-px w-full bg-white transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-full bg-white transition-transform ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"} fixed inset-x-0 top-[60px] bottom-0 z-40 bg-black transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav className="flex h-full flex-col gap-6 px-6 py-10">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-display text-4xl uppercase tracking-wide transition-colors hover:text-[#4c6ef5] ${isActive ? "text-[#3b5bdb]" : "text-white"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-block bg-[#3b5bdb] px-6 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-white"
          >
            Inquire
          </Link>
        </nav>
      </div>
    </header>
  );
}
