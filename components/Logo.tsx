"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Logo.module.css";

type LogoState =
  | "home"
  | "gallery"
  | "list"
  | "project"
  | "studio"
  | "knowledge";

function Logo() {
  const pathname = usePathname();
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const prevStateRef = useRef<LogoState>("home");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    let newState: LogoState = "home";

    if (pathname === "/") {
      newState = "home";
    } else if (pathname.startsWith("/project/")) {
      newState = "project";
    } else if (pathname === "/studio" || pathname === "/culture") {
      newState = "studio";
    } else if (
      ["/knowledge", "/news", "/contacts", "/privacy-policy"].includes(
        pathname
      ) ||
      pathname.startsWith("/knowledge/") ||
      pathname.startsWith("/news/")
    ) {
      newState = "knowledge";
    } else if (pathname === "/gallery") {
      newState = "gallery";
    } else if (pathname === "/list") {
      newState = "list";
    }

    const prevState = prevStateRef.current;

    const updateClasses = () => {
      if (logoContainerRef.current) {
        const container = logoContainerRef.current;

        setTimeout(() => {
          // Remove previous state and transition classes
          container.classList.remove(styles[prevState]);
          container.classList.remove(
            styles[`${prevState}-to-${newState}` as keyof typeof styles]
          );

          // Add new state class
          container.classList.add(styles[newState]);

          // Add transition class
          const transitionClass = `${prevState}-to-${newState}`;
          if (styles[transitionClass as keyof typeof styles]) {
            container.classList.add(styles[transitionClass as keyof typeof styles]);

            // Remove transition class after animation ends
            const onAnimationEnd = () => {
              container.classList.remove(
                styles[transitionClass as keyof typeof styles]
              );
              container.removeEventListener("animationend", onAnimationEnd);
            };
            container.addEventListener("animationend", onAnimationEnd);
          }

          // Set initialized state
          setIsInitialized(true);
        }, 750); // 750ms delay
      }

      // Update previous state
      prevStateRef.current = newState;
    };

    const shouldDelay = newState === "project" || prevState === "project";

    if (shouldDelay) {
      setTimeout(updateClasses, 1500); // 1.5 seconds delay
    } else {
      updateClasses();
    }
  }, [pathname]);

  return (
    <div
      ref={logoContainerRef}
      className={`${styles.logoContainer} ${styles.home}`}
      style={{ opacity: isInitialized ? 1 : 0 }}
    >
      <img src="/assets/B.svg" className={styles.bImage} alt="B logo" />
      <img src="/assets/Q.svg" className={styles.qImage} alt="Q logo" />
    </div>
  );
}

export default Logo;
