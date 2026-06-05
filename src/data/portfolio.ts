export type Category = "web" | "mobile" | "ai-ml" | "web3" | "desktop"

export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  tags: string[]
  categories: Category[]
  dateLabel: string
  dateValue: string
  ongoing?: boolean
  image?: string
  liveUrl?: string
  sourceUrl?: string
}

export interface SkillGroup {
  label: string
  skills: string[]
}

export interface SocialLink {
  label: string
  href: string
  sub: string
  icon: "github" | "linkedin" | "email" | "whatsapp" | "resume"
}

export const siteConfig = {
  name: "John Winston Tabada",
  brand: "kazuretsu",
  tagline:
    "Computer Science student at CIT University building full-stack web, mobile, and on-chain apps — with a focus on AI/ML and computer vision.",
  bio: "I'm a Computer Science student at the Cebu Institute of Technology – University. I build across the whole stack: web platforms, native mobile apps, decentralized dApps, and AI/ML systems — from JavaFX desktop tools to fine-tuned vision models. I care about shipping software people actually use and learning the next hard thing along the way.",
  statusMessage: "Available for internships",
  resumeUrl: "/resume.pdf",
} as const

export const portraits = [
  { id: "01", caption: "Catching the sunset", src: "/peak.jpg" },
  { id: "02", caption: "On the trail", src: "/hiking.jpg" },
  { id: "03", caption: "Creek break", src: "/hiking_river.jpg" },
  { id: "04", caption: "Learning to skate", src: "/ice_skating.jpg" },
]

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "Java",
      "Kotlin",
      "Dart",
      "SQL",
      "Solidity",
    ],
  },
  {
    label: "Frameworks & Libraries",
    skills: [
      "Next.js",
      "React",
      "Django",
      "Spring Boot",
      "FastAPI",
      "Flutter",
      "Jetpack Compose",
      "JavaFX",
      "Tailwind CSS",
      "shadcn/ui",
      "Streamlit",
      "PyTorch",
      "Hugging Face",
      "OpenCV",
    ],
  },
  {
    label: "Databases & Cloud",
    skills: [
      "PostgreSQL",
      "Supabase",
      "Firebase",
      "Drizzle ORM",
      "Cloudinary",
      "DigitalOcean",
    ],
  },
  {
    label: "Developer Tools",
    skills: ["Git", "GitHub", "Docker", "Vite", "Figma", "VS Code"],
  },
  {
    label: "Web3 & Blockchain",
    skills: [
      "Hardhat",
      "wagmi",
      "RainbowKit",
      "Mesh SDK",
      "Blockfrost",
      "Cardano",
      "Polkadot EVM",
      "Smart Contracts",
    ],
  },
  {
    label: "AI / ML",
    skills: [
      "Vision-Language Models",
      "LoRA Fine-Tuning",
      "RAG",
      "Computer Vision (YOLO, EfficientNet)",
    ],
  },
]

