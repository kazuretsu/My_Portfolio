import { useState } from "react"
import {
  ArrowRight,
  List,
} from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet"
import { useActiveSection } from "@/hooks/use-active-section"
import { navLinks, siteConfig } from "@/data/portfolio"

const sectionIds = navLinks.map((l) => l.id)

function smoothScroll(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

export function Navbar() {
  const active = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-[1100px] px-5">
      <nav className="flex h-14 items-center justify-between rounded-xl border border-border bg-card/70 px-5 backdrop-blur-md">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            smoothScroll("hero")
          }}
          className="flex items-center gap-2.5 font-semibold text-foreground no-underline"
        >
          <span
            className="inline-block size-2 rounded-sm bg-primary"
            style={{ boxShadow: "0 0 12px var(--primary)" }}
          />
          {siteConfig.name.toLowerCase().replace(" ", ".")}
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 text-sm md:flex">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => {
                e.preventDefault()
                smoothScroll(l.id)
              }}
              className={`relative transition-colors ${
                active === l.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
              {active === l.id && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-primary" />
              )}
            </a>
          ))}
          <Button
            size="sm"
            onClick={() => window.open(siteConfig.resumeUrl, "_blank")}
          >
            Résumé <ArrowRight className="ml-1 size-3.5" />
          </Button>
        </div>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon" className="md:hidden" />
            }
          >
            <List className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-64 bg-card">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-1 px-4">
              {navLinks.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    smoothScroll(l.id)
                    setOpen(false)
                  }}
                  className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                    active === l.id
                      ? "bg-primary/10 text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <Button
                className="mt-4"
                size="sm"
                onClick={() => window.open(siteConfig.resumeUrl, "_blank")}
              >
                Résumé <ArrowRight className="ml-1 size-3.5" />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
