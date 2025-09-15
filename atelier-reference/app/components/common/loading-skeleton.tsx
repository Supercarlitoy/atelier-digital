

interface LoadingSkeletonProps {
  variant?: 'card' | 'text' | 'avatar' | 'button';
  width?: string;
  height?: string;
  className?: string;
  count?: number;
}

const LoadingSkeleton = ({ 
  variant = 'card', 
  width, 
  height, 
  className = '', 
  count = 1 
}: LoadingSkeletonProps) => {
  const skeletons = Array.from({ length: count }, (_, index) => (
    <div key={index} className={`skeleton skeleton--${variant} ${className}`} style={{ width, height }}>
      <div className="skeleton__shimmer"></div>
    </div>
  ));

  return count === 1 ? skeletons[0] : <>{skeletons}</>;
};

export default LoadingSkeleton;
