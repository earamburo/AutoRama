import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const inputClass =
  "w-full border-0 border-b border-white/20 bg-transparent py-4 text-white placeholder:text-white/40 transition-colors focus:border-b-2 focus:border-[#3b5bdb] focus:outline-none focus:ring-0";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-[#3b5bdb]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">
            Get In Touch
          </span>
        </div>
        <h1 className="font-display fluid-display uppercase tracking-wide">
          Con<span className="text-[#3b5bdb]">tact.</span>
        </h1>

        <div className="mt-12 grid gap-10 sm:mt-16 md:grid-cols-12 md:gap-16">
          <div className="space-y-8 md:col-span-5">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">Shop</div>
              <p className="mt-2 text-white/80">
                2451 Industrial Blvd
                <br />
                Austin, TX 78744
              </p>
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">Phone</div>
              <p className="mt-2 text-white/80">(512) 555-0142</p>
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">Email</div>
              <p className="mt-2 text-white/80">shop@autoramamotors.com</p>
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3b5bdb]">Hours</div>
              <p className="mt-2 text-white/80">
                Tue – Fri · 9:00 – 6:00
                <br />
                Sat · 10:00 – 4:00
                <br />
                Sun / Mon · By appointment
              </p>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-5 md:col-span-7"
          >
            <input required placeholder="Name" className={inputClass} />
            <input required type="email" placeholder="Email" className={inputClass} />
            <input placeholder="Subject" className={inputClass} />
            <textarea required rows={5} placeholder="Message" className={`${inputClass} resize-none`} />
            <button
              type="submit"
              disabled={sent}
              className="bg-[#3b5bdb] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-white transition-colors hover:bg-[#4c6ef5] disabled:bg-white/10"
            >
              {sent ? "Sent — We'll be in touch" : "Send Message"}
            </button>
          </form>
        </div>

        <div className="mt-16 overflow-hidden border border-white/10 sm:mt-20">
          <iframe
            title="Autorama Motors map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-97.74%2C30.22%2C-97.70%2C30.25&layer=mapnik&marker=30.234%2C-97.72"
            className="h-[360px] w-full"
            style={{ filter: "invert(0.92) hue-rotate(190deg) saturate(0.85) contrast(0.95)" }}
            loading="lazy"
          />
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
