export interface Project {
  title: string;
  subheading: string;
  description: string;
  thumbnail: string;
  link: string;
  images: string[];
}

export const projects: Project[] = [
  {
    title: "Purin Car",
    subheading: "MOBILE/WEB APP · FULL STACK DEVELOPMENT · FLUTTER/REACT",
    description:
      "Software Engineer Intern",
    thumbnail: "/portfolio/projects/smyze/thumbnail.png",
    link: "/project/smyze",
    images: [],
  },
  {
    title: "Purin Car",
    subheading: "MOBILE APP · JETPACK COMPOSE · FULL STACK DEVELOPMENT",
    description:
      "A reliable assistant for your vehicle’s health and longevity",
    thumbnail: "/portfolio/projects/purin_car/thumbnail.png",
    link: "/project/purin-car",
    images: [],
  },
  {
    title: "Glub World",
    subheading: "WEB APP · VIDEO GAME · FULL STACK DEVELOPMENT",
    description:
      "A fish’s brave journey across the deep, a video game for my significant other",
    thumbnail: "/portfolio/projects/glub_world/thumbnail.png",
    link: "/project/glub-world",
    images: [],
  },
  {
    title: "Fabflix",
    subheading: "WEB APP · AWS · FULL STACK DEVELOPMENT",
    description:
      "Connecting you with films through an expansive cinematic catalog",
    thumbnail: "/portfolio/projects/fabflix/thumbnail.png",
    link: "/project/fabflix",
    images: [],
  },
  {
    title: "Guidance Glasses",
    subheading: "EMBEDDED SYSTEMS · COMPUTER VISION · MACHINE LEARNING",
    description:
      "Helping the visually impaired make the world feel a little more navigatable",
    thumbnail: "/portfolio/projects/guidance_glasses/thumbnail.png",
    link: "/project/guidance-glasses",
    images: [],
  },
];