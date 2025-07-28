"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group [&_.sonner-toast]:border [&_.sonner-toast]:border-white [&_.sonner-toast]:border-solid"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "1px solid white",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
