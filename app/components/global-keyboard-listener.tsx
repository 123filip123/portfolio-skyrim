"use client";

import { useEffect } from "react";
import { useNavigation } from "../contexts/NavigationContext";

export const GlobalKeyboardListener = () => {
  const { navigateToPage } = useNavigation();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Only handle page navigation with arrow up/down
      if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        // Check if we're on the projects page and in projects context
        const isOnProjectsPage = window.location.pathname === "/projects";
        const projectsElement = document.querySelector(
          '[data-navigation-context="projects"]'
        );

        // If we're on projects page and in projects context, don't handle page navigation
        if (isOnProjectsPage && projectsElement) {
          return;
        }

        event.preventDefault();

        if (event.key === "ArrowUp") {
          navigateToPage("up");
        } else if (event.key === "ArrowDown") {
          navigateToPage("down");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigateToPage]);

  return null; // This component doesn't render anything
};
