import fabflix_thumbnail from "../../public/projects/fabflix/login.png";
import glub_world_thumbnail from "../../public/projects/glub_world/login.png";
import guidance_glasses_thumbnail from "../../public/projects/guidance_glasses/guidance_glasses.png";
import purin_car_thumbnail from "../../public/projects/purin_car/purin_car_service.png";

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
    thumbnail: purin_car_thumbnail,
    link: "/project/purin-car",
    images: [],
  },
  {
    title: "Glub World",
    description:
      "Video game website using HTML, JavaScript, and CSS with AWS for my significant other.",
    thumbnail: glub_world_thumbnail,
    link: "/project/glub-world",
    images: [],
  },
  {
    title: "Fabflix",
    description:
      "Movie catalog website using Java Servlets, MySQL, HTML, JavaScript/jQuery, and CSS with AWS, Maven, and Docker.",
    thumbnail: fabflix_thumbnail,
    link: "/project/fabflix",
    images: [],
  },
  {
    title: "Guidance Glasses",
    description:
      "A pair of glasses that can assist the visually impaired to navigate urban environments by providing information about their surroundings via haptic feedback.",
    thumbnail: guidance_glasses_thumbnail,
    link: "/project/guidance-glasses",
    images: [],
  },
];
