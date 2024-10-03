"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import FrozenRoute from "./FrozenRoute";
import { useEffect, useRef, useCallback } from "react";

type Direction = "left" | "right" | "none" | "up";

const PageAnimatePresence = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    prevPathnameRef.current = pathname;
  }, [pathname]);

  const isKnowledgeOrNews = useCallback(
    (path: string) =>
      path === "/knowledge" ||
      path.startsWith("/news") ||
      path.startsWith("/contacts") ||
      path.startsWith("/privacy-policy"),
    []
  );

  const isSideContent = useCallback(
    (path: string) =>
      path.startsWith("/projects/") ||
      path === "/about" ||
      path === "/contacts" ||
      path === "/privacy-policy",
    []
  );

  const getDirection = useCallback((): Direction => {
    const prevPath = prevPathnameRef.current;
    const currentPath = pathname;

    if (isSideContent(currentPath) && !isSideContent(prevPath)) {
      return "up";
    }

    if (isKnowledgeOrNews(prevPath) && isKnowledgeOrNews(currentPath)) {
      return "none";
    }

    if (isKnowledgeOrNews(currentPath)) {
      return "right";
    }

    if (isKnowledgeOrNews(prevPath)) {
      return "left";
    }

    return "none";
  }, [pathname, isKnowledgeOrNews, isSideContent]);

  const getAnimationDuration = useCallback((direction: Direction): number => {
    return direction === "left" || direction === "right" ? 1 : 0.5;
  }, []);

  const variants = {
    initial: (direction: Direction) => {
      switch (direction) {
        case "up":
          return { y: "100%", opacity: 0 };
        case "right":
          return { x: "100%", opacity: 0 };
        case "left":
          return { x: "-100%", opacity: 0 };
        default:
          return { x: 0, opacity: 0 };
      }
    },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: (direction: Direction) => {
      switch (direction) {
        case "up":
          return { y: "-100%", opacity: 0 };
        case "right":
          return { x: "-100%", opacity: 0 };
        case "left":
          return { x: "100%", opacity: 0 };
        default:
          return { x: 0, opacity: 0 };
      }
    },
  };

  const direction = getDirection();
  const duration = getAnimationDuration(direction);

  return (
    <MotionConfig transition={{ type: "tween", duration }}>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={pathname}
          custom={direction}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <FrozenRoute>{children}</FrozenRoute>
        </motion.div>
      </AnimatePresence>
    </MotionConfig>
  );
};

export default PageAnimatePresence;
