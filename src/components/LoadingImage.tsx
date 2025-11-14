import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function LoadingImage(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  const { className, style, ...rest } = props;

  return (
    <div className="relative w-full h-full">
      {/* Gray skeleton frame */}
      {!isLoaded && (
        <div 
          className={`absolute inset-0 bg-neutral-200 dark:bg-neutral-800 animate-pulse rounded-inherit ${className || ''}`}
          style={style}
        />
      )}
      
      {/* Image with fade-in effect */}
      <ImageWithFallback
        {...rest}
        className={`transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className || ''}`}
        style={style}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
}
