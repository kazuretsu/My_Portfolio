import { useState } from "react"
import { SectionHeader } from "@/components/section-header"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/data/portfolio"

const FILTERS = [
  { id: "all", label: "All" },
  { id: "web-apps", label: "Web apps" },
  { id: "tools", label: "Tools" },
  { id: "experiments", label: "Experiments" },
] as const

export function WorkSection() {
  const [filter, setFilter] = useState("all")

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter)

  return (
    <section id="work" className="mx-auto max-w-[1100px] px-5 pt-24">
      <SectionHeader index="02" label="work">
        <FilterTabs current={filter} onChange={setFilter} />
      </SectionHeader>
      <div className="md:ml-[248px]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {filtered.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              featured={p.featured}
            />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full py-10 text-center text-sm text-muted-foreground">
              No projects in this category yet.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function FilterTabs({
  current,
  onChange,
}: {
  current: string
  onChange: (v: string) => void
}) {
  return (
    <div className="inline-flex gap-1 rounded-lg border border-border bg-card p-1">
      {FILTERS.map((f) => (
        <button
          key={f.id}
          onClick={() => onChange(f.id)}
          className={`cursor-pointer rounded-md px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
            current === f.id
              ? "bg-primary text-primary-foreground"
              : "bg-transparent text-muted-foreground"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}
