"use client";

import { ProjectCard } from "../ui/project-card/project-card";
import { PROJECTS } from "../utils/projects";
import { ProjectSection } from "../ui/project-section/project-section";
import { useProjectsNavigation } from "./useProjectsNavigation";
import { NavigationContextType } from "../contexts/NavigationContext";

export default function Projects() {
  const { selectedProject, setSelectedProjectId, navigationContext } =
    useProjectsNavigation();

  return (
    <div className="flex gap-10" data-navigation-context={navigationContext}>
      <div className="flex flex-col gap-10 relative w-[500px]">
        <h2 className="text-3xl font-bold">Projects</h2>
        <span className="absolute right-1 top-0 h-[76px] w-[2px] bg-white opacity-30 z-20" />

        <div className="flex flex-col">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isSelected={
                selectedProject?.id === project.id &&
                navigationContext === NavigationContextType.Projects
              }
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
