/**
 * @file constants/portfolio.ts
 * @description All static portfolio data — navigation links, projects, experience, skills, and social links.
 * Edit this file to personalise the portfolio without touching component logic.
 *
 * Design: Dark Craft / Obsidian Studio
 */

import type {
  NavLink,
  Project,
  ExperienceEntry,
  Skill,
  SocialLink,
  BeforeAfterShowcase,
} from "@/types";


// ─────────────────────────────────────────────
// Navigation
// ─────────────────────────────────────────────

export const NAV_LINKS: NavLink[] = [
  { label: "Home",       href: "home",       ariaLabel: "Go to Home section" },
  { label: "About",      href: "about",      ariaLabel: "Go to About section" },
  { label: "Projects",   href: "projects",   ariaLabel: "Go to Projects section" },
  { label: "Showcase",   href: "showcase",   ariaLabel: "Go to Showcase section" },
  { label: "Experience", href: "experience", ariaLabel: "Go to Experience section" },
  { label: "Contact",    href: "contact",    ariaLabel: "Go to Contact section" },
] as const;

// ─────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────

export const HERO_DATA = {
  name: "Tayyibah",
  role: "Junior Full Stack Engineer",
  tagline: "I build interfaces that outlast trends.",
  ctaLabel: "View My Work",
  ctaHref: "projects",  
} as const;

// ─────────────────────────────────────────────
// About
// ─────────────────────────────────────────────

export const BIO =
  "I'm a driven Full-Stack Developer equipped with a robust toolkit spanning front-end design and back-end logic. Experienced in building dynamic, user-centric applications using React, JavaScript, and modern web technologies, with a proven ability to learn new frameworks and server-side tools rapidly.";

export const SKILLS: Skill[] = [
  { name: "React",         category: "Frontend" },
  { name: "HTML5",    category: "Frontend" },
  { name: "Bootstrap",    category: "Frontend" },
  { name: "TypeScript",    category: "Frontend" },
  { name: "JavaScript",    category: "Frontend" },
  { name: "Tailwind CSS",  category: "Frontend" },
  { name: "Node.js",       category: "Backend"  },
  { name: "SQL",       category: "Backend"  },
  { name: "Firebase",    category: "Backend"  },
  { name: "MongoDB",    category: "Backend"  },
  { name: "Python",         category: "Languages"   },
  { name: "Java",     category: "Languages"   },
  { name: "C#",     category: "Languages"   },
  { name: "Shell",     category: "Languages"   },
  { name: "Kotlin",     category: "Languages"   },
  { name: "ASP.net",     category: "Languages"   },
  { name: "Flutter",     category: "Languages"   },
  { name: "MATLAB",     category: "Languages"   },
  { name: "Microsoft Visual Studio",    category: "Tools"   },
  { name: "Android Studio",   category: "Tools"   },
  { name: "Oracle VM Virtual Box",    category: "Tools"   },
  { name: "Cisco Packet Tracer",      category: "Tools"   },
  { name: "Nmap",       category: "Tools"   },
  { name: "GitHub",         category: "Tools"   },
  { name: "Git",         category: "Tools"   },
  { name: "Springboot",         category: "Tools"   },
  { name: "Microsoft Word",         category: "Tools"   },
  { name: "Excel",         category: "Tools"   },
  { name: "PowerPoint",         category: "Tools"   },
  { name: "Access",         category: "Tools"   },

];

// ─────────────────────────────────────────────
// Projects (with ProjectGrid support)
// ─────────────────────────────────────────────

