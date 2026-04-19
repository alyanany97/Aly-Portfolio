// ============================================================
// PORTFOLIO DATA — Edit this file to update your portfolio content
// ============================================================

export const personalInfo = {
  name: "Aly Anany",
  title: "Computer Engineering Student",
  roles: [
    "AI/ML Engineer",
    "Cloud Developer",
    "Computer Vision Engineer",
    "Software Consultant",
  ],
  tagline:
    "Computer Engineering at UoG. Building in AI, cloud, and robotics since first year.",
  email: "aanany@uoguelph.ca",
  phone: "+1 226 500 6569",
  linkedinUrl: "https://linkedin.com/in/alyanany",
  linkedinDisplay: "linkedin.com/in/alyanany",
  githubUrl: "https://github.com/alyanany97",
  githubDisplay: "github.com/alyanany97",
  location: "Guelph, ON",
  resumeUrl: "/Aly_Anany_Resume_2026_April18.pdf",
};

// ─── Varsity Athletics ─────────────────────────────────────────────────────

export const varsityAthlete = {
  sport: "Squash",
  team: "University of Guelph Gryphons",
  status: "Active",
  period: "Sept 2023 – Present",
  description:
    "Competing at the varsity level for the Gryphons while keeping up with a full engineering course load.",
};

// ─── Tech Experience ───────────────────────────────────────────────────────

export const techExperiences = [
  {
    id: 1,
    company: "Extrada Tech Ltd.",
    role: "Software & Cloud Consultant",
    period: "Jan 2026 – Sept 2026",
    location: "Toronto, ON (Remote)",
    bullets: [
      "Integrated 4 CRM APIs into Fabric via PySpark ETL pipelines, automating 500K+ records for 33 brands",
      "Engineered Dataflow Gen2 pipelines across 3 lakehouses, reshaping 192-column field service datasets for Power BI",
      "Integrated Azure AI Foundry with vector RAG, content guardrails, and safety evaluations across 6 document formats; deployed a production AI legal assistant to Azure Web Apps via GitHub Actions, cutting legal research time by 60%",
      "Designed a Copilot Studio agent on Teams to auto-generate 9-section structured client reports via Power Automate, cutting report generation from 3 hours to under 15 minutes per client visit",
      "Built an Azure Data Factory pipeline transforming 42K+ rows across 5 stages with automated SFTP export",
    ],
    tags: ["Azure", "PySpark", "Power BI", "AI Foundry", "Copilot Studio", "Power Automate"],
    subRoles: undefined,
  },
  {
    id: 2,
    company: "Robotics Institute",
    role: "Simulation & Computer Vision Engineer",
    period: "May 2025 – Sept 2025",
    location: "Guelph, ON",
    bullets: [
      "Built dual-camera RealSense + OpenCV vision system achieving <1cm 3D localization across 2 sensors, enabling precise robot arm targeting for autonomous strawberry pick-and-place",
      "Engineered real-to-sim pipeline with Hough circle detection for RGB/depth-to-MuJoCo STL conversion, achieving 35% faster scene processing and 20% improvement in pick-and-place planning accuracy",
    ],
    tags: ["OpenCV", "Intel RealSense", "MuJoCo", "Python", "3D Vision"],
    subRoles: undefined,
  },
  {
    id: 3,
    company: "University of Guelph",
    role: "AI/ML Research Assistant",
    period: "Sept 2024 – May 2025",
    location: "Guelph, ON",
    bullets: [
      "Optimized YOLOv9 via YOLO Tune, increasing strawberry detection IoU by 12% and cutting labeling time by 200%",
      "Authored a 40-page ML research report and lab manual, onboarding 3 researchers and building reusable pipeline docs",
    ],
    tags: ["YOLOv9", "PyTorch", "Computer Vision", "CUDA"],
    subRoles: undefined,
  },
  {
    id: 4,
    company: "Robotics Institute",
    role: "Machine Learning Developer",
    period: "Apr 2024 – Sept 2024",
    location: "Guelph, ON",
    bullets: [
      "Led the full ML pipeline for a YOLOv9 harvesting robot: annotated 970 images, trained on GPU via CUDA, and hit an F1 score of 0.88",
      "Developed a 2-stage approach combining instance segmentation with HSV color analysis to classify 5 ripeness classes",
      "Deployed the model on a ROS2 robotic system with real-time inference for autonomous pick-and-place",
    ],
    tags: ["YOLOv9", "ROS2", "CUDA", "Python", "Instance Segmentation"],
    subRoles: undefined,
  },
];

// ─── Non-Tech / Extracurriculars ─────────────────────────────────────────────

