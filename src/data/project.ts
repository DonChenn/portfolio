export interface Project {
  title: string;
  subheading: string;
  description: string;
  thumbnail: string;
  link: string;
  images: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "SMYZE",
    subheading: "MOBILE/WEB APP · FULL STACK DEVELOPMENT · FLUTTER/REACT",
    description:
      "Full Stack Software Engineer Intern",
    thumbnail: "/portfolio/projects/smyze/thumbnail.png",
    link: "/project/smyze",
    images: [],
    featured: true
  },
  {
    title: "Purin Car",
    subheading: "MOBILE APP · JETPACK COMPOSE · FULL STACK DEVELOPMENT",
    description:
      "A reliable assistant for your vehicle’s health and longevity",
    thumbnail: "/portfolio/projects/purin_car/thumbnail.png",
    link: "/project/purin-car",
    images: [],
    featured: true
  },
  {
    title: "Glub World",
    subheading: "WEB APP · VIDEO GAME · FULL STACK DEVELOPMENT",
    description:
      "A fish’s brave journey across the deep, a video game for my significant other",
    thumbnail: "/portfolio/projects/glub_world/thumbnail.png",
    link: "/project/glub-world",
    images: [],
    featured: false
  },
  {
    title: "Fabflix",
    subheading: "WEB APP · AWS · FULL STACK DEVELOPMENT",
    description:
      "Connecting you with films through an expansive cinematic catalog",
    thumbnail: "/portfolio/projects/fabflix/thumbnail.png",
    link: "/project/fabflix",
    images: [],
    featured: true
  },
  {
    title: "Guidance Glasses",
    subheading: "EMBEDDED SYSTEMS · COMPUTER VISION · MACHINE LEARNING",
    description:
      "Helping the visually impaired make the world feel a little more navigatable",
    thumbnail: "/portfolio/projects/guidance_glasses/thumbnail.png",
    link: "/project/guidance-glasses",
    images: [],
    featured: true
  },
];