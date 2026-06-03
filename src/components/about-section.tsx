import { Badge } from "@/components/ui/badge"
import { SectionHeader } from "@/components/section-header"
import { siteConfig, skills } from "@/data/portfolio"

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-[1100px] px-5 pt-24">
      <SectionHeader index="01" label="about" />
      <div className="md:ml-[248px]">
        <p className="max-w-2xl text-[17px] leading-[1.65] text-foreground">
          {siteConfig.bio}
        </p>
        <div className="mt-8">
          <div className="mb-3 text-[13px] text-muted-foreground">Skills</div>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <Badge key={s} variant="outline">
                {s}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
