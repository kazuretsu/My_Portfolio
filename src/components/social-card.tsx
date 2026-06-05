import { useState } from "react"
import {
  GithubLogo,
  LinkedinLogo,
  EnvelopeSimple,
  WhatsappLogo,
  FilePdf,
  ArrowUpRight,
  ArrowDown,
  type Icon,
} from "@phosphor-icons/react"
import type { SocialLink } from "@/data/portfolio"

const ICONS: Record<SocialLink["icon"], Icon> = {
  github: GithubLogo,
  linkedin: LinkedinLogo,
  email: EnvelopeSimple,
  whatsapp: WhatsappLogo,
  resume: FilePdf,
}

export function SocialCard({ link }: { link: SocialLink }) {
  const [hovered, setHovered] = useState(false)
  const BrandIcon = ICONS[link.icon]
  const TrailingIcon = link.icon === "resume" ? ArrowDown : ArrowUpRight
  const isExternal =
    !link.href.startsWith("mailto:") && !link.href.startsWith("/")

  return (
    <a
      href={link.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-3 rounded-xl border bg-card p-4 no-underline transition-all duration-150"
      style={{
        borderColor: hovered ? "var(--primary)" : "var(--border)",
        transform: hovered ? "translateX(2px)" : "translateX(0)",
        color: "var(--foreground)",
      }}
    >
      <BrandIcon weight="fill" className="size-5 shrink-0 text-primary" />
      <div className="min-w-0 flex-1">
        <div className="text-sm font-medium">{link.label}</div>
        <div className="truncate text-xs text-muted-foreground">{link.sub}</div>
      </div>
      <TrailingIcon className="size-4 shrink-0 text-muted-foreground" />
    </a>
  )
}
