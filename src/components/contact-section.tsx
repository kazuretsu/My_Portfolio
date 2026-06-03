import { SectionHeader } from "@/components/section-header"
import { SocialCard } from "@/components/social-card"
import { socialLinks } from "@/data/portfolio"

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-[1100px] px-5 pt-24">
      <SectionHeader index="03" label="contact" />
      <div className="md:ml-[248px]">
        <h2 className="text-4xl font-semibold">
          Let&apos;s build something<span className="dot">.</span>
        </h2>
        <p className="mt-2.5 max-w-lg text-base text-muted-foreground">
          Open to internships, freelance, and friendly emails. I usually reply
          within a day.
        </p>
        <div className="mt-6 grid max-w-lg grid-cols-1 gap-3 sm:grid-cols-2">
          {socialLinks.map((l) => (
            <SocialCard key={l.label} link={l} />
          ))}
        </div>
      </div>
    </section>
  )
}