// Authored newest-first; rendered via a stable sort on dateValue (desc).
export const projects: Project[] = [
  {
    id: "agarthavision",
    title: "AgarthaVision",
    tagline: "AI detection of soil-transmitted helminth eggs",
    description:
      "A Kotlin diagnostic surveillance system that helps medical technologists detect soil-transmitted helminth eggs through continuous microscope slide capture, real-time AI inference, human-in-the-loop verification, and cloud-synced session reporting.",
    tags: ["Kotlin", "Jetpack Compose", "CameraX", "FastAPI", "YOLOv26"],
    categories: ["mobile", "ai-ml"],
    dateLabel: "Ongoing",
    dateValue: "9999-99",
    ongoing: true,
  },
  {
    id: "propertymanager",
    title: "PropertyManager",
    tagline: "Multi-tenant property management dashboard",
    description:
      "A multi-tenant property management platform where real estate managers organize properties, upload and view documents with secure cloud storage, track units, and monitor portfolio stats through an interactive dashboard.",
    tags: ["Next.js", "PostgreSQL", "Drizzle ORM", "Better Auth", "shadcn/ui"],
    categories: ["web"],
    dateLabel: "Ongoing",
    dateValue: "9999-98",
    ongoing: true,
  },
  {
    id: "asta",
    title: "ASTA",
    tagline: "AI seasonal color & skin-tone analysis",
    description:
      "A skin tone analysis tool that uses a fine-tuned Vision-Language Model to classify seasonal color types from facial images and provide personalized color palettes, outfit suggestions, and makeup recommendations.",
    tags: ["Streamlit", "PyTorch", "Hugging Face", "OpenCV", "LoRA"],
    categories: ["ai-ml"],
    dateLabel: "May 2026",
    dateValue: "2026-05",
  },
  {
    id: "agarthakayak",
    title: "AgarthaKayak",
    tagline: "On-chain ledger for community credit groups",
    description:
      "A full-stack cooperative ledger that lets community credit groups transparently record and audit member activity, loan approvals, repayments, treasury movements, and reconciliations — each witnessed on the Cardano blockchain with on-chain metadata receipts.",
    tags: ["Next.js", "TypeScript", "Supabase", "Cardano", "Blockfrost", "Mesh SDK"],
    categories: ["web3"],
    dateLabel: "May 2026",
    dateValue: "2026-05",
  },
  {
    id: "agarthatech",
    title: "AgarthaTech",
    tagline: "Decentralized legal escrow for freelancers",
    description:
      "A decentralized legal escrow platform for freelancers that enforces trustless payments through multi-signature smart contracts, with role-based workflows for clients, freelancers, and legal arbiters, document hashing for agreement verification, and an on-chain CPRA compliance ledger aligned with Philippine legal standards.",
    tags: ["Next.js", "Solidity", "Polkadot EVM", "Hardhat", "wagmi"],
    categories: ["web3"],
    dateLabel: "Mar 2026",
    dateValue: "2026-03",
  },
  {
    id: "turolink",
    title: "TuroLink",
    tagline: "Offline peer-to-peer classroom platform",
    description:
      "A Flutter peer-to-peer classroom platform that enables offline learning through direct device connectivity, real-time document sharing, QR-based pairing, on-device AI assistance with Google Gemma, and PDF generation.",
    tags: ["Flutter", "Gemma", "SQFlite", "Syncfusion"],
    categories: ["mobile", "ai-ml"],
    dateLabel: "Mar 2026",
    dateValue: "2026-03",
  },
  {
    id: "dunzo",
    title: "Dunzo",
    tagline: "Team project & task management platform",
    description:
      "A full-stack project management platform where teams organize projects, assign and track tasks, manage members with role-based access, schedule calendar events, view activity timelines, and monitor progress through a centralized dashboard.",
    tags: ["Django", "React", "Vite", "Tailwind CSS", "Supabase"],
    categories: ["web"],
    dateLabel: "Dec 2025",
    dateValue: "2025-12",
  },
  {
    id: "navcit",
    title: "NavCIT",
    tagline: "Indoor campus navigation with an AI guide",
    description:
      "An indoor campus navigation system for CIT University featuring interactive floor-plan visualization, A* pathfinding with turn-by-turn directions, room search, user reviews, and an AI-powered campus guide chatbot using RAG.",
    tags: ["React", "Spring Boot", "PostgreSQL", "Tailwind CSS", "Groq AI"],
    categories: ["web", "ai-ml"],
    dateLabel: "Dec 2025",
    dateValue: "2025-12",
  },
  {
    id: "vetality",
    title: "Vetality Shop",
    tagline: "E-commerce for veterinary & agri supplies",
    description:
      "A Kotlin e-commerce app for veterinary and agricultural supplies with product browsing, cart management, wishlist, multi-step checkout, and order tracking.",
    tags: ["Kotlin", "Firebase", "Cloudinary"],
    categories: ["mobile"],
    dateLabel: "May 2025",
    dateValue: "2025-05",
  },
  {
    id: "kentlink",
    title: "KentLink",
    tagline: "PPPoE account & connection management",
    description:
      "A JavaFX desktop PPPoE management system with MikroTik integration that lets administrators manage PPPoE user accounts, monitor connections, and assign IP addresses over a shared Ethernet network.",
    tags: ["JavaFX", "MikroTik", "Networking"],
    categories: ["desktop"],
    dateLabel: "May 2025",
    dateValue: "2025-05",
  },
  {
    id: "csvparser",
    title: "CSVParser",
    tagline: "CSV voucher codes → formatted multi-card PDFs",
    description:
      "A JavaFX desktop application that reads voucher codes from CSV files and combines them with customizable parameters to produce formatted, multi-card PDF documents.",
    tags: ["JavaFX", "Java", "PDF"],
    categories: ["desktop"],
    dateLabel: "Mar 2025",
    dateValue: "2025-03",
  },
]

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    sub: "@kazuretsu",
    href: "https://github.com/kazuretsu",
    icon: "github",
  },
  {
    label: "LinkedIn",
    sub: "in/jwtabada",
    href: "https://linkedin.com/in/jwtabada",
    icon: "linkedin",
  },
  {
    label: "Email",
    sub: "JW.Tabada@proton.me",
    href: "mailto:JW.Tabada@proton.me",
    icon: "email",
  },
  {
    label: "WhatsApp",
    sub: "+63 995 962 0840",
    href: "https://wa.me/639959620840",
    icon: "whatsapp",
  },
  {
    label: "Résumé (PDF)",
    sub: "Updated June 2026",
    href: "/resume.pdf",
    icon: "resume",
  },
]

export const navLinks = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
] as const
