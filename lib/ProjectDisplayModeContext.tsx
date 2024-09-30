"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

// Define the type for the context value
interface ProjectsContextType {
  displayMode: "gallery" | "list";
  visible: boolean;
  selectedCategory: string | null;
  changeDisplayMode: (value: "gallery" | "list") => void;
  setSelectedCategory: (value: string | null) => void;
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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Function to toggle the gallery state
  const handleRouteChange = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const changeDisplayMode = (mode: "gallery" | "list") => {
    handleRouteChange();
    setVisible(false);

    setTimeout(() => {
      setDisplayMode(mode);
      setVisible(true);
    }, 1000);
  };

  return (
    <ProjectsContext.Provider
      value={{
        displayMode,
        visible,
        selectedCategory,
        changeDisplayMode,
        setSelectedCategory,
      }}
    >
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
