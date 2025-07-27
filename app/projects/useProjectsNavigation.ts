import { useEffect, useMemo, useState } from "react";
import { PROJECTS } from "../utils/projects";
import { usePathname } from "next/navigation";
import {
  NavigationContextType,
  useNavigation,
} from "../contexts/NavigationContext";

export const useProjectsNavigation = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<number>();
  const { navigationContext, setNavigationContext } = useNavigation();
  const pathname = usePathname();

  const selectedProject = useMemo(
    () => PROJECTS.find((project) => project.id === selectedProjectId),
    [selectedProjectId]
  );

  // Reset navigation context when pathname changes
  useEffect(() => {
    if (pathname === "/projects") {
      setNavigationContext(NavigationContextType.SideMenu);
    }
  }, [pathname, setNavigationContext]);

  // handle keyboard navigation for context switching and project navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Only handle navigation if we're on the projects page
      if (pathname !== "/projects") return;

      switch (event.key) {
        case "ArrowRight":
          event.preventDefault();
          if (navigationContext === NavigationContextType.SideMenu) {
            setNavigationContext(NavigationContextType.Projects);
            setSelectedProjectId(1); // Select first project
          }
          break;
        case "ArrowLeft":
          event.preventDefault();
          if (navigationContext === NavigationContextType.Projects) {
            setNavigationContext(NavigationContextType.SideMenu);
            setSelectedProjectId(undefined);
          }
          break;
        case "ArrowUp":
          event.preventDefault();
          if (navigationContext === NavigationContextType.Projects) {
            const currentIndex = PROJECTS.findIndex(
              (project) => project.id === selectedProjectId
            );
            if (currentIndex > 0) {
              setSelectedProjectId(PROJECTS[currentIndex - 1].id);
            }
          }
          break;
        case "ArrowDown":
          event.preventDefault();
          if (navigationContext === NavigationContextType.Projects) {
            const currentIndex = PROJECTS.findIndex(
              (project) => project.id === selectedProjectId
            );
            if (currentIndex < PROJECTS.length - 1) {
              setSelectedProjectId(PROJECTS[currentIndex + 1].id);
            }
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProjectId, navigationContext, pathname, setNavigationContext]);

  return {
    selectedProject,
    setSelectedProjectId,
    navigationContext,
    setNavigationContext,
  };
};
