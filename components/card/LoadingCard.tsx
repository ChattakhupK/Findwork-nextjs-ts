import { Skeleton } from "../ui/skeleton";

const LoadingCard = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />  
      <SkeletonCard />  
      <SkeletonCard />  
    </div>
  );
};

const SkeletonCard = () => {
  return (
    <div className="flex flex-col space-y-2">
      <Skeleton className="h-[300px] rounded-2xl mb-2" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 max-w-[350px] w-1/3" />
    </div>
  );
};

export default LoadingCard;
