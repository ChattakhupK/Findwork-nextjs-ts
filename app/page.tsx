import LoadingCard from "@/components/card/LoadingCard";
import WorkContainer from "@/components/main/WorkContainer";
import { Suspense } from "react";

const page = async ({
  searchParams,
}: {
  searchParams: { search?: string; category?: string };
}) => {
  const { search, category } = await searchParams;

  return (
    <>
      <Suspense fallback={<LoadingCard />}>
        <WorkContainer search={search} category={category} />
      </Suspense>
    </>
  );
};

export default page;
