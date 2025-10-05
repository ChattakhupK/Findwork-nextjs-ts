import { WorkCardProps } from "@/utils/types";
import WorkCard from "../card/WorkCard";
import LoadingCard from "../card/LoadingCard";

const WorkList = ({ works }: { works: WorkCardProps[] }) => {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {works.map((item) => {
        return <WorkCard key={item.id} work={item} />;
      })}
    </section>
  );
};
export default WorkList;
