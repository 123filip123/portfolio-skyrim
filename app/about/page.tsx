"use client";

import { Button } from "../ui/button/button";

export default function About() {
  return (
    <div className="flex flex-col justify-between h-full pb-12">
      <div className="flex flex-col gap-10">
        <h2 className="text-3xl font-bold">About Me</h2>

        <div className="flex flex-col gap-6">
          <p className="text-md text-gray-300 italic">
            * Psst, play the music, trust me... *
          </p>

          <p className="text-md text-gray-300 italic">
            * Also, use the arrow keys to navigate the menu *
          </p>

          <p className="text-lg">
            Hi, I'm Filip Popovski — a passionate frontend engineer with over
            three years of experience building sleek, intuitive web and mobile
            applications. Currently, I work at Upshift, where I specialize in
            React, React Native, and TypeScript, delivering high-quality
            interfaces that power the leading temporary staffing platform in the
            US.
          </p>

          <p className="text-lg">
            I hold a Bachelor’s degree in Computer Science, and my love for tech
            runs deep — inspired largely by my lifelong passion for gaming. This
            passion pushed me to explore game development through Unity, where
            I’ve prototyped several projects like a Pokémon-style battle system,
            a space shooter, and a Hearthstone-inspired card game system.
          </p>

          <p className="text-lg">
            Beyond code, I’m a detail-oriented problem-solver with a strong
            interest in UI/UX design and performance optimization. I’ve also
            been diving into AI and GenAI tooling, and I’m actively expanding my
            skill set.
          </p>

          <p className="text-lg">
            On the personal side, I’m a big fan of fantasy stories, nature
            getaways, fitness, and always on the lookout for good food and
            meaningful experiences — especially when shared with my wife. When
            I’m not coding, you might find me training at the gym, gaming, or
            working on passion projects.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 border border-white/50 px-4 py-2 w-fit mx-auto">
        <p className="text-lg text-center">
          This portfolio site is inspired by Skyrim's UI and Juxtopposed's
          design.
        </p>

        <Button
          text="Figma Design"
          onClick={() =>
            window.open(
              "https://www.figma.com/community/file/1484459132775206005/skyrim-ui-x-email-client",
              "_blank"
            )
          }
        />
      </div>
    </div>
  );
}
