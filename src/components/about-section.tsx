import { Badge } from "@/components/ui/badge"
import { SectionHeader } from "@/components/section-header"
import { siteConfig, skillGroups } from "@/data/portfolio"
import { skillIconUrl } from "@/lib/skill-icons"

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-[1100px] px-5 pt-24">
      <SectionHeader index="01" label="about" />
      <div className="md:ml-[248px]">
        <p className="max-w-2xl text-[17px] leading-[1.65] text-foreground">
          {siteConfig.bio}
        </p>
        <div className="mt-8 flex flex-col gap-5">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <div className="mb-2.5 text-[13px] text-muted-foreground">
                {group.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => {
                  const icon = skillIconUrl(skill)
                  return (
                    <Badge key={skill} variant="outline" className="gap-1.5">
                      {icon && (
                        <img
                          src={icon}
                          alt=""
                          aria-hidden="true"
                          className="size-3.5"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = "none"
                          }}
                        />
                      )}
                      {skill}
                    </Badge>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
