export interface Project {
  title: string;
  subheading: string;
  slogan: string;
  description: string;
  thumbnail: string;
  link: string;
  images: string[];
  featured: boolean;
  role?: string;
  techstack?: string[];
  links?: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    title: "SMYZE",
    subheading: "MOBILE/WEB APP · FULL STACK DEVELOPMENT · FLUTTER/REACT",
    slogan: "Full Stack Software Engineer Intern",
    description: "",
    thumbnail: "/portfolio/projects/smyze/thumbnail.png",
    link: "/project/smyze",
    images: [],
    featured: true,
    role: "Full Stack Software Engineer Intern",
    techstack: [
      "Flutter",
      "React",
      "MedusaJS",
      "Typescript",
      "Vue",
      "Dart",
      "Alibaba Cloud",
    ],
    links: [],
  },
  {
    title: "Purin Car",
    subheading: "ANDROID APP · JETPACK COMPOSE · FULL STACK DEVELOPMENT",
    slogan: "A reliable assistant for your vehicle’s health and longevity",
    description: "",
    thumbnail: "/portfolio/projects/purin_car/thumbnail.png",
    link: "/project/purin-car",
    images: [
      "/portfolio/projects/purin_car/purin_car_records.png",
      "/portfolio/projects/purin_car/purin_car_selection.png",
      "/portfolio/projects/purin_car/purin_car_service.png",
    ],
    featured: true,
    role: "Full Stack Developer",
    techstack: ["Kotlin", "Jetpack Compose", "Room Database", "SmartCar API"],
    links: [{label: "GitHub", url: "https://github.com/DonChenn/PurinCar"}],
  },
  {
    title: "Glub World",
    subheading: "WEB APP · VIDEO GAME · FULL STACK DEVELOPMENT",
    slogan:
      "A fish’s brave journey across the deep, a video game for my significant other",
    description: "",
    thumbnail: "/portfolio/projects/glub_world/thumbnail.png",
    link: "/project/glub-world",
    images: [
      "/portfolio/projects/glub_world/ending.png",
      "/portfolio/projects/glub_world/hot_seat.png",
      "/portfolio/projects/glub_world/login.png",
    ],
    featured: false,
    role: "Game Developer",
    techstack: ["HTML", "JavaScript", "CSS"],
    links: [{label: "GitHub", url: "https://github.com/DonChenn/Glub_World"}],
  },
  {
    title: "Fabflix",
    subheading: "WEB APP · AWS · FULL STACK DEVELOPMENT",
    slogan: "Connecting you with films through an expansive cinematic catalog",
    description: "",
    thumbnail: "/portfolio/projects/fabflix/thumbnail.png",
    link: "/project/fabflix",
    images: [
      "/portfolio/projects/fabflix/admin.png",
      "/portfolio/projects/fabflix/catalog.png",
      "/portfolio/projects/fabflix/login.png",
    ],
    featured: true,
    role: "Full Stack Developer",
    techstack: ["Java", "JavaScript", "AWS", "HTML", "CSS"],
    links: [{label: "GitHub", url: "https://github.com/DonChenn/Fabflix"}],
  },
  {
    title: "Guidance Glasses",
    subheading: "EMBEDDED SYSTEMS · COMPUTER VISION · MACHINE LEARNING",
    slogan:
      "Helping the visually impaired make the world feel a little more navigatable",
    description: "",
    thumbnail: "/portfolio/projects/guidance_glasses/thumbnail.png",
    link: "/project/guidance-glasses",
    images: [
      "/portfolio/projects/guidance_glasses/dataset.png",
      "/portfolio/projects/guidance_glasses/guidance_glasses.png",
      "/portfolio/projects/guidance_glasses/guidanceglasses_ultrasonic.png",
    ],
    featured: true,
    role: "Embedded Systems Engineer",
    techstack: ["Python", "YOLOv5", "Nvidia Jetson Nano", "C"],
    links: [{ label: "GitHub", url: "https://github.com/franciscotimoh/gb-glasses" }],
  },
];
