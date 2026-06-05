// Maps a skill name to its Simple Icons CDN slug (and an optional color
// override for brands whose default color is too dark to read on the dark
// theme). Skills without an entry (e.g. Java, SQL, AI/ML concepts) render as
// text-only badges. Logos load from https://cdn.simpleicons.org/<slug>[/<color>].

interface IconSpec {
  slug: string
  color?: string // hex without '#'; used when the brand color is near-black
}

const NEUTRAL = "a1a1aa" // zinc-400, readable on both light and dark

const skillIcons: Record<string, IconSpec> = {
  Python: { slug: "python" },
  TypeScript: { slug: "typescript" },
  JavaScript: { slug: "javascript" },
  Kotlin: { slug: "kotlin" },
  Dart: { slug: "dart" },
  Solidity: { slug: "solidity", color: NEUTRAL },
  "Next.js": { slug: "nextdotjs", color: NEUTRAL },
  React: { slug: "react" },
  Django: { slug: "django", color: "44b78b" },
  "Spring Boot": { slug: "springboot" },
  FastAPI: { slug: "fastapi" },
  Flutter: { slug: "flutter" },
  "Jetpack Compose": { slug: "jetpackcompose" },
  "Tailwind CSS": { slug: "tailwindcss" },
  PyTorch: { slug: "pytorch" },
  "Hugging Face": { slug: "huggingface" },
  OpenCV: { slug: "opencv" },
  PostgreSQL: { slug: "postgresql" },
  Supabase: { slug: "supabase" },
  Firebase: { slug: "firebase" },
  "Drizzle ORM": { slug: "drizzle" },
  Cloudinary: { slug: "cloudinary" },
  DigitalOcean: { slug: "digitalocean" },
  Git: { slug: "git" },
  GitHub: { slug: "github", color: NEUTRAL },
  Docker: { slug: "docker" },
  Vite: { slug: "vite" },
  Figma: { slug: "figma" },
  Streamlit: { slug: "streamlit" },
  "shadcn/ui": { slug: "shadcnui", color: NEUTRAL },
  Cardano: { slug: "cardano" },
  "Polkadot EVM": { slug: "polkadot" },
}

export function skillIconUrl(name: string): string | null {
  const spec = skillIcons[name]
  if (!spec) return null
  return spec.color
    ? `https://cdn.simpleicons.org/${spec.slug}/${spec.color}`
    : `https://cdn.simpleicons.org/${spec.slug}`
}
