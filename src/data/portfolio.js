// src/data/portfolio.js
// ─── EDIT ALL YOUR INFO HERE ───────────────────────────────────────────────

export const personal = {
  name: "JAI",
  fullName: "Jai Surya Kumar",
  handle: "@jai_dev",
  tagline: "I build things that work. Sometimes I break things first.",
  photo: "/src/public/0101.png", // ← drop your photo here
  email: "rajsuriya51@gmail.com",
  linkedin: "https://www.linkedin.com/in/jai1209/",
  github: "https://github.com/JAI1209",
  twitter: "https://x.com/whothefuckisjoy",
  availableFor: ["Fullstack Projects", "Freelance", "Internships", "Collabs"],
};

export const roles = [
  "Frontend Developer",
  "Creative Builder",
  "React Specialist",
  "Open Source Contributor",
  "Digital Rantikari",
];

export const about = {
  bio: `B.tech student and frontend-focused developer obsessed with building
clean, scalable, and visually engaging digital experiences. I transform
ideas into interactive products — from e-commerce platforms and real-time
apps to futuristic UI concepts and immersive interfaces. Currently
exploring full-stack development while pushing the limits of React and
modern web technologies.`,
  stats: [
    { value: 10, suffix: "+", label: "Projects Delivered" },
    { value: 5, suffix: "+", label: "Happy Clients" },
    { value: 2, suffix: "+", label: "Years Experience" },
    { value: 15, suffix: "+", label: "Technologies Mastered" },
  ],
  available: true,
};

export const stack = [
  { name: "HTML5", group: "Frontend" },
  { name: "CSS3", group: "Frontend" },
  { name: "JavaScript ES6+", group: "Frontend" },
  { name: "React JS", group: "Frontend" },
  { name: "Redux Toolkit", group: "Frontend" },
  { name: "Vite", group: "Frontend" },
  { name: "React Router", group: "Frontend" },
  { name: "Responsive Design", group: "Frontend" },
  { name: "Node.js", group: "Backend" },
  { name: "REST APIs", group: "Backend" },
  { name: "MongoDB", group: "Backend" },
  { name: "Git", group: "DevOps" },
  { name: "GitHub", group: "DevOps" },
  { name: "Vercel", group: "DevOps" },
  { name: "VS Code", group: "Tools" },
  { name: "Figma", group: "Tools" },
  { name: "Adobe PhotoShop", group: "Tools" },
];

export const projects = [
  {
    id: 1,
    name: "ShoppyGlobe",
    description:
      "Modern e-commerce app built with React, Redux Toolkit, dynamic routing, API integration, cart management, and optimized performance.",
    tags: ["React", "Redux", "Vite", "REST API"],
    github: "https://github.com/JAI1209/ShoppyGlobe",
    live: "#",
    featured: true,
  },
  {
    id: 2,
    name: "WeatherApp",
    description:
      "Responsive weather app with live forecast, auto-location detection, dark/light mode, and dynamic weather visuals.",
    tags: ["React", "OpenWeather API", "CSS3", "Geolocation"],
    github: "https://github.com/JAI1209/The-weather-web-app",
    live: "#",
    featured: false,
  },
  {
    id: 3,
    name: "Sync-dev",
    description:
      "Collaborative real-time coding environment designed for seamless multi-user interaction and synchronized development workflows.",
    tags: ["React", "Firebase", "WebSockets", "Node.js", "Etc."],
    github: "https://github.com/JAI1209/sync-dev",
    live: "#",
    featured: true,
  },
  {
    id: 4,
    name: "CraftLink",
    description:
      "A full-stack web platform where professionals and learners exchange skills, offer services, and collaborate. Built with MERN stack. This guide covers everything from project setup to deployment.",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "JWT Auth", "Socket.io"],
    github: "https://github.com/JAI1209/CraftLink",
    live: "#",
    featured: true,
  },
];

export const experience = [
  {
    role: "Full Stack Trainee",
    company: "Internshala",
    duration: "2026-Jan – Present (6 months)",
    freelance: false,
    description:
      "Building production-grade React applications with Redux, REST APIs, and modern tooling as part of structured full-stack training.",
  },
  {
    role: "Digital Krantikari",
    company: "Freelance",
    duration: "2019 – Present",
    freelance: true,
    description:
      "Graphic designer, Logo creator, and digital content producer with a knack for turning ideas into visual stories that resonate.",
  },
 
];

export const education = [

  {
    degree: "B.Tech Computer Science & Engineering",
    institution: "Kalinga University",
    year: "2020 – 2024",
  },
  {
    degree: "Certificate in Graphics & Animation (CGA)",
    institution: "FX School Mumbai",
    year: "2019 – 2020",
  },
  {
    degree: "Full Stack Development",
    institution: "Internshala Trainings",
    year: "2026-Jan – Present",
  },
];

export const certifications = [
  { name: "100 Days of Code: The Complete Python Pro Bootcamp", issuer: "Udemy", year: "2023", link: "/src/public/python.png" },
  { name: "The Complete 2023 Web Development Bootcamp", issuer: "Udemy", year: "2023", link: "/src/public/Bootcamp1.png" },
  { name: "Data Structures & Algorithms — Part 1", issuer: "Internshala", year: "2026", link: "/src/public/DSA1.png" },
  { name: "Data Structures & Algorithms — Part 2", issuer: "Internshala", year: "2026", link: "/src/public/DSA2.png" },
  { name: "Git & GitHub", issuer: "Internshala", year: "2026", link: "/src/public/git-github.png" },
  { name: "HTML & CSS", issuer: "Internshala", year: "2026", link: "/src/public/html&css.png" },
  { name: "JavaScript", issuer: "Internshala", year: "2026", link: "/src/public/javascript.png" },
];
export const blogs = [
  {
    id: 1,
    title: "Building modern UI experiences with React",
    date: "Jan 2026",
    excerpt:
      "Exploring responsive layouts, smooth animations, and clean component architecture to create immersive frontend experiences.",
    link: "#",
  },
  {
    id: 2,
    title: "My journey into Full Stack Development",
    date: "Jan 2026",
    excerpt:
      "From frontend interfaces to backend logic — documenting my learning journey through real-world projects and scalable applications.",
    link: "#",
  },
  {
    id: 3,
    title: "Creating real-world projects that improve my skills",
    date: "March 2026",
    excerpt:
      "How building e-commerce apps, weather platforms, and collaborative tools helped me grow as a developer.",
    link: "#",
  },
];
