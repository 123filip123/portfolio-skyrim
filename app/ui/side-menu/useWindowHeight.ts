import { useEffect, useState } from "react";

export const useWindowHeight = () => {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    // Set initial height
    setWindowHeight(window.innerHeight);

    // Update height on resize
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { windowHeight };
};
