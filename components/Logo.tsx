"use client";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import styles from "./Logo.module.css";

type LogoState =
  | "home"
  | "gallery"
  | "list"
  | "project"
  | "studio"
  | "knowledge";

export default function Logo() {
  const pathname = usePathname();
  const [logoState, setLogoState] = useState<LogoState>("home");
  const [transitionClass, setTransitionClass] = useState("");
  const prevStateRef = useRef<LogoState>("home");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    let newState: LogoState = "home";
    if (pathname === "/") newState = "home";
    else if (pathname.startsWith("/project/")) newState = "project";
    else if (pathname === "/studio" || pathname === "/culture")
      newState = "studio";
    else if (
      ["/knowledge", "/news", "/contacts", "/privacy-policy"].includes(
        pathname
      ) ||
      pathname.startsWith("/knowledge/") ||
      pathname.startsWith("/news/")
    )
      newState = "knowledge";
    else if (pathname === "/gallery") newState = "gallery";
    else if (pathname === "/list") newState = "list";

    if (newState !== logoState) {
      const prevState = prevStateRef.current;

      // Check if the transition involves the "project" state
      // const isProjectTransition =
      //   newState === "project" || prevState === "project";

      // if (isProjectTransition) {
      //   setTransitionClass("project-transition");
      // } else {
      setTransitionClass(`${prevState}-to-${newState}`);
      // }

      console.log(`Logo transition: ${prevState} to ${newState}`);

      const isKnowledgeTransition =
        ["/knowledge", "/news", "/contacts", "/privacy-policy"].includes(
          pathname
        ) ||
        pathname.startsWith("/knowledge/") ||
        pathname.startsWith("/news/") ||
        ["/knowledge", "/news", "/contacts", "/privacy-policy"].includes(
          prevState
        );

      const transitionDuration = isKnowledgeTransition ? 8000 : 8000;

      // Immediately update the logo state and prevStateRef
      setLogoState(newState);
      prevStateRef.current = newState;

      // Use a single timeout to remove the transition class
      const transitionTimeout = setTimeout(() => {
        setTransitionClass("");
      }, transitionDuration);

      return () => {
        clearTimeout(transitionTimeout);
      };
    } else if (!isInitialized) {
      // If the state hasn't changed but it's the initial load, set isInitialized
      setIsInitialized(true);
      // We'll handle the fade-in using CSS instead of hiding the element
    }
  }, [pathname, logoState, isInitialized]);

  return (
    <div
      key={logoState}
      className={`${styles.logoContainer} ${styles[logoState]} ${styles[transitionClass]} ${
        isInitialized ? styles.initialized : ""
      }`}
    >
      <img src="/assets/B.svg" className={styles.bImage} alt="B logo" />
      <img src="/assets/Q.svg" className={styles.qImage} alt="Q logo" />
    </div>
  );
}
