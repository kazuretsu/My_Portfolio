import { Button } from "@/components/ui/button"
import { PortraitCarousel } from "@/components/portrait-carousel"
import { siteConfig } from "@/data/portfolio"

function smoothScroll(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative mx-auto max-w-[1100px] px-5 pt-20"
    >
      {/* Hero glow */}
      <div className="hero-glow pointer-events-none fixed -left-[200px] -top-[200px] z-0 size-[600px] rounded-full" />

      {/* Status pill */}
      <div className="bg-primary-soft border-primary-soft mb-6 inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs font-medium text-primary">
        <span className="status-dot inline-block size-1.5 rounded-full bg-primary" />
        {siteConfig.statusMessage}
      </div>

      {/* Grid: avatar + text */}
      <div className="grid items-start gap-12 md:grid-cols-[240px_1fr]">
        <PortraitCarousel />

        <div>
          <p className="mb-3 text-sm text-muted-foreground">hi, i&apos;m</p>
          <h1 className="text-4xl font-semibold leading-[1.05] md:text-5xl lg:text-[64px]">
            {siteConfig.name}
            <span className="dot">.</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-[22px] md:leading-[1.45]">
            {siteConfig.tagline}
          </p>
          <div className="mt-7 flex gap-2.5">
            <Button
              size="lg"
              onClick={() => smoothScroll("work")}
              className="shadow-[0_8px_24px_-8px_var(--primary)]"
            >
              See my work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => smoothScroll("contact")}
            >
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
