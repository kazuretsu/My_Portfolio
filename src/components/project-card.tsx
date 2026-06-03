import { useState } from "react"
import type { Project } from "@/data/portfolio"

export function ProjectCard({
  project,
  featured,
}: {
  project: Project
  featured: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative cursor-pointer rounded-xl border p-5 transition-all duration-200 ${
        featured
          ? "bg-primary-soft border-primary-soft bg-gradient-to-br from-[color-mix(in_oklch,var(--primary)_12%,transparent)] to-card"
          : "border-border bg-card"
      }`}
      style={{
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 12px 32px -16px var(--primary)"
          : "none",
      }}
    >
      {featured && (
        <span className="absolute right-4 top-4 text-[10px] font-semibold uppercase tracking-wider text-primary">
          ● featured
        </span>
      )}

      {/* Thumbnail placeholder */}
      <div
        className="mb-4 grid h-[120px] place-items-center rounded-lg border border-border bg-background text-[11px] text-muted-foreground"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent 0 8px, var(--border) 8px 9px)",
        }}
      >
        {project.id}.png
      </div>

      <div className="mb-1.5 text-lg font-semibold">{project.title}</div>
      <div className="mb-3.5 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </div>

      {/* Tags */}
      <div className="mb-3.5 flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border bg-background px-2 py-0.5 text-[11px] text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 text-[13px]">
        <a
          href={project.liveUrl ?? "#"}
          className="inline-flex items-center gap-1 text-primary no-underline"
        >
          Live demo <span className="text-[11px]">↗</span>
        </a>
        <a
          href={project.sourceUrl ?? "#"}
          className="text-muted-foreground no-underline"
        >
          Source code
        </a>
      </div>
    </div>
  )
}
