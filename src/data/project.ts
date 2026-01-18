export interface Project {
  title: string;
  subheading: string;
  slogan: string;
  description: { header: string; text: string; bullets?: string[]; images?: string[] }[];
  thumbnail: string;
  link: string;
  featured: boolean;
  role?: string;
  techstack?: string[];
  links?: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    title: "SMYZE",
    subheading: "MOBILE APP · WEB APP · FULL STACK DEVELOPMENT",
    slogan: "Full Stack Software Engineer Intern",
    description: [
      {
        header: "Description",
        text: "Smyze is a fully automated robotic drink station. During my time with SMYZE, I worked as a Full Stack Developer contributing to their Medusa v2 commerce backend and WeChat/Kiosk interfaces.",
      },
      {
        header: "Backend",
        text: "I build a react website outlet management system within Medusa v2 that had custom workflows and hooks which contained all the information of each physical store with PayloadCMS across Kiosk, WeChat Mini Program, and Admin interfaces. It controlled which products, kiosks, and regions to support the store operations. I also developed a product cloning module that enabled duplicating of products with overrides for pricing, ingredients, and metadata per location while maintaining parent child data relationships.",
        images: ["/portfolio/projects/smyze/outlet.png", ]
      },
      {
        header: "Kiosk",
        text: "I developed the Flutter-based Kiosk application that dynamically loads the menu by filtering products and applying store specific overrides for pricing and availability from the Medusa backend. I also integrated a hybrid checkout option to pay with WeChat Pay through QR codes to transfer carts to WeChat.",
        images: ["/portfolio/projects/smyze/kiosk_menu.png", "/portfolio/projects/smyze/kiosk_item.png"]
      },
      {
        header: "WeChat",
        text: "I built the WeChat Program to serve as a mobile store with customer loyalty points. I implemented secure authentication linking WeChat identities to Medusa profiles and developed a complete e-commerce flow with store-specific menus and coupon redemption.",
        images: ["/portfolio/projects/smyze/wechat_menu.png", "/portfolio/projects/smyze/wechat_confirm.png"]
      },
    ],
    thumbnail: "/portfolio/projects/smyze/thumbnail.png",
    link: "/project/smyze",
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
    links: [{ label: "Company Website", url: "https://smyze.cn/" }],
  },
  {
    title: "Purin Car",
    subheading: "ANDROID APP · FULL STACK DEVELOPMENT",
    slogan: "A reliable assistant for your vehicle’s health and longevity",
    description: [
      {
        header: "Description",
        text: "Purin Car is an Android Jetpack Compose application built to extend the lifespan of my car (2025 Toyota Camry) to hopefully 300,000+ miles. It tracks maintenance schedules based on mileage or time intervals whichever comes first ensuring NO service is overlooked.",
      },
    ],
    thumbnail: "/portfolio/projects/purin_car/thumbnail.png",
    link: "/project/purin-car",
    featured: true,
    role: "Full Stack Developer",
    techstack: ["Kotlin", "Jetpack Compose", "Room Database", "SmartCar API"],
    links: [{ label: "GitHub", url: "https://github.com/DonChenn/PurinCar" }],
  },
  {
    title: "Glub World",
    subheading: "WEB APP · VIDEO GAME · FULL STACK DEVELOPMENT",
    slogan:
      "A fish’s brave journey across the deep, a video game for my significant other",
    description: [
      {
        header: "Description",
        text: "Glub World is a website video game that I developed for my significant other for our 7th anniversary. It follows a fish who gets lost in the sea and tries to find their way back to their best friend, a cat. Feel free to play yourself!",
      },
    ],
    thumbnail: "/portfolio/projects/glub_world/thumbnail.png",
    link: "/project/glub-world",
    featured: false,
    role: "Game Developer",
    techstack: ["HTML", "JavaScript", "CSS"],
    links: [{ label: "GitHub", url: "https://github.com/DonChenn/Glub_World" }],
  },
  {
    title: "Fabflix",
    subheading: "WEB APP · FULL STACK DEVELOPMENT",
    slogan: "Connecting you with films through an expansive cinematic catalog",
    description: [
      {
        header: "Description",
        text: "Fabflix is a full-stack simluated e-commerce platform developed for movie enthusiasts, designed to provide a interface for browsing, searching, and purchasing films.",
      },
    ],
    thumbnail: "/portfolio/projects/fabflix/thumbnail.png",
    link: "/project/fabflix",
    featured: true,
    role: "Full Stack Developer",
    techstack: [
      "Frontend: HTML, CSS, JavaScript (AJAX)",
      "Backend: Java (Servlets, JDBC, SAX Parser)",
      "Database: MySQL",
      "DevOps: Docker, Kubernetes",
    ],
    links: [{ label: "GitHub", url: "https://github.com/DonChenn/Fabflix" }],
  },
  {
    title: "Guidance Glasses",
    subheading: "EMBEDDED SYSTEMS · COMPUTER VISION · MACHINE LEARNING",
    slogan:
      "Helping the visually impaired make the world feel a little more navigatable",
    description: [
      {
        header: "The Problem",
        text: "Current cityscapes are not designed to accommodate the visually impaired. Cityscapes are filled with multiple obstacles that move in and out of people's’ paths, making it a dangerous environment to navigate. Current solutions still have many issues including, white canes being unable to detect objects that are outside of the user’s immediate range and smart glasses have high costs and are unable to measure distances, ",
      },
      {
        header: "Our Solution",
        text: "The goal of the guidance glasses is to assist visually impaired people in being able to safely cross the street. The glasses use a combination of information provided by a camera, and microphone to assess whether it’s okay to cross the street. The ultrasonic provides additional information about obstacles in front of the user. This is then communicated to the user through vibrations from haptic feedback motors.",
        bullets: [
          "Camera uses a custom-trained YOLOv5 model to detect and recognize pedestrian stop or walk signs.",
          "Microphone listens to sounds that might come from pedestrian walk and stop signals to add to the algorithm’s confidence level on if it is a walk signal or not. It also measures the decibels of ambient sounds to determine if there is a car.",
          "Ultrasonic sensor detects any objects within its range and how far they are to determine if an obstacle is in the way.",
          "Haptic feedback motors located on both temples then communicate all of this through vibrations of varying frequencies and intensities.",
        ],
      },
    ],
    thumbnail: "/portfolio/projects/guidance_glasses/thumbnail.png",
    link: "/project/guidance-glasses",
    featured: true,
    role: "Embedded Systems Engineer",
    techstack: ["Python", "YOLOv5", "Nvidia Jetson Nano", "C"],
    links: [
      { label: "GitHub", url: "https://github.com/franciscotimoh/gb-glasses" },
    ],
  },
];
