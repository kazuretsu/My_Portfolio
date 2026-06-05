import { useMemo, useState } from "react"
import { SectionHeader } from "@/components/section-header"
import { ProjectCard } from "@/components/project-card"
import { projects, type Category } from "@/data/portfolio"

const FILTERS: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "ai-ml", label: "AI/ML" },
  { id: "web3", label: "Web3" },
  { id: "desktop", label: "Desktop" },
]

export function WorkSection() {
  const [filter, setFilter] = useState<"all" | Category>("all")

  // Newest-first; stable sort keeps authored order for equal dates.
  const sorted = useMemo(
    () => [...projects].sort((a, b) => b.dateValue.localeCompare(a.dateValue)),
    [],
  )

  const filtered =
    filter === "all"
      ? sorted
      : sorted.filter((p) => p.categories.includes(filter))

  return (
    <section id="work" className="mx-auto max-w-[1100px] px-5 pt-24">
      <SectionHeader index="02" label="work">
        <FilterTabs current={filter} onChange={setFilter} />
      </SectionHeader>
      <div className="md:ml-[248px]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
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
  onChange: (v: "all" | Category) => void
}) {
  return (
    <div className="inline-flex flex-wrap gap-1 rounded-lg border border-border bg-card p-1">
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
