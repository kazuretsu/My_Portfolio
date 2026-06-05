import { useState } from "react"
import type { Project } from "@/data/portfolio"

export function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false)
  const ongoing = project.ongoing ?? false

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative flex flex-col rounded-xl border p-5 transition-all duration-200 ${
        ongoing
          ? "bg-primary-soft border-primary-soft bg-gradient-to-br from-[color-mix(in_oklch,var(--primary)_12%,transparent)] to-card"
          : "border-border bg-card"
      }`}
      style={{
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hovered ? "0 12px 32px -16px var(--primary)" : "none",
      }}
    >
      {/* Header: title + date (upper-right) */}
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="text-lg font-semibold leading-tight">
          {project.title}
        </div>
        <div
          className={`shrink-0 text-[11px] font-medium tracking-wide ${
            ongoing ? "text-primary" : "text-muted-foreground"
          }`}
        >
          {ongoing && "● "}
          {project.dateLabel}
        </div>
      </div>

      {/* Cover: image, or a tagline placeholder (title lives in the header) */}
      <div className="mb-4 grid h-[120px] place-items-center overflow-hidden rounded-lg border border-border bg-background px-5 text-center">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="size-full object-cover"
          />
        ) : (
          <div className="text-[13px] leading-snug font-medium text-foreground/70">
            {project.tagline}
          </div>
        )}
      </div>

      {/* Description */}
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

      {/* Links (only when a URL exists) */}
      {(project.liveUrl || project.sourceUrl) && (
        <div className="mt-auto flex gap-4 text-[13px]">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary no-underline"
            >
              Live demo <span className="text-[11px]">↗</span>
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground no-underline"
            >
              Source code
            </a>
          )}
        </div>
      )}
    </div>
  )
}
