"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Logo.module.css";

import Image from "next/image";
import B from "@/public/assets/B.svg";
import Q from "@/public/assets/Q.svg";

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
  const [isFirstLoad, setIsFirstLoad] = useState(true);

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
      if (newState === "project") {
        setTimeout(() => {
          if (logoContainerRef.current) {
            const container = logoContainerRef.current;

            // Remove previous state and transition classes
            container.classList.remove(styles[prevState]);
            container.classList.remove(
              styles[`${prevState}-to-${newState}` as keyof typeof styles]
            );

            // Add new state class
            container.classList.add(styles[newState]);

            if (!isFirstLoad) {
              // Add transition class
              const transitionClass = `${prevState}-to-${newState}`;
              if (styles[transitionClass as keyof typeof styles]) {
                container.classList.add(
                  styles[transitionClass as keyof typeof styles]
                );

                // Remove transition class after animation ends
                const onAnimationEnd = () => {
                  container.classList.remove(
                    styles[transitionClass as keyof typeof styles]
                  );
                  container.removeEventListener("animationend", onAnimationEnd);
                };
                container.addEventListener("animationend", onAnimationEnd);
              }
            }

            // Set initialized state
            setIsInitialized(true);
            setIsFirstLoad(false);
          }
        }, 1500);
      } else if (prevState === "project") {
        setTimeout(() => {
          if (logoContainerRef.current) {
            const container = logoContainerRef.current;

            // Remove previous state and transition classes
            container.classList.remove(styles[prevState]);
            container.classList.remove(
              styles[`${prevState}-to-${newState}` as keyof typeof styles]
            );

            // Add new state class
            container.classList.add(styles[newState]);

            if (!isFirstLoad) {
              // Add transition class
              const transitionClass = `${prevState}-to-${newState}`;
              if (styles[transitionClass as keyof typeof styles]) {
                container.classList.add(
                  styles[transitionClass as keyof typeof styles]
                );

                // Remove transition class after animation ends
                const onAnimationEnd = () => {
                  container.classList.remove(
                    styles[transitionClass as keyof typeof styles]
                  );
                  container.removeEventListener("animationend", onAnimationEnd);
                };
                container.addEventListener("animationend", onAnimationEnd);
              }
            }

            // Set initialized state
            setIsInitialized(true);
            setIsFirstLoad(false);
          }
        }, 1800);
      } else if (newState === "knowledge" || prevState === "knowledge") {
        setTimeout(() => {
          if (logoContainerRef.current) {
            const container = logoContainerRef.current;

            // Remove previous state and transition classes
            container.classList.remove(styles[prevState]);
            container.classList.remove(
              styles[`${prevState}-to-${newState}` as keyof typeof styles]
            );

            // Add new state class
            container.classList.add(styles[newState]);

            if (!isFirstLoad) {
              // Add transition class
              const transitionClass = `${prevState}-to-${newState}`;
              if (styles[transitionClass as keyof typeof styles]) {
                container.classList.add(
                  styles[transitionClass as keyof typeof styles]
                );

                // Remove transition class after 3 seconds
                setTimeout(() => {
                  container.classList.remove(
                    styles[transitionClass as keyof typeof styles]
                  );
                }, 3250);
              }
            }

            setIsInitialized(true);
            setIsFirstLoad(false);
          }
        }, 100);
      } else {
        setTimeout(() => {
          if (logoContainerRef.current) {
            const container = logoContainerRef.current;

            // Remove previous state and transition classes
            container.classList.remove(styles[prevState]);
            container.classList.remove(
              styles[`${prevState}-to-${newState}` as keyof typeof styles]
            );

            // Add new state class
            container.classList.add(styles[newState]);

            if (!isFirstLoad) {
              // Add transition class
              const transitionClass = `${prevState}-to-${newState}`;
              if (styles[transitionClass as keyof typeof styles]) {
                container.classList.add(
                  styles[transitionClass as keyof typeof styles]
                );

                const onAnimationEnd = () => {
                  container.classList.remove(
                    styles[transitionClass as keyof typeof styles]
                  );
                  container.removeEventListener("animationend", onAnimationEnd);
                };
                container.addEventListener("animationend", onAnimationEnd);
              }
            }

            setIsInitialized(true);
            setIsFirstLoad(false);
          }
        }, 800);
      }

      // Update previous state
      prevStateRef.current = newState;
    };

    // Remove all delays and call updateClasses immediately
    updateClasses();
  }, [pathname]);

  return (
    <div
      ref={logoContainerRef}
      className={`${styles.logoContainer} ${styles.home} transition-opacity duration-500`}
      style={{ opacity: isInitialized ? 1 : 0 }}
    >
      <Image src={B} className={styles.bImage} alt="B logo" />
      <Image src={Q} className={styles.qImage} alt="Q logo" />
    </div>
  );
}

export default Logo;
