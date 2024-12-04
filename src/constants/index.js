import randPass from "../assets/projects/randomPassGenerator.png";
import contactApp from "../assets/projects/contactApp.png";
import diceGame from "../assets/projects/diceGame.png";
import foodZone from "../assets/projects/foodZone.png";
import TicTacToe from "../assets/projects/TicTacToe.png"


export const HERO_CONTENT = `I am a passionate full-stack developer with a strong foundation in crafting robust and scalable web applications. 
With solid expertise in front-end technologies like React, 
I am now expanding my skills into back-end development, 
focusing on Spring Boot, MySQL, and MongoDB.
My goal is to leverage this growing skill set to build innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `My journey in web development began with a deep curiosity about how things work, transforming into a fulfilling career where I constantly embrace new challenges and growth opportunities. I thrive in collaborative environments, enjoying the process of solving complex problems to deliver high-quality, innovative solutions.
Beyond coding, I stay active, explore emerging technologies, and contribute to open-source projects an experience that deepens my skills and connects me with the global developer community. I carefully plan my day to balance professional commitments with personal interests and hobbies, ensuring a well-rounded and productive lifestyle.
I am passionate about continuous learning, always seeking to bring creativity, efficiency, and a fresh perspective to every project I undertake.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Random Password Generator ",
    image: randPass,
    link:"https://passwordgenerator-chi-ecru.vercel.app/",
    description:
      "A robust password generator application designed to create complex, secure passwords. Trusted by many popular websites and ideal for enhancing daily digital security",
    technologies: ["HTML", "CSS", "Tailwind","React"],
  },
  {
    title: "Contact App 📞",
    image: contactApp,
    link:"https://contact-app-kappa-puce.vercel.app/",
    description:
      "The app lets users manage contacts by adding, updating, and deleting details. It’s a simple, user-friendly way to organize contact information",
    technologies: ["HTML", "CSS",,"Tailwind", "React", "Firebase"],
  },
  {
    title: "Dice Game 🎲",
    image: diceGame,
    link:"https://dice-game-vert-seven.vercel.app/",
    description:
      "A simple dice game where you guess a number, roll the dice, and score points based on the rules. The score is displayed after each roll ! ",
    technologies: ["HTML", "CSS",  "Tailwind","React",],
  },
  {
    title: "Food Zone 🍜",
    image: foodZone,
    link:"https://food-zone-woad.vercel.app/",
    description:
      "Explore Food Zone—your go-to platform to discover delicious dishes! Easily search for your favorite foods or browse by type, like breakfast, lunch, or dinner. Simple, quick, and tasty! 🍔",
    technologies: ["HTML", "CSS","Tailwind","React"],
  },
  {
    title: "Tic Tac Toe",
    image: TicTacToe,
    link:"https://tic-tac-toe-nu-sandy.vercel.app/",
    description:
      "An engaging Tic Tac Toe game featuring trendy Instagram audios and vibrant visuals. Enjoy a fun, immersive experience with modern aesthetics and catchy sounds that keep you hooked!",
    technologies: ["HTML", "CSS","JavaScript"],
  }
];

export const CONTACT = {
  // phoneNo: "+12 4555 666 00 ",
  email: "factualmayur@gmail.com",
  // Social: "Social Media Accounts mentioned above 🌐",
};
