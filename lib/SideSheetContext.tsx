"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface SideSheetConextType {
  isOpen: boolean;
  page: "knowledge" | "news";
  setPage: (value: "knowledge" | "news") => void;
  setIsOpen: (value: boolean) => void;
  scrolledToEnd: boolean;
  setScrolledToEnd: (value: boolean) => void;
}

// Create the context with an initial value
const SideSheetContext = createContext<SideSheetConextType | undefined>(
  undefined
);

// Define the provider component type
interface SideSheetPrivderProps {
  children: ReactNode;
}

// Create a provider component
export const SideSheetProvider = ({ children }: SideSheetPrivderProps) => {
  // State to track if the gallery is active or not
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState<"knowledge" | "news">("knowledge");
  const [scrolledToEnd, setScrolledToEnd] = useState(false);

  return (
    <SideSheetContext.Provider
      value={{
        isOpen,
        page,
        setPage,
        setIsOpen,
        scrolledToEnd,
        setScrolledToEnd,
      }}
    >
      {children}
    </SideSheetContext.Provider>
  );
};

// Custom hook to use the gallery context
export const useSideSheet = (): SideSheetConextType => {
  const context = useContext(SideSheetContext);
  if (!context) {
    throw new Error("useGallery must be used within a GalleryProvider");
  }
  return context;
};
