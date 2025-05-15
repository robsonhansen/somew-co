"use client";

import { useEffect, useRef, useState } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export function useIntersectionObserver(
  options?: IntersectionObserverOptions
): [React.RefObject<HTMLVideoElement | null>, boolean] {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting) {
          video.play().catch(error => console.error("Error attempting to play video:", error));
        } else {
          video.pause();
        }
      });
    }, options);

    observer.observe(video);

    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, [options, videoRef]);

  return [videoRef, isIntersecting];
}

