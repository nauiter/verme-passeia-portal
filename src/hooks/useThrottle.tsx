import { useEffect, useRef, useCallback } from 'react';

export const useThrottle = (callback: () => void, delay: number) => {
  const lastRan = useRef(Date.now());

  const throttledCallback = useCallback(() => {
    const now = Date.now();
    if (now - lastRan.current >= delay) {
      callback();
      lastRan.current = now;
    }
  }, [callback, delay]);

  return throttledCallback;
};

export const usePrefersReducedMotion = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  return prefersReducedMotion.matches;
};
