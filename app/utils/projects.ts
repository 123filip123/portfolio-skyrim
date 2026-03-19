export interface IProject {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  link?: string;
}

export const PROJECTS: IProject[] = [
  {
    id: 1,
    name: "Upshift",
    shortDescription:
      "A temporary staffing platform that allows you to find and hire temporary workers for your business.",
    longDescription:
      "Upshift is a temporary staffing platform that allows you to find and hire temporary workers for your business. " +
      "I worked on this project for 3 years, focusing on frontend development using React and React Native. " +
      "My responsibilities included building responsive user interfaces, implementing complex state management, optimizing app performance, and collaborating with the design, backend, QA, and product teams to deliver a seamless user experience.",
    technologies: ["React", "React Native", "TypeScript"],
    link: "https://upshift.work/",
  },
  {
    id: 2,
    name: "Auto Youtube Generator",
    shortDescription:
      "Automatically generate YouTube Shorts videos with AI-powered scripts for list creation, image generation, audio narration, and video assembly.",
    longDescription:
      "Automatically generate YouTube Shorts videos with AI-powered scripts for list creation, image generation, audio narration, and video assembly. " +
      "I created this project to automate the process of creating YouTube Shorts videos. " +
      "It uses OpenAI APIs to generate a list of items, create images and audio, and then assembles them into a vertical video suitable for YouTube Shorts.",
    technologies: ["Python", "OpenAI API", "Image Magick"],
    link: "https://github.com/123filip123/auto-youtube-generator",
  },
  {
    id: 3,
    name: "Explorers - Digital Multiplayer Board Games Platform",
    shortDescription: "A multiplayer gaming platform featuring 2 board games.",
    longDescription:
      "Explorers is a multiplayer gaming platform featuring 2 board games, Explorers and Dixit. " +
      "Explorers is a multiplayer tile placing game inspired by Cartographers. " +
      "Create or join a room with a unique code, play with friends in real time, and compete to earn the highest score through smart planning and tactical decisions." +
      "Players take turns placing terrain tiles, building settlements, and completing objectives to earn points. " +
      "But be careful—your opponents are trying to sabotage you with their monsters! " +
      "Dixit is a card game where players draw cards and then vote on the picture on their card. " +
      "The player with the most votes wins the round. " +
      "I created this platform to learn about multiplayer game development and real-time communication.",
    technologies: [
      "Next.js",
      "Node.js",
      "Socket.io",
      "dnd-kit",
      "Tailwind CSS",
      "TypeScript",
    ],
    link: "https://project-explorers.vercel.app/rooms",
  },
  {
    id: 4,
    name: "E-Shop Demo",
    shortDescription: "Demo e-shop built with Next.js and shadcn/ui.",
    longDescription:
      "E-Shop Demo is a demo e-shop built with Next.js and shadcn/ui. " +
      "It is a simple e-shop that allows you to browse products and add them to your cart. " +
      "The demo features a theme switcher that utilizes tweakcn themes.",
    technologies: [
      "Next.js",
      "shadcn/ui",
      "Tailwind CSS",
      "TypeScript",
      "tweakcn",
    ],
    link: "https://eshop-demo-drab.vercel.app/",
  },
];