export const nonTechExperiences = [
  {
    id: 1,
    company: "Muslim Student Association at University of Guelph",
    role: "Technical Director",
    period: "Sept 2024 – Apr 2026",
    location: "Guelph, ON",
    subRoles: undefined,
    bullets: [
      "Managed the MSA's digital presence across website, social media, and internal communication platforms for one of the largest clubs on campus",
      "Built and maintained infrastructure for event registration, announcements, and member outreach serving hundreds of students",
      "Worked with the exec team to simplify how the club runs online, making things easier for both organizers and members",
    ],
    tags: ["Web", "Leadership", "Community", "Tech"],
  },
  {
    id: 2,
    company: "YMCA Canada",
    role: "Member Service / Children's Care / Lifeguard",
    period: "Feb 2022 – Present",
    location: "Guelph, ON",
    subRoles: ["Member Service", "Children's Care", "Lifeguard", "Squash Instructor"],
    bullets: [
      "Taught squash lessons for all age groups through the YMCA squash program, adapting sessions to fit different skill levels and goals",
      "Worked in children's care, looking after kids across various programs and age groups in a fast-paced environment",
      "Certified lifeguard on duty at aquatic facilities, responsible for patron safety and emergency response",
      "Handled front-of-house member services including customer support, membership inquiries, and facility operations",
    ],
    tags: ["Coaching", "Lifeguarding", "Customer Service", "Emergency Management"],
  },
  {
    id: 3,
    company: "Hope House",
    role: "Receptionist & Volunteer",
    period: "May 2021 – Jun 2023",
    location: "Guelph, ON",
    subRoles: undefined,
    bullets: [
      "Worked as a receptionist at Hope House, supporting community members through the food bank, clothing market, and food delivery program",
      "Served as a consistent point of contact for visitors and assisted staff with day-to-day operations over 2+ years",
    ],
    tags: ["Community Service", "Volunteering", "Reception"],
  },
  {
    id: 4,
    company: "Guelph Soccer",
    role: "Soccer Referee",
    period: "May 2019 – Jan 2020",
    location: "Guelph, ON",
    subRoles: undefined,
    bullets: [
      "Officiated soccer matches across age groups and skill levels, enforcing rules and managing player conduct on the field",
    ],
    tags: ["Sports", "Leadership"],
  },
  {
    id: 5,
    company: "McDonald's",
    role: "Crew Member",
    period: "Feb 2020 – Dec 2021",
    location: "Guelph, ON",
    subRoles: undefined,
    bullets: [
      "Worked across kitchen, counter, and drive-through during high-volume shifts, staying focused and keeping things moving under pressure",
    ],
    tags: ["Customer Service", "Teamwork"],
  },
];

// ─── Projects ───────────────────────────────────────────────────────────────

export const featuredProjects = [
  {
    id: 1,
    name: "ProxyCoach AI",
    subtitle: "Live Production AI Fitness Coach",
    stat: "50+ Active Users",
    description:
      "Multi-tenant AI fitness coaching platform for YMCA trainers. Each trainer gets their own RAG knowledge base scoped to their clients, with full SSO and audit logging.",
    bullets: [
      "Architected a multi-tenant Next.js platform gating 10+ YMCA trainers behind @ytr.ymca.ca Entra ID SSO, onboarding 50+ clients via PT-issued Microsoft Graph B2B invitations",
      "Cut unsafe coaching responses to 0 by enforcing a 38-term guardrail across 3 RAG agents on Azure AI Foundry, with every blocked query logged to a Neon Postgres audit table",
      "Automated trainer document ingestion in under 30s by chaining Blob Storage uploads to an Azure Function that extracts PDF, Word, Excel, and CSV content into isolated AI Search indexes",
    ],
    tags: ["Next.js", "Azure AI Foundry", "Entra ID", "RAG", "Neon Postgres", "TypeScript"],
    liveUrl: "https://proxycoachai.vercel.app",
    githubUrl: "https://github.com/alyanany97",
    isLive: true,
  },
  {
    id: 2,
    name: "ClientOps MCP",
    subtitle: "MCP Server on Azure Functions",
    stat: "Onboarding: 2hr to 2min",
    description:
      "An MCP server on Azure Functions that provisions a full client environment across Linear, SharePoint, and TrackingTime in a single prompt. Live on Claude.ai as an MCP connector.",
    bullets: [
      "Built an MCP server via Azure Functions mcpToolTrigger bindings, provisioning Linear projects, SharePoint sites, and TrackingTime workspaces across 3 services in one shot",
      "Registered as a live Claude.ai MCP connector, cutting per-client onboarding from 2 hours to under 2 minutes by replacing manual multi-tool coordination with a single prompt",
      "Scripted full infrastructure deployment via Azure CLI and PowerShell, provisioning 6 Key Vault secrets, Function App bindings, and storage in a single repeatable run",
    ],
    tags: ["MCP", "Azure Functions", "Linear", "SharePoint", "PowerShell", "TypeScript"],
    liveUrl: "",
    githubUrl: "https://github.com/alyanany97",
    isLive: false,
  },
];

