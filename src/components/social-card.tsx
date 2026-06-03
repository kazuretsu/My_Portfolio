import { useState } from "react"
import type { SocialLink } from "@/data/portfolio"

const ICONS: Record<SocialLink["icon"], string> = {
  "arrow-up-right": "↗",
  "arrow-right": "→",
  "arrow-down": "↓",
}

export function SocialCard({ link }: { link: SocialLink }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={link.href}
      target={link.href.startsWith("mailto:") ? undefined : "_blank"}
      rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center justify-between rounded-xl border bg-card p-4 no-underline transition-all duration-150"
      style={{
        borderColor: hovered ? "var(--primary)" : "var(--border)",
        transform: hovered ? "translateX(2px)" : "translateX(0)",
        color: "var(--foreground)",
      }}
    >
      <div>
        <div className="text-sm font-medium">{link.label}</div>
        <div className="text-xs text-muted-foreground">{link.sub}</div>
      </div>
      <span className="text-base text-primary">{ICONS[link.icon]}</span>
    </a>
  )
}