export const PROJECTS: Project[] = [
  {
    id:          "proj-1",
    title:       "Animal Shelter Full-Stack Web Application",
    description: "A production-grade migrated and re-engineered a Python/Dash prototype into a robust full-stack web application using Node.js, Express, and JavaScript (HTML5/CSS3), significantly improving frontend performance and dashboard interactivity. It is connected the frontend to a MongoDB instance via Mongoose, implementing schema validation to ensure absolute data integrity.",
    tags:        ["Node.js","Express", "JavaScript", "Mongoose", "MongoDB", "HTML5"],
    liveUrl:     "https://tay-snh.github.io/",
    repoUrl:     "https://github.com/Tay-snh/Tay-snh.github.io",
    featured:    true,
    category:    "fullstack",
    caseStudy: {
      challenge: "Design teams were managing components across 6 different repositories, leading to inconsistencies and duplicated code.",
      solution: "Built a centralised, versioned component library with Storybook as the single source of truth and automated visual regression testing.",
    },
  },
  {
    id:          "proj-4",
    title:       "Movier Reccomendation Website",
    description: "Engineered a full-stack web application using React, TypeScript, and Node.js that integrates multi-endpoint RESTful APIs to dynamically fetch, filter, and render extensive film datasets for personalized, real-time movie recommendations.",
    tags:        ["Node.js", "TypeScript", "React", "GitHub", "APIs"],
    liveUrl:     "https://tayyibahhq.github.io/Movie_Recs.web/",
    repoUrl:     "https://github.com/TayyibahHq/Movie_Recs.web",
    featured:    false,
    category:    "other",
  },
  {
    id:          "proj-5",
    title:       "Budgeting App",
    description: "A Kotlin-based budget tracking application featuring multi-language support, empowering users to manage finances effortlessly. Implemented features including expense tracking, income management, and budget planning for streamlined financial oversight. It aims. to optimize user experience and organizational efficiency",
    tags:        ["Kotlin", "Firebase"],
    liveUrl:     "https://youtu.be/L13ObKhm_QQ",
    repoUrl:     "https://github.com/TayyibahHq/BudgetingApp",
    featured:    false,
    category:    "other",
  },
  {
    id:          "proj-6",
    title:       "Career Services Portal",
    description: "Designed and developed an interactive, front-end web application using HTML5, CSS3, and JavaScript to deliver a responsive career hub featuring dynamic job search filters, resource libraries, and user-friendly career tracking tools..",
    tags:        ["HTML5", "CSS", "JavaScript", "Bootstrap"],
    liveUrl:     "https://tayyibahhq.github.io/CareerServicePortal/index.html",
    repoUrl:     "https://github.com/TayyibahHq/CareerServicePortal",
    featured:    false,
    category:    "frontend",
  },
   /* {
    id:          "proj-2",
    title:       "Galaxy Bakery E-commerce Website",
    description: "Created a multi-page ASP.NET web app in C# and HTML for product browsing, detailed viewing, user sign-up/login, and cart functionality. Developed foundational web development skills, mastering ASP.NET framework and C# programming.",
    tags:        ["ASP.Net", "HTML5", "CSS", "JavaScript"],
    liveUrl:     "https://example.com",
    repoUrl:     "https://github.com",
    featured:    true,
    category:    "fullstack",
    caseStudy: {
      challenge: "Implementing real-time collaboration at scale with concurrent edits from 50+ users without conflicts.",
      solution: "Implemented operational-transform conflict resolution on the server and optimised canvas rendering with requestAnimationFrame.",
    },
  },*/
  {
    id:          "proj-3",
    title:       "Sky Cinema Front-End Interface",
    description: "An interactive, front-end movie ticketing site using HTML5, CSS3, and JavaScript, featuring a custom seat selection interface, dynamic real-time price calculation, and responsive login/signup modal forms.",
    tags:        ["HTML5", "CSS", "JavaScript", "jQuery", "Git"],
    liveUrl:     "https://tayyibahhq.github.io/Sky-Cinema/",
    repoUrl:     "https://github.com/TayyibahHq/Sky-Cinema",
    featured:    false,
    category:    "frontend",
  },
];

// ─────────────────────────────────────────────
// Showcase (Before/After Comparisons)
// ─────────────────────────────────────────────

