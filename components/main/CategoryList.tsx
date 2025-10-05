import { categories } from "@/utils/categories";
import Link from "next/link";

const CategoryList = ({
  search,
  category,
}: {
  search?: string;
  category?: string;
}) => {
  const searchTerm = search ? `&search=${search}` : "";

  return (
    <div className="w-full flex justify-center mb-10 gap-10">
      {categories.map((item) => {
        const isActive = item.label === category;

        return (
          <Link href={`/?category=${item.label}${searchTerm}`} key={item.label}>
            <article
              className={`flex flex-col items-center hover:text-primary hover:scale-105 duration-200 justify-center ${
                isActive && "text-primary"
              }`}
            >
              <item.icon />
              <p>{item.label}</p>
            </article>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryList;
