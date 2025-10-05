import { fetchWorkAction } from "@/actions/actions";
import WorkList from "./WorkList";
import { WorkCardProps } from "@/utils/types";
import Hero from "../hero/Hero";
import CategoryList from "./CategoryList";

const WorkContainer = async ({
  search,
  category,
}: {
  search?: string;
  category?: string;
}) => {
  const works: WorkCardProps[] = await fetchWorkAction({ search, category });
  //   console.log(works);

  return (
    <div>
      <Hero works={works} />
      <CategoryList search={search} category={category} />
      <WorkList works={works} />
    </div>
  );
};
export default WorkContainer;
