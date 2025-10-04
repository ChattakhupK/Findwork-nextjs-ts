import { fetchFavorits } from "@/actions/actions";
import WorkList from "@/components/main/WorkList";

const FavoritsPage = async () => {
  const favorites = await fetchFavorits();
  console.log(favorites);
  return <WorkList works={favorites} />;
};

export default FavoritsPage;
