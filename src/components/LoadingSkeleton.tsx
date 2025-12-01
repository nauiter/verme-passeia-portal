const LoadingSkeleton = () => {
  return (
    <div className="min-h-screen bg-background animate-pulse">
      {/* Section Skeleton */}
      <section className="relative min-h-screen flex items-center justify-center py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Title Skeleton */}
            <div className="h-12 bg-muted/20 rounded w-3/4 mx-auto"></div>
            
            {/* Text Skeletons */}
            <div className="space-y-4">
              <div className="h-4 bg-muted/20 rounded w-full"></div>
              <div className="h-4 bg-muted/20 rounded w-5/6 mx-auto"></div>
              <div className="h-4 bg-muted/20 rounded w-4/6 mx-auto"></div>
            </div>
            
            {/* Button Skeleton */}
            <div className="h-12 bg-muted/20 rounded w-48 mx-auto"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoadingSkeleton;
