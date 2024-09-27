import { useState, useEffect } from 'react';

type ScreenSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export function useScreenSize(): ScreenSize {
  const [screenSize, setScreenSize] = useState<ScreenSize>('sm');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= breakpoints['2xl']) {
        setScreenSize('2xl');
      } else if (width >= breakpoints.xl) {
        setScreenSize('xl');
      } else if (width >= breakpoints.lg) {
        setScreenSize('lg');
      } else if (width >= breakpoints.md) {
        setScreenSize('md');
      } else {
        setScreenSize('sm');
      }
    };

    // Set the initial screen size
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
}