"use client";

import { useState } from "react";
import { ProjectCard } from "../ui/project-card/project-card";
import { PROJECTS } from "../utils/projects";
import { Button } from "../ui/button/button";
import { ProjectSection } from "../ui/project-section/project-section";

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<number>(1);

  const selectedProject = PROJECTS.find(
    (project) => project.id === selectedProjectId
  );

  return (
    <div className="flex gap-10">
      <div className="flex flex-col gap-10 relative w-[500px]">
        <h2 className="text-3xl font-bold">Projects</h2>
        <span className="absolute right-1 top-0 h-[76px] w-[2px] bg-white opacity-30 z-20" />

        <div className="flex flex-col">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isSelected={selectedProjectId === project.id}
              setSelectedProjectId={setSelectedProjectId}
              isLastItem={project.id === PROJECTS.length}
            />
          ))}
        </div>
      </div>

      {selectedProject && <ProjectSection project={selectedProject} />}
    </div>
  );
}
