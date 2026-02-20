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
    role: "Sentiment Analysis Model Lead",
    techstack: [
      "Python",
      "PyTorch",
      "Hugging Face Transformers",
      "RoBERTa",
      "BERTopic",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "CNN",
      "VADER"
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
        text: "Public sentiment on platforms like Reddit is hard to navigate. Extracting meaningful emotional trends currently requires manually reading through thousands of comments and posts, which is unscalable, biased by what appears on top, and impossible to quantify in real-time.",
      },
      {
        header: "Our Solution",
        text: "We built a live sentiment analysis tool that classifies both political orientation and sentiment polarity to quantify political discourse. The platform generates a dynamic dashboard that allows users to visualize the specific emotional gaps between liberal and conservative viewpoints on various topics without ever needing to read a single comment.",
      },
      {
        header: "Architecture & Pipeline",
        text: "I developed the end-to-end integration pipeline connecting three core models: a Supervised Political classifier, a Supervised Sentiment classifier, and an Unsupervised Topic clustering model using BERTopic. This pipeline processes live Reddit data for comprehensive, real-time inference and feeds directly into our visualization dashboard.",
      },
      {
        header: "Model Development & Exploration",
        text: "As the Sentiment Analysis Model Lead, I architected and trained the sentiment classification model using the GoEmotions dataset. I implemented a multi-label RoBERTa-base architecture to identify 28 distinct emotional categories. To ensure optimal performance, I benchmarked this transformer against several other approaches, including Convolutional Neural Networks (CNNs) using sliding word windows, few-shot prompting with LLMs, and lexicon-based scoring using VADER.",
        images: [
          "/portfolio/projects/reddit_sentiment_analysis/Emotions.png",
          "/portfolio/projects/reddit_sentiment_analysis/Bucket.png"
        ]
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
      "Frontend: React, Flutter (Dart), Vue.js (uni-app)",
      "Backend: Node.js, TypeScript, MedusaJS, Payload CMS",
      "Database: PostgreSQL",
      "Cloud: Alibaba Cloud OSS",
    ],
    links: [{ label: "Company Website", url: "https://smyze.cn/" }],
    description: [
      {
        header: "Description",
        text: "Smyze is a fully automated robotic drink station. As a Software Engineer Intern, I architected and implemented a headless commerce ecosystem using MedusaJS V2 (Node.js/TypeScript), powering two distinct frontends: a Flutter-based physical Kiosk and a Vue.js/uni-app WeChat Mini-Program.",
      },
      {
        header: "Backend",
        text: 'I built a custom React Admin interface and an Outlet Management module extending Medusa v2. Utilizing Medusa\'s Data Model Layer (DML) and transaction workflows with automatic failure compensation, I bridged the gap between sales channels and store locations. I engineered a "Deep Clone" workflow that reduced product deployment time from hours to seconds by allowing admins to batch deploy master products with price and variant overrides. Additionally, I integrated Payload CMS via a Medusa Remote Link module, utilizing Alibaba Cloud OSS to create a single source of truth for all media assets.',
        images: ["/portfolio/projects/smyze/outlet.png"],
      },
      {
        header: "Kiosk",
        text: "I developed a landscape Android Kiosk application using Flutter and Dart for tablets. The app dynamically initializes its store context, localized pricing, and menus using hardware device IDs. To ensure high performance, I implemented an asset caching layer for Payload CMS media. I also built the deep-link QR codes to transfer anonymous live carts from kiosks to personal devices, supported by a real-time polling listener to monitor Medusa for paid status triggers.",
        images: [
          "/portfolio/projects/smyze/kiosk_menu.png",
          "/portfolio/projects/smyze/kiosk_item.png",
        ],
      },
      {
        header: "WeChat",
        text: "I engineered a cross platform WeChat Mini-Program using Vue.js and uni-app, leveraging an rpx layout system to translate Figma designs into compatible mobile interfaces. The app functions as a personalized mobile store with loyalty point integration. I built a custom cart transfer module that captures the kiosk's QR deep link, securely authenticates the user's WeChat OpenID, and transfers cart ownership for checkout via the JSAPI payment workflow.",
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
    techstack: [
      "Kotlin", 
      "Jetpack Compose", 
      "Room Database", 
      "SmartCar API"
    ],
    links: [{ label: "GitHub", url: "https://github.com/DonChenn/PurinCar" }],
    description: [
      {
        header: "The Problem",
        text: "Car software often fails to provide comprehensive maintenance tracking, limiting alerts strictly to engine oil changes while neglecting other critical services. Furthermore, it lacks transparency regarding the mileage or time remaining until the next service, only triggering a notification within 100 miles of the due date. This creates a blind spot for drivers, resulting in surprise warnings that leave almost no time to plan or schedule necessary maintenance.",
      },
      {
        header: "My Solution",
        text: "Purin Car is an Android application built to extend the lifespan of my car (2025 Toyota Camry) to hopefully 300,000+ miles. Using the Smartcar API, the app securely connects to the vehicle to automatically sync the real-time odometer reading upon opening. It calculates and tracks maintenance schedules based on both mileage and time intervals, whichever comes first, ensuring no critical service is overlooked.",
        bullets: [
          "Engine Oil (5000 miles or 6 months)",
          "Air Filters (15000 miles or 1 year)",
          "Engine Coolant (30000 miles or 2 years)",
          "Brake Fluid (30000 miles or 2 years)",
          "Battery Fan (30000 miles or 3 years)",
          "Transmission Fluid (60000 miles or 3 years)",
          "Spark Plugs (100000 miles or 5 years)",
        ],
      },
      {
        header: "Technical Implementation",
        text: "I built the application using Kotlin and Jetpack Compose, adhering to an Model - View - View Model architecture. To handle the Smartcar API integration, I implemented an OAuth 2.0 flow, which manages authorization code exchanges and automatic token refreshing. For local data persistence, I utilized a Room Database to store multiple vehicles, log individual maintenance records, and track accumulated costs. Additionally, I built an import/export tool utilizing Kotlin Coroutines to allow users to backup or transfer their service history via CSV files.",
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
