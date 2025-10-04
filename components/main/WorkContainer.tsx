import { fetchWorkAction } from "@/actions/actions";
import WorkList from "./WorkList";
import { WorkCardProps } from "@/utils/types";

const WorkContainer = async () => {
  const works: WorkCardProps[] = await fetchWorkAction();
  //   console.log(works);

  return (
    <div>
      <WorkList works={works} />
    </div>
  );
};
export default WorkContainer;