export const otherProjects = [
  {
    id: 3,
    name: "FlaskWAF Dashboard",
    description:
      "Flask-based Web Application Firewall with an interactive dashboard. Handles SQL injection detection, XSS prevention, path traversal protection, and rate limiting.",
    tags: ["Python", "Flask", "Security", "WAF"],
    githubUrl: "https://github.com/alyanany97/FlaskWAF-Dashboard",
  },
  {
    id: 4,
    name: "Raspberry Pi Room Security",
    description:
      "IoT security system using Raspberry Pi with a camera and motion detection. Sends real-time email alerts with image captures when motion is detected.",
    tags: ["Python", "Raspberry Pi", "IoT", "Computer Vision"],
    githubUrl: "https://github.com/alyanany97/Raspberry-pi-Room-Security-System",
  },
  {
    id: 5,
    name: "TherapAI",
    description:
      "Mental health chatbot application built in Python. Designed to provide supportive conversation and coping resources.",
    tags: ["Python", "NLP", "AI", "Chatbot"],
    githubUrl: "https://github.com/alyanany97/TherapAI",
  },
  {
    id: 6,
    name: "ArtVision AI",
    description:
      "AI-powered drawing classifier that identifies artwork styles and categories using a trained image classification model.",
    tags: ["Python", "Computer Vision", "PyTorch", "Classification"],
    githubUrl: "https://github.com/alyanany97/ArtVision-AI",
  },
  {
    id: 7,
    name: "A* Pathfinder",
    description:
      "Visual implementation of the A* pathfinding algorithm with an interactive grid where you can set start/end points and obstacles.",
    tags: ["Python", "Algorithms", "Visualization"],
    githubUrl: "https://github.com/alyanany97/A-Pathfinder",
  },
];

// ─── Skills ─────────────────────────────────────────────────────────────────

export const skillCategories = [
  {
    name: "Languages",
    icon: "Code2",
    skills: ["Python", "TypeScript", "JavaScript", "C", "C++", "Java", "SQL", "Bash"],
  },
  {
    name: "Cloud & DevOps",
    icon: "Cloud",
    skills: [
      "Azure AI Foundry",
      "Microsoft Fabric",
      "Azure Data Factory",
      "Azure Functions",
      "Azure Key Vault",
      "Azure AI Search",
      "Blob Storage",
      "Entra ID",
      "Event Grid",
      "Copilot Studio",
      "Power Automate",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Linux",
    ],
  },
  {
    name: "Data & Databases",
    icon: "Database",
    skills: ["PostgreSQL", "MySQL", "Delta Lake", "PySpark", "Power BI", "Prisma"],
  },
  {
    name: "Frameworks & Tools",
    icon: "Wrench",
    skills: [
      "OpenCV",
      "Open3D",
      "ROS2",
      "MuJoCo",
      "PyTorch",
      "TensorFlow",
      "NumPy",
      "Pandas",
      "scikit-learn",
      "MCP",
      "Git",
      "Next.js",
    ],
  },
];

// ─── Education ───────────────────────────────────────────────────────────────

export const education = {
  institution: "University of Guelph",
  degree: "B.Eng. in Computer Engineering",
  gpa: "3.8 / 4.0",
  period: "Sept 2023 – May 2028 (Expected)",
  location: "Guelph, ON",
  courses: [
    "Data Structures",
    "Operating Systems",
    "Computer Networks",
    "Machine Learning",
    "Digital Systems",
    "Algorithms",
  ],
  awards: [
    {
      name: "University of Guelph Presidents' Scholar",
      value: "$42,500",
      note: "1 of 6 recipients university-wide",
      issuer: "Dr. Charlotte Yates, University of Guelph",
      date: "May 2023",
      description:
        "The University's most prestigious award, recognizing academic excellence, leadership, and community service. Has supported my Computer Engineering studies and enabled me to engage in impactful research and extracurricular activities.",
    },
    {
      name: "Ontario Professional Engineers Foundation Scholarship",
      value: "$1,500",
      note: "Leadership & professional development",
      issuer: "Ontario Professional Engineers Foundation for Education",
      date: "Jan 2025",
      description:
        "Awarded for exceptional leadership and contributions to professional development and extracurricular initiatives within the engineering community.",
    },
    {
      name: "Kaled Salih Memorial Scholarship",
      value: "$1,000",
      note: "First ever recipient",
      issuer: "Established by classmates, friends, and family of Kaled Salih",
      date: "Oct 2024",
      description:
        "First ever recipient of this scholarship, established in memory of Kaled Salih, a passionate mechanical engineering student and beloved member of the Guelph Engineering community. Recognizes high academic performance in ENGG*1100 and significant contributions to STEM at UoG and the broader community.",
    },
  ],
};

// ─── Hobbies & Interests ─────────────────────────────────────────────────────

export const hobbies = [
  { emoji: "🎾", label: "Varsity Squash" },
  { emoji: "🤖", label: "Robotics & Hardware" },
  { emoji: "🧠", label: "ML Side Projects" },
  { emoji: "🏋️", label: "Gym & Fitness" },
  { emoji: "🥾", label: "Hiking" },
  { emoji: "📚", label: "Reading" },
  { emoji: "🎮", label: "Gaming" },
  { emoji: "☕", label: "Coffee & Deep Work" },
];
