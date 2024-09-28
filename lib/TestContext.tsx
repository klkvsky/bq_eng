"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Define the type for the context value
interface TestContextType {
  visible: boolean;
  setVisible: (value: boolean) => void;
}

// Create the context with an initial value
const TestContext = createContext<TestContextType | undefined>(undefined);

// Define the provider component type
interface TestProviderProps {
  children: ReactNode;
}

// Create a provider component
export const TestProvider = ({ children }: TestProviderProps) => {
  const [visible, setVisible] = useState(true);

  return (
    <TestContext.Provider value={{ visible, setVisible }}>
      {children}
    </TestContext.Provider>
  );
};

// Custom hook to use the test context
export const useTest = (): TestContextType => {
  const context = useContext(TestContext);
  if (!context) {
    throw new Error("useTest must be used within a TestProvider");
  }
  return context;
};
