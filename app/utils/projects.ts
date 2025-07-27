export interface IProject {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  link: string;
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
    name: "Stickers Trading App",
    shortDescription:
      "A cross-platform mobile app for sticker album collectors to track missing and duplicate stickers.",
    longDescription:
      "A cross-platform mobile app for sticker album collectors to track missing and duplicate stickers. " +
      "All collectors of sticker albums, regardless of album theme, face the same problem. Albums can contain anywhere from 200 to nearly 1,000 stickers. " +
      "Tracking the state of the stickers, most importantly which stickers are missing, and which and how many duplicates they have, is usually done by writing it down on a piece of paper. " +
      "Each time a missing sticker is obtained, or a duplicate is obtained or exchanged, this sheet is supplemented and crossed out. " +
      "The process itself takes a lot of time. Eventually the sheet becomes unreadable and useless." +
      "I created this app to solve this problem.",
    technologies: ["React Native", "TypeScript", "Expo", "Node.js", "MongoDB"],
    link: "https://github.com/123filip123/stickers-trading-app",
  },
];
