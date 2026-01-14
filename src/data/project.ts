export interface Project {
  title: string;
  description: string;
  thumbnail: string;
  link: string;
  images: string[];
}

export const projects: Project[] = [
  {
    title: "Purin Car",
    description:
      "Android application using Kotlin, Room Database and Jetpack Compose Android app for tracking vehicle maintenance intervals with a reactive UI.",
    thumbnail: "/portfolio/projects/purin_car/thumbnail.png",
    link: "/project/purin-car",
    images: [],
  },
  {
    title: "Glub World",
    description:
      "Video game website using HTML, JavaScript, and CSS with AWS for my significant other.",
    thumbnail: "/portfolio/projects/glub_world/thumbnail.png",
    link: "/project/glub-world",
    images: [],
  },
  {
    title: "Fabflix",
    description:
      "Movie catalog website using Java Servlets, MySQL, HTML, JavaScript/jQuery, and CSS with AWS, Maven, and Docker.",
    thumbnail: "/portfolio/projects/fabflix/thumbnail.png",
    link: "/project/fabflix",
    images: [],
  },
  {
    title: "Guidance Glasses",
    description:
      "A pair of glasses that can assist the visually impaired to navigate urban environments by providing information about their surroundings via haptic feedback.",
    thumbnail: "/portfolio/projects/guidance_glasses/thumbnail.png",
    link: "/project/guidance-glasses",
    images: [],
  },
];