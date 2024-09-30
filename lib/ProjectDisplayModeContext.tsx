"use client"

import { createContext, useContext, useState, ReactNode } from "react";

// Define the type for the context value
interface ProjectsContextType {
  displayMode: "gallery" | "list";
  visible: boolean;
  handleToggle: (value: "gallery" | "list") => void;
}

// Create the context with an initial value
const ProjectsContext = createContext<ProjectsContextType | undefined>(
  undefined
);

// Define the provider component type
interface GalleryProviderProps {
  children: ReactNode;
}

// Create a provider component
export const GalleryProvider = ({ children }: GalleryProviderProps) => {
  // State to track if the gallery is active or not
  const [displayMode, setDisplayMode] = useState<"gallery" | "list">("gallery");
  const [visible, setVisible] = useState(true);

  // Function to toggle the gallery state
  const toggleDisplayMode = (value: "gallery" | "list") => {
    setDisplayMode(value);
  };

  const handleRouteChange = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleToggle = (value: "gallery" | "list") => {
    handleRouteChange();
    setVisible(false); // Start hiding the current items
    setTimeout(() => {
      // After 1s, switch the display mode and make items visible again
      toggleDisplayMode(value);
      setVisible(true);
    }, 1000); // 1 second delay
  };

  return (
    <ProjectsContext.Provider value={{ displayMode, visible, handleToggle }}>
      {children}
    </ProjectsContext.Provider>
  );
};

// Custom hook to use the gallery context
export const useGallery = (): ProjectsContextType => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error("useGallery must be used within a GalleryProvider");
  }
  return context;
};
