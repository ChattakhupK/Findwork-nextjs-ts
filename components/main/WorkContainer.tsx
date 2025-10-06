import { fetchWorkAction, fetchWorkHero } from "@/actions/actions";
import WorkList from "./WorkList";
import { WorkCardProps } from "@/utils/types";
import Hero from "../hero/Hero";
import CategoryList from "./CategoryList";
import EmptyList from "./EmptyList";

const WorkContainer = async ({
  search,
  category,
}: {
  search?: string;
  category?: string;
}) => {
  const works: WorkCardProps[] = await fetchWorkAction({ search, category });
  const worksHero: WorkCardProps[] = await fetchWorkHero();
  //   console.log(works);
  return (
    <div className="mb-5">
      <Hero works={worksHero} />
      <CategoryList search={search} category={category} />
      {works.length === 0 ? <EmptyList /> : <WorkList works={works} />}
    </div>
  );
};
export default WorkContainer;
