export type ProjectCategory = "web" | "javascript" | "design";

export type Project = {
  id: string;
  dictKey: string;
  image: string;
  link: string;
  tags: string[];
  category: ProjectCategory;
};

export const projects: Project[] = [
  {
    id: "figma-camping",
    dictKey: "figmaCamping",
    image: "/projects/figma-camping-site.png",
    link: "https://www.figma.com/design/bhPzUF0TKI5vdS3p0jmiB3/Luna-et-Andrew?node-id=0-1",
    tags: ["Figma", "Design"],
    category: "design",
  },
  {
    id: "figma-sport",
    dictKey: "figmaSport",
    image: "/projects/figma-sport-site.png",
    link: "https://www.figma.com/design/cFGLi8szeC79qeYMi51HUC/tous_niveaux_sportifs?node-id=0-1",
    tags: ["Figma", "Design"],
    category: "design",
  },
  {
    id: "loruki",
    dictKey: "loruki",
    image: "/projects/loruki-website.png",
    link: "https://andrewsmithiesdev.github.io/loruki-websie-andrew/",
    tags: ["HTML", "CSS", "Responsive"],
    category: "web",
  },
  {
    id: "saas",
    dictKey: "saas",
    image: "/projects/saas-website.png",
    link: "https://andrewsmithiesdev.github.io/saas-andrew/",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "javascript",
  },
  {
    id: "monogram",
    dictKey: "monogram",
    image: "/projects/monogram-website.png",
    link: "https://andrewsmithiesdev.github.io/monogram/",
    tags: ["HTML", "CSS"],
    category: "web",
  },
  {
    id: "bento",
    dictKey: "bento",
    image: "/projects/bento-grid.png",
    link: "https://andrewsmithiesdev.github.io/bento-grid-main-andy/",
    tags: ["HTML", "CSS", "Grid", "Frontend Mentor"],
    category: "web",
  },
  {
    id: "fourCard",
    dictKey: "fourCard",
    image: "/projects/four-card-complete.png",
    link: "https://andrewsmithiesdev.github.io/four-card-feature-section-master/",
    tags: ["HTML", "CSS", "Grid", "Frontend Mentor"],
    category: "web",
  },
  {
    id: "coffee",
    dictKey: "coffee",
    image: "/projects/coffee-website.png",
    link: "https://andrewsmithiesdev.github.io/Gorilla-Coffee/",
    tags: ["HTML", "CSS", "Bootstrap"],
    category: "web",
  },
  {
    id: "greentech",
    dictKey: "greentech",
    image: "/projects/greentech-website.png",
    link: "https://andrewsmithiesdev.github.io/greentech/",
    tags: ["HTML", "CSS", "Bootstrap", "SCSS"],
    category: "web",
  },
  {
    id: "accordion",
    dictKey: "accordion",
    image: "/projects/accordion-project.png",
    link: "https://andrewsmithiesdev.github.io/faq-accordion-main/",
    tags: ["HTML", "CSS", "JavaScript", "Frontend Mentor"],
    category: "javascript",
  },
  {
    id: "mortgage",
    dictKey: "mortgage",
    image: "/projects/mortgage-calculator.png",
    link: "https://andrewsmithiesdev.github.io/mortgage-repayment-calculator-main/",
    tags: ["HTML", "CSS", "SCSS", "JavaScript", "Frontend Mentor"],
    category: "javascript",
  },
  {
    id: "dice",
    dictKey: "dice",
    image: "/projects/jeu_de_des.png",
    link: "https://andrewsmithiesdev.github.io/jeu_de_d-s/",
    tags: ["HTML", "CSS", "SCSS", "JavaScript"],
    category: "javascript",
  },
];
