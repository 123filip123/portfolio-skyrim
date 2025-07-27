import { useEffect, useMemo, useState } from "react";
import { PROJECTS } from "../utils/projects";

export const useProjectsNavigation = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<number>(1);

  const selectedProject = useMemo(
    () => PROJECTS.find((project) => project.id === selectedProjectId),
    [selectedProjectId]
  );

  // handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const currentIndex = PROJECTS.findIndex(
        (project) => project.id === selectedProjectId
      );

      switch (event.key) {
        case "ArrowUp":
          event.preventDefault();
          if (currentIndex > 0) {
            setSelectedProjectId(PROJECTS[currentIndex - 1].id);
          }
          break;
        case "ArrowDown":
          event.preventDefault();
          if (currentIndex < PROJECTS.length - 1) {
            setSelectedProjectId(PROJECTS[currentIndex + 1].id);
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProjectId]);

  return { selectedProject, setSelectedProjectId };
};
