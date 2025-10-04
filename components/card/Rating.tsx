import { Star } from "lucide-react";

const Rating = () => {
  return (
    <span className="flex gap-0.5">
      <Star className="w-4 h-4" />
      <Star className="w-4 h-4" />
      <Star className="w-4 h-4" />
      <Star className="w-4 h-4" />
      <Star className="w-4 h-4" />
    </span>
  );
};
export default Rating;
