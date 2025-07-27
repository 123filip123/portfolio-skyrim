"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { menuOptions } from "../ui/side-menu/utils";

export enum NavigationContextType {
  SideMenu = "side-menu",
  Projects = "projects",
}

interface NavigationContextValue {
  navigationContext: NavigationContextType;
  setNavigationContext: (context: NavigationContextType) => void;
  navigateToPage: (direction: "up" | "down") => void;
}

const NavigationContext = createContext<NavigationContextValue | undefined>(
  undefined
);

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [navigationContext, setNavigationContext] =
    useState<NavigationContextType>(NavigationContextType.SideMenu);
  const router = useRouter();

  // Handle page navigation with arrow keys
  const navigateToPage = (direction: "up" | "down") => {
    const currentPath = window.location.pathname;
    const currentIndex = menuOptions.findIndex(
      (option) => option.href === currentPath
    );

    if (direction === "up" && currentIndex > 0) {
      // Navigate to previous page
      router.push(menuOptions[currentIndex - 1].href);
    } else if (direction === "down" && currentIndex < menuOptions.length - 1) {
      // Navigate to next page
      router.push(menuOptions[currentIndex + 1].href);
    }
  };

  return (
    <NavigationContext.Provider
      value={{
        navigationContext,
        setNavigationContext,
        navigateToPage,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};
