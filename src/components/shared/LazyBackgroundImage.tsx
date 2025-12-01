import { useRef, useState, useEffect, ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface LazyBackgroundImageProps {
  src: string;
  className?: string;
  children?: ReactNode;
  alt?: string;
}

const LazyBackgroundImage = ({ 
  src, 
  className = '', 
  children,
  alt = 'Background image'
}: LazyBackgroundImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [backgroundImage, setBackgroundImage] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);
  const isInView = useIntersectionObserver(containerRef, { 
    threshold: 0.01, 
    rootMargin: '150px' 
  });

  useEffect(() => {
    if (isInView && !backgroundImage) {
      // Preload a imagem antes de definir como background
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setBackgroundImage(src);
        setIsLoaded(true);
      };
    }
  }, [isInView, src, backgroundImage]);

  return (
    <div
      ref={containerRef}
      className={`${className} transition-opacity duration-700 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
      role="img"
      aria-label={alt}
    >
      {children}
    </div>
  );
};

export default LazyBackgroundImage;
