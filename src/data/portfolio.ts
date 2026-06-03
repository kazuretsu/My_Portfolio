export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  category: "web-apps" | "tools" | "experiments"
  featured: boolean
  liveUrl?: string
  sourceUrl?: string
}

export interface SocialLink {
  label: string
  href: string
  sub: string
  icon: "arrow-up-right" | "arrow-right" | "arrow-down"
}

export const siteConfig = {
  name: "Your Name",
  tagline:
    "CS student building full-stack web apps and tinkering with compilers. I care about fast UIs, clean APIs, and code other people can read.",
  bio: "I'm a final-year computer science student. I taught myself to code in high school, broke a lot of things, and now I build production-grade React apps and CLI tools. When I'm not coding I'm bouldering, reading sci-fi, or losing at chess online.",
  statusMessage: "Available for internships",
  resumeUrl: "/resume.pdf",
} as const

export const portraits = [
  { id: "01", caption: "At work", src: null as string | null },
  { id: "02", caption: "At the crag", src: null as string | null },
  { id: "03", caption: "Coffee setup", src: null as string | null },
  { id: "04", caption: "Side quest", src: null as string | null },
]

export const skills: string[] = [
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "PostgreSQL",
  "Node.js",
  "Tailwind",
  "Linux",
]

export const projects: Project[] = [
  {
    id: "algoviz",
    title: "Algoviz",
    featured: true,
    category: "web-apps",
    description:
      "Interactive algorithm visualizer for sorting & graph traversal. 60fps canvas, hand-rolled scrubber, dark/light themes.",
    tags: ["TypeScript", "Canvas", "Vite"],
  },
  {
    id: "mealpath",
    title: "Mealpath",
    category: "web-apps",
    featured: false,
    description:
      "Meal planner that turns the contents of your fridge into a week of recipes. Server-actioned RAG on a small fine-tuned model.",
    tags: ["Next.js", "Postgres", "OpenAI"],
  },
  {
    id: "stacktrace",
    title: "Stacktrace",
    category: "web-apps",
    featured: false,
    description:
      "Minimal dev journal with markdown, code highlighting, and full-text tag search. Runs on a $5 VPS.",
    tags: ["React", "SQLite", "Fly.io"],
  },
  {
    id: "tinyc",
    title: "tinyc",
    category: "tools",
    featured: false,
    description:
      "Toy C → WASM compiler. Lexer, parser, three-address IR, register allocator.",
    tags: ["Rust", "WASM"],
  },
  {
    id: "dotfiles",
    title: "dotfiles",
    category: "tools",
    featured: false,
    description:
      "My zsh + nvim + tmux setup, idempotent across macOS and Linux.",
    tags: ["Bash", "Lua"],
  },
  {
    id: "pomotrack",
    title: "Pomotrack",
    category: "experiments",
    featured: false,
    description:
      "Pomodoro timer with a weekly heatmap. Installs as a PWA on mobile.",
    tags: ["Svelte", "PWA"],
  },
]

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    sub: "@yourname",
    href: "https://github.com/yourname",
    icon: "arrow-up-right",
  },
  {
    label: "LinkedIn",
    sub: "in/yourname",
    href: "https://linkedin.com/in/yourname",
    icon: "arrow-up-right",
  },
  {
    label: "Email",
    sub: "hi@yourname.dev",
    href: "mailto:hi@yourname.dev",
    icon: "arrow-right",
  },
  {
    label: "Résumé (PDF)",
    sub: "1 page, May 2026",
    href: "/resume.pdf",
    icon: "arrow-down",
  },
]

export const navLinks = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
] as const
