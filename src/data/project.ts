// https://mockuphone.com/ for thumbnail making

export interface Project {
  title: string;
  subheading: string;
  thumbnail: string;
  link: string;
  featured: boolean;
  role?: string;
  techstack?: string[];
  links?: { label: string; url: string }[];
  description: {
    header: string;
    text: string;
    bullets?: string[];
    images?: string[];
  }[];
}

export const projects: Project[] = [
  {
    title: "Reddit Sentiment Analysis",
    subheading: "ARTIFICIAL INTELLIGENCE · MACHINE LEARNING · WEB APP",
    thumbnail: "/portfolio/projects/reddit_sentiment_analysis/thumbnail.png",
    link: "/project/reddit_sentiment_analysis",
    featured: true,
    role: "Sentiment Analysis Machine Learning Lead",
    techstack: [
      "Python",
      "PyTorch",
      "Hugging Face Transformers",
      "RoBERTa",
      "Pandas",
      "NumPy",
      "Scikit-learn",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/DonChenn/RedditSentimentAnalysis",
      },
    ],
    description: [
      {
        header: "The Problem",
        text: "Public sentiment on high-traffic platforms like Reddit is hard to navigate. Extracting meaningful emotional trends currently requires manually reading through thousands of comments and posts is unscalable, biased by what appears on top, and impossible to quantify in real-time.",
      },
      {
        header: "Our Solution",
        text: "The result is a live sentiment analysis that quantifies the sentiment over of political discourse based on a topic. Instead of simple positive or negative labels, the system utilizes a fine-tuned RoBERTa transformer to classify real-time comments into 28 distinct emotional states—such as 'Admiration,' 'Fear,' or 'Curiosity.' By aggregating these insights instantly, the platform generates a dynamic dashboard that allows users to visualize the specific emotional gaps between liberal and conservative viewpoints without ever needing to read a single comment.",
      },
      {
        header: "In-Progress",
        text: "I fine tuned a RoBERTa-base model on GoEmotions, a human-annotated dataset of 58k Reddit comments extracted from popular English-language subreddits and labeled with 27 emotion categories. This project is still in progress.",
      },
    ],
  },
  {
    title: "SMYZE",
    subheading: "MOBILE APP · WEB APP · FULL STACK DEVELOPMENT",
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
    description: [
      {
        header: "Description",
        text: "Smyze is a fully automated robotic drink station. During my time with SMYZE, I worked as a Full Stack Developer contributing to their Medusa v2 commerce backend and WeChat/Kiosk interfaces.",
      },
      {
        header: "Backend",
        text: "I build a react website outlet management system within Medusa v2 that had custom workflows and hooks which contained all the information of each physical store with PayloadCMS across Kiosk, WeChat Mini Program, and Admin interfaces. It controlled which products, kiosks, and regions to support the store operations. I also developed a product cloning module that enabled duplicating of products with overrides for pricing, ingredients, and metadata per location while maintaining parent child data relationships.",
        images: ["/portfolio/projects/smyze/outlet.png"],
      },
      {
        header: "Kiosk",
        text: "I developed the Flutter-based Kiosk application that dynamically loads the menu by filtering products and applying store specific overrides for pricing and availability from the Medusa backend. I also integrated a hybrid checkout option to pay with WeChat Pay through QR codes to transfer carts to WeChat.",
        images: [
          "/portfolio/projects/smyze/kiosk_menu.png",
          "/portfolio/projects/smyze/kiosk_item.png",
        ],
      },
      {
        header: "WeChat",
        text: "I built the WeChat Program to serve as a mobile store with customer loyalty points. I implemented secure authentication linking WeChat identities to Medusa profiles and developed a complete e-commerce flow with store-specific menus and coupon redemption.",
        images: [
          "/portfolio/projects/smyze/wechat_menu.png",
          "/portfolio/projects/smyze/wechat_confirm.png",
        ],
      },
    ],
  },
  {
    title: "Purin Car",
    subheading: "ANDROID APP · FULL STACK DEVELOPMENT",
    thumbnail: "/portfolio/projects/purin_car/thumbnail.png",
    link: "/project/purin-car",
    featured: true,
    role: "Full Stack Developer",
    techstack: ["Kotlin", "Jetpack Compose", "Room Database", "SmartCar API"],
    links: [{ label: "GitHub", url: "https://github.com/DonChenn/PurinCar" }],
    description: [
      {
        header: "The Problem",
        text: "Car software often fails to provide comprehensive maintenance tracking, limiting alerts strictly to engine oil changes while neglecting other critical services. Furthermore, it lacks transparency regarding the mileage or time remaining until the next service, only triggering a notification within 100 miles of the due date. This creates a blind spot for drivers, resulting in surprise warnings that leave almost no time to plan or schedule necessary maintenance.",
      },
      {
        header: "My Solution",
        text: "Purin Car is an Android Jetpack Compose application built to extend the lifespan of my car (2025 Toyota Camry) to hopefully 300,000+ miles. Using SmartCar API to connect to your car, it automatically updates the odometer on your app and checks for any upcoming services needed based on mileage or time intervals ensuring NO service is overlooked. Purin Car tracks and manages:",
        bullets: [
          "Engine Oil (5000 miles or 6 months)",
          "Air Filters (15000 miles or 1 year)",
          "Engine Coolant (30000 miles or 2 years)",
          "Brake Fluid (30000 miles or 2 years)",
          "Battery Fan (30000 miles or 3 years)",
          "Transmission Fluid (60000 miles or 3 years)",
          "Spark Plugs (100000 miles or 5 years)",
        ],
        images: [
          "/portfolio/projects/purin_car/purin_car_select.png",
          "/portfolio/projects/purin_car/purin_car_service.png",
          "/portfolio/projects/purin_car/purin_car_records.png",
        ],
      },
    ],
  },
  {
    title: "Glub World",
    subheading: "WEB APP · VIDEO GAME · FULL STACK DEVELOPMENT",
    thumbnail: "/portfolio/projects/glub_world/thumbnail.png",
    link: "/project/glub-world",
    featured: false,
    role: "Game Developer",
    techstack: ["HTML", "JavaScript", "CSS"],
    links: [
      { label: "GitHub", url: "https://github.com/DonChenn/Glub_World" },
      { label: "Video Game", url: "https://donchenn.github.io/Glub_World/" },
    ],
    description: [
      {
        header: "Description",
        text: "Glub World is a website video game that I developed for my significant other for our 7th anniversary. It follows a fish who gets lost in the sea and tries to find their way back to their best friend, a cat. The video game is linked above, feel free to play yourself (username and password is glub glub and meow meow)!",
        images: [
          "/portfolio/projects/glub_world/glubworld_login.png",
          "/portfolio/projects/glub_world/start.png",
          "/portfolio/projects/glub_world/crab.png",
          "/portfolio/projects/glub_world/hot_seat.png",
          "/portfolio/projects/glub_world/wallace.png",
          "/portfolio/projects/glub_world/ending.png",
        ],
      },
    ],
  },
  {
    title: "Fabflix",
    subheading: "WEB APP · FULL STACK DEVELOPMENT",
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
    description: [
      {
        header: "Description",
        text: "Fabflix is a movie e-commerce site I built to explore scalable web architecture. Instead of a single massive app, I broke it down into microservices using Java and Maven, keeping the user login logic separate from the movie browsing. I containerized the system with Docker and hosted it on AWS, using Kubernetes to manage deployments and auto-scaling. For the data, I set up a MySQL cluster with Primary-Replica databases to ensure speed and reliability under load. I also added security with JWTs for user sessions and integrated Google reCAPTCHA to prevent bot abuse.",
        images: [
          "/portfolio/projects/fabflix/login.png",
          "/portfolio/projects/fabflix/catalog.png",
          "/portfolio/projects/fabflix/admin.png",
        ],
      },
    ],
  },
  {
    title: "Guidance Glasses",
    subheading: "EMBEDDED SYSTEMS · COMPUTER VISION · MACHINE LEARNING",
    thumbnail: "/portfolio/projects/guidance_glasses/thumbnail.png",
    link: "/project/guidance-glasses",
    featured: false,
    role: "Embedded Systems Engineer",
    techstack: ["Python", "YOLOv5", "Nvidia Jetson Nano", "C"],
    links: [
      { label: "GitHub", url: "https://github.com/franciscotimoh/gb-glasses" },
      {
        label: "Presentation",
        url: "/portfolio/projects/guidance_glasses/slideshow.pdf",
      },
    ],
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
        images: [
          "/portfolio/projects/guidance_glasses/dataset.png",
          "/portfolio/projects/guidance_glasses/guidanceglasses_ultrasonic.png",
        ],
      },
    ],
  },
];
