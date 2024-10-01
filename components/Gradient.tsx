"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
  useSpring,
  useMotionTemplate
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const originalColorPairs = [
  ["#964D51", "#EBECF0"],
  ["#7D90B4", "#EBECF0"],
  ["#AC9A99", "#EBECF0"],
  ["#AC9A99", "#AC9A99"],
];

// Duplicate the first pair at the end for smooth looping
const colorPairs = [...originalColorPairs, originalColorPairs[0]];

export default function Gradient() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const colorProgress = useMotionValue(0);
  const prevAngle = useRef(0);

  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this breakpoint as needed
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useAnimationFrame((t) => {
    if (!isActive) {
      const progress = (t % 20000) / 20000; // Complete cycle every 20 seconds
      colorProgress.set(progress);
    }
  });

  const fromColor = useTransform(
    colorProgress,
    colorPairs.map((_, i) => i / (colorPairs.length - 1)),
    colorPairs.map((pair) => pair[0])
  );

  const toColor = useTransform(
    colorProgress,
    colorPairs.map((_, i) => i / (colorPairs.length - 1)),
    colorPairs.map((pair) => pair[1])
  );

  const calculateAngle = ([x, y]: number[]) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    let angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) + 90;

    // Normalize the angle
    while (angle - prevAngle.current > 180) angle -= 360;
    while (angle - prevAngle.current < -180) angle += 360;

    prevAngle.current = angle;
    return angle;
  };

  const smoothAngle = useSpring(
    useTransform([mouseX, mouseY], calculateAngle),
    { stiffness: 5, damping: 10 }
  );


  useEffect(() => {
    if (isMobile) {
      setIsActive(true);
    }
  }, [isMobile]);

  return (
    <motion.div
      className="w-screen h-screen fixed top-0 left-0 z-[39]" // Add responsive classes
      style={{
        background: useMotionTemplate`linear-gradient(${smoothAngle}deg, ${fromColor}, ${toColor})`,
      }}
      animate={{
        opacity: !isActive ? 1 : 0,
        transition: { duration: 3 },
        pointerEvents: !isActive ? ("auto" as const) : ("none" as const),
        cursor: isActive ? "none" as const : "pointer" as const,
      }}
      onClick={() => setIsActive(true)}
    />
  );
}
