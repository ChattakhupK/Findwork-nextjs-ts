import { WorkCardProps } from "@/utils/types";
import Image from "next/image";
import Rating from "./Rating";
import FavoriteButton from "./FavoriteButton";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const WorkCard = ({ work }: { work: WorkCardProps }) => {
  const { image, name, id, description, province, lat, lng, category, price } =
    work;

  return (
    <article className="group relative">
      <Link href={`/work/${id}`}>
        <div className="relative h-[300px] rounded-2xl overflow-hidden mb-2">
          <Image
            src={image}
            sizes="(max-width:768px) 100vw 50vw"
            alt={name}
            fill
            className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold mt-1">{name}</h2>
          <Rating />
        </div>
        <div className="mt-1 flex items-center justify-between text-sm">
          <span className="font-semibold">{price} บาท</span>
          <p>{province}</p>
        </div>
        <p className="text-sm mt-1 text-muted-foreground truncate">
          {description}
        </p>
      </Link>
      <div className="absolute top-3 right-3">
        <FavoriteButton workId={id} />
      </div>
      <div className="absolute top-3 left-3">
        <Badge variant="favorite">{category}</Badge>
      </div>
    </article>
  );
};
export default WorkCard;
