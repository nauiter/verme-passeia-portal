import { useRef, useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  width?: string | number;
  height?: string | number;
  fallbackColor?: string;
}

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  fallbackColor = 'bg-muted/10',
  ...props 
}: LazyImageProps) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageSrc, setImageSrc] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);
  const isInView = useIntersectionObserver(imageRef, { 
    threshold: 0.01, 
    rootMargin: '100px' 
  });

  useEffect(() => {
    if (isInView && !imageSrc) {
      setImageSrc(src);
    }
  }, [isInView, src, imageSrc]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <img
      ref={imageRef}
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={`${className} transition-opacity duration-700 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      onLoad={handleLoad}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
};

export default LazyImage;
