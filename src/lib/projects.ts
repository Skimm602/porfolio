export type GalleryImage = {
  src: string;
  alt: string;
  /** layout hint for the masonry grid */
  span?: "wide" | "tall" | "normal";
};

export type ProjectSection = {
  heading: string;
  body: string;
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  type: string;
  area: string;
  location: string;
  year: string;
  software: string;
  hero: string;
  cover: string;
  summary: string;
  description: string[];
  sections: ProjectSection[];
  gallery: GalleryImage[];
  drawings: GalleryImage[];
  /** Google Drive file ID for the project film (live-embedded, not hosted) */
  video?: string;
};

export const projects: Project[] = [
  {
    slug: "government-centre",
    index: "01",
    title: "Lamdag",
    subtitle: "Ormoc City Government Centre",
    type: "Government Centre",
    area: "48.85 ha",
    location: "Brgy. Sumangga, Ormoc City",
    year: "2025–2026",
    software: "Revit → D5 Render → Photoshop",
    hero: "/images/government-centre/hero.jpg",
    cover: "/images/government-centre/hero.jpg",
    summary:
      "A future-ready civic district consolidating Ormoc City's dispersed public offices into one accessible, resilient government complex.",
    description: [
      "Lamdag is an undergraduate architectural thesis that proposes a future-ready government center for Ormoc City through the relocation and consolidation of key public offices into a unified civic district in Barangay Sumangga. The project responds to existing challenges of dispersed government facilities, urban congestion, limited accessibility, and growing administrative demands.",
      "Guided by principles of accessibility, sustainability, resilience, and cultural identity, the masterplan integrates institutional spaces, public open areas, circulation networks, and provisions for future expansion within a centralized government complex. Through site analysis, stakeholder engagement, planning standards, and data-driven spatial strategies, the proposal envisions a government center that improves service delivery while strengthening civic identity and supporting long-term urban growth for Ormoc City.",
    ],
    sections: [
      {
        heading: "Masterplan Process",
        body: "The 48.85-hectare plan was shaped through a step-by-step process — from site analysis and zoning to green-space integration and circulation planning — resulting in a cohesive masterplan that promotes accessibility, sustainability, efficient public service, and long-term growth.",
      },
      {
        heading: "Zoning & Road Hierarchy",
        body: "Land use is allocated across institutional, core-commercial, parks, urban-agriculture, roads, and future-expansion zones. A clear road hierarchy — from 30-meter major and diversion roads down to 8-meter service roads — organizes movement across the district. Computations follow Philippine planning and design standards, national laws, and local planning policies.",
      },
      {
        heading: "City Hall",
        body: "The civic anchor stacks departmental offices across five levels — from business permits and the civil registry at the base, up through the mayor's offices, the Sangguniang Panlungsod session hall, and a public roof deck — organizing dozens of city offices into one legible, navigable building.",
      },
    ],
    gallery: [
      { src: "/images/government-centre/render-02.jpg", alt: "Aerial perspective of the Ormoc City government complex", span: "wide" },
      { src: "/images/government-centre/render-03.jpg", alt: "Ormoc City Hall main facade perspective" },
      { src: "/images/government-centre/render-04.jpg", alt: "Government centre entrance plaza with flag court" },
      { src: "/images/government-centre/render-05.jpg", alt: "Arched colonnade facade of a civic building" },
      { src: "/images/government-centre/render-06.jpg", alt: "Landscaped public park with shade pavilion" },
      { src: "/images/government-centre/render-07.jpg", alt: "Central water feature and retention pond" },
      { src: "/images/government-centre/render-08.jpg", alt: "Tree-lined civic promenade" },
      { src: "/images/government-centre/render-01.jpg", alt: "Streetscape with cyclist along the civic district", span: "wide" },
      { src: "/images/government-centre/render-09.jpg", alt: "Community plaza and playground" },
    ],
    drawings: [
      { src: "/images/government-centre/plan-site.jpg", alt: "Site development plan of the government centre", span: "tall" },
      { src: "/images/government-centre/plan-zoning.jpg", alt: "Zoning diagram of the 48.85-hectare site", span: "tall" },
      { src: "/images/government-centre/plan-massing.jpg", alt: "Zone division and massing study" },
      { src: "/images/government-centre/plan-axon.jpg", alt: "Exploded axonometric of the City Hall floor plans", span: "tall" },
      { src: "/images/government-centre/plan-floor-lower-ground.jpg", alt: "City Hall — lower ground floor plan (scale 1:500)" },
    ],
    video: "1OlGTECsajKkjGVlg8wM_HfSIqEZ38JcN",
  },
  {
    slug: "public-library",
    index: "02",
    title: "Dahon",
    subtitle: "Cebu City Public Library",
    type: "Public Library",
    area: "3.7 ha",
    location: "Adjacent to Banilad Rd · accessible from IT Park, Cebu City",
    year: "2023",
    software: "Revit → Enscape → Lightroom",
    hero: "/images/public-library/hero.jpg",
    cover: "/images/public-library/hero.jpg",
    summary:
      "A modern public library reimagined as a vibrant hub of learning, creativity, and collaboration — its form drawn from the layered growth of a leaf.",
    description: [
      "The proposed modern public library aims to redefine the traditional concept of libraries by embracing innovation, accessibility, and community-centric design. Envisioned as more than just a repository of books, this library will be a vibrant hub of learning, creativity, and collaboration. It integrates cutting-edge technology, sustainable architecture, and diverse cultural programming to cater to the evolving needs of society.",
      "Serving as a bridge between the past and the future, the modern public library offers flexible spaces for study, co-working, and social engagement while providing access to digital resources, multimedia content, and hands-on learning experiences.",
    ],
    sections: [
      {
        heading: "Concept — Dahon",
        body: "The design begins with a simple box, symbolizing the clarity and universality of a book. Named after the Filipino word for leaf, Dahon evolves through three stacked volumes — the progressive growth of knowledge — then deforms them to express the dynamic, ever-changing nature of learning, merging into a single cohesive form: a place of growth, connection, and transformation.",
      },
      {
        heading: "Programme",
        body: "Across three levels — a 1,599 m² ground floor, a 2,242 m² second floor, and a 1,655 m² third floor — the library threads children's and teens' reading areas, adult and reference collections, multipurpose halls, lecture spaces, and a sweeping landscaped reading garden through a warm, daylit timber interior.",
      },
    ],
    gallery: [
      { src: "/images/public-library/render-09.jpg", alt: "Exterior of the Dahon public library with deep sheltering roof", span: "wide" },
      { src: "/images/public-library/render-01.jpg", alt: "Double-height reading lounge with red seating" },
      { src: "/images/public-library/render-02.jpg", alt: "Timber stack reading nook" },
      { src: "/images/public-library/render-03.jpg", alt: "Open co-working desks beside the glazed facade" },
      { src: "/images/public-library/render-04.jpg", alt: "Colorful children's reading area" },
      { src: "/images/public-library/render-05.jpg", alt: "Curved timber bookshelf gallery" },
      { src: "/images/public-library/render-06.jpg", alt: "Reading hall under the flowing wood ceiling" },
      { src: "/images/public-library/render-07.jpg", alt: "Quiet study corner with yellow armchair" },
      { src: "/images/public-library/render-08.jpg", alt: "Main circulation desk and concourse" },
    ],
    drawings: [
      { src: "/images/public-library/plan-floor-ground.jpg", alt: "Dahon — ground floor plan, 1,599 m²" },
      { src: "/images/public-library/plan-floor-second.jpg", alt: "Dahon — second floor plan, 2,242 m²" },
      { src: "/images/public-library/plan-floor-third.jpg", alt: "Dahon — third floor plan, 1,655 m²" },
      { src: "/images/public-library/plan-concept.jpg", alt: "Concept massing phases from box to final form", span: "wide" },
      { src: "/images/public-library/plan-site.jpg", alt: "Site development plan of the library" },
      { src: "/images/public-library/plan-exterior.jpg", alt: "Aerial render of the library massing", span: "wide" },
    ],
    video: "16IoMSdzBbpUD9ZPRZfzl4Ntt9aRePUDd",
  },
  {
    slug: "lao-residence",
    index: "03",
    title: "Lao Residence",
    subtitle: "Reimagined Family Home",
    type: "Residential House",
    area: "1,500 sqm",
    location: "Brgy. Luna, Ormoc City",
    year: "2026",
    software: "Revit → D5 Render → Photoshop",
    hero: "/images/lao-residence/hero.jpg",
    cover: "/images/lao-residence/hero.jpg",
    summary:
      "A contemporary tropical reinterpretation of the family home — familiar yet renewed, tuned for easier upkeep and a closer bond between house, garden, and daily life.",
    description: [
      "This project reimagines our existing family home and lot into a contemporary tropical residence that strengthens the relationship between architecture, landscape, and everyday living. Rather than completely transforming the house into something unfamiliar, the design intentionally preserves the essence and feeling of the original home — retaining the comfort, openness, and memories associated with the existing place.",
      "The proposal focuses on improving spatial programming by reorganizing and redefining spaces to better support current and future lifestyles. Underutilized areas become more purposeful living environments, while stronger indoor–outdoor connections, enhanced natural lighting and ventilation, and integrated landscape elements create a more seamless and calming residential experience.",
    ],
    sections: [
      {
        heading: "A Home That Grows With Its Family",
        body: "As my parents grow older and my siblings and I move toward our own lives, daily upkeep becomes more physically demanding. The design prioritizes ease of maintenance while preserving the qualities that make the house feel familiar and meaningful — building upon its character rather than erasing it.",
      },
      {
        heading: "Existing → Proposed",
        body: "Through improved spatial programming, underutilized and high-maintenance areas were reorganized into more purposeful, efficient spaces. The 99 m² existing footprint is rethought into a 92 m² proposed layout — fewer, better rooms, a generous master suite, and a tighter connection between indoor and outdoor living.",
      },
    ],
    gallery: [
      { src: "/images/lao-residence/render-09.jpg", alt: "Sheltered porch reading nook framed by hydrangeas", span: "tall" },
      { src: "/images/lao-residence/render-03.jpg", alt: "Living room opening to a garden courtyard" },
      { src: "/images/lao-residence/render-01.jpg", alt: "Bedroom with garden view and lush planting" },
      { src: "/images/lao-residence/render-02.jpg", alt: "Aerial view of the courtyard and reflective garden" },
      { src: "/images/lao-residence/render-04.jpg", alt: "Open kitchen with sculptural pendant lighting" },
      { src: "/images/lao-residence/render-05.jpg", alt: "Living and dining area with sliding glass walls" },
      { src: "/images/lao-residence/render-06.jpg", alt: "Kitchen island and breakfast counter" },
      { src: "/images/lao-residence/render-07.jpg", alt: "House nestled among mature trees" },
      { src: "/images/lao-residence/render-08.jpg", alt: "Garden courtyard with reflecting pool" },
    ],
    drawings: [
      { src: "/images/lao-residence/plan-existing.jpg", alt: "Existing floor plan — 99 square meters", span: "wide" },
      { src: "/images/lao-residence/plan-proposed.jpg", alt: "Proposed floor plan — 92 square meters" },
    ],
    video: "17Uze2p21BlaFZRw1LU-FWSe-3gZChBB3",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacent(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  const next = projects[(i + 1) % projects.length];
  const prev = projects[(i - 1 + projects.length) % projects.length];
  return { next, prev };
}