export const SHOWCASES: BeforeAfterShowcase[] = [
  {
    id:           "showcase-1",
    title:        "Client Childcare Website Redesign",
    description:  "Improved conversion rate by 35% through better CTA placement and visual hierarchy.",
    beforeVideo:  "https://res.cloudinary.com/serlatpy/video/upload/v1789989025/old_VV_website_ptxfje.mp4",
    afterVideo:   "https://res.cloudinary.com/serlatpy/video/upload/v1789989664/new_VV_website_ximr1k.mp4",
    beforeAlt:    "Old homepage design",
    afterAlt:     "New homepage design",
    beforeLabel:  "Before",
    afterLabel:   "After",
    aspectRatio:  "16 / 9",
  },
  {
    id:           "showcase-2",
    title:        "Client Non-Profit Website Redesign",
    description:  "Reduced cognitive load with improved data visualization and streamlined layout.",
    beforeVideo:  "https://res.cloudinary.com/serlatpy/video/upload/v1789989033/old_VR_website_xk7eti.mp4",
    afterVideo:   "https://res.cloudinary.com/serlatpy/video/upload/v1789989886/new_VR_website_jrb9qw.mp4",
    beforeAlt:    "Old dashboard",
    afterAlt:     "New dashboard",
    beforeLabel:  "Legacy",
    afterLabel:   "Modern",
    aspectRatio:  "16 / 9",
  },
];

// ─────────────────────────────────────────────
// Experience
// ─────────────────────────────────────────────

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id:           "exp-1",
    company:      "Village Rising",
    role:         "Software Development Intern",
    startDate:    "2026-01",
    endDate:      "Present",
    highlights: [
      "	Executed comprehensive code refactoring, proactive debugging, and website maintenance, reducing load times by 30%, enhancing cross-browser compatibility, and ensuring robust system stability.",
      "	Conducted rigorous security audits, proactively identified system vulnerabilities, and implemented critical patches to safeguard user data, reducing vulnerabilities by 50%.",
      "	Facilitated cross-functional alignment meetings to streamline development workflows, while mentoring a junior engineer on clean code structure and industry best practices to accelerate team growth.",
    ],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GitHub"],
  },
  {
    id:           "exp-2",
    company:      "Village Values",
    role:         "Front-End Engineer II",
    startDate:    "2025-10",
    endDate:      "Present",
    highlights: [
      "Translated high-fidelity Figma/Adobe XD prototypes provided by the UX/UI design team into pixel-perfect, semantic React, Typescript, and component-based frontend code.",
      "Implemented fluid grid layouts and media queries to ensure seamless responsiveness across mobile, tablet, and desktop platforms.",
      "Automated key business workflows by writing custom scripts, i.e. an automated email system, to increase operational efficiency and reduce manual tasks.",
    ],
    technologies: ["React", "TypeScript", "Next.js", "GitHub"],
  },
  {
    id:           "exp-3",
    company:      "SyncN",
    role:         "Full Stack Engineering Intern",
    startDate:    "2025-08",
    endDate:      "2025-09",
    highlights: [
      "Addressed performance bottlenecks in application interfaces by spearheading development in Python and Flutter Flow.",
      "Encountered inefficient API integrations and infrastructure limitations; orchestrated the implementation of enhanced infrastructure optimization plans, leading to a 50% boost in application responsiveness and stability.",
      "Identified recurring code errors causing user disruptions; implemented rigorous debugging and testing protocols that lead to a 25% improvement in operational efficiency.",
    ],
    technologies: ["FlutterFlow", "Python", "Firebase", "API"],
  },
   {
    id:           "exp-4",
    company:      "PMU",
    role:         "Web Development Intern",
    startDate:    "2024-06",
    endDate:      "2024-09",
    highlights: [
      "Tackled the challenge of creating a responsive company website by designing and coding with HTML5, CSS, and Bootstrap, resulting in a 30% increase in user engagement",
      "Recognized the challenge of rapid technological advancements in web development, actively pursuing online courses and workshops, enhancing proficiency in the latest industry tools and thereby reducing project completion time by 20%",
      "Overcame communication barriers with clients by implementing regular feedback sessions and utilizing collaborative tools, ultimately increasing client satisfaction",
    ],
    technologies: ["HTML5", "CSS", "JavaScript", "Bootstrap"],
  },
];

// ─────────────────────────────────────────────
// Contact / Social
// ─────────────────────────────────────────────

export const CONTACT_EMAIL = "Tayyibahhaq@hotmail.com";

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "github",   url: "https://github.com/TayyibahHq",   label: "GitHub"   },
  { platform: "linkedin", url: "www.linkedin.com/in/tayyibah-haq-219821242", label: "LinkedIn" },
];
