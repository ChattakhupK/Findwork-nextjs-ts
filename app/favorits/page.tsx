import { fetchFavorits } from "@/actions/actions";
import EmptyList from "@/components/main/EmptyList";
import WorkList from "@/components/main/WorkList";

const FavoritsPage = async () => {
  const favorites = await fetchFavorits();
  console.log(favorites);

  if (favorites.length === 0) {
    return (
      <div className="my-10">
        <EmptyList heading="ไม่มีงานที่เก็บ" />
      </div>
    );
  }

  return <WorkList works={favorites} />;
};

export default FavoritsPage;
