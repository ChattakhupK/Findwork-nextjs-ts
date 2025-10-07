import { fetchWorkDetail } from "@/actions/actions";
import Breadcrumbs from "@/components/workdetail/Breadcrumbs";
import FavoriteButton from "@/components/card/FavoriteButton";
import { redirect } from "next/navigation";
import React from "react";
import ImageContainer from "@/components/workdetail/ImageContainer";
import Description from "@/components/workdetail/Description";
import MapWrapper from "@/components/map/MapWrapper";
import ShareButton from "@/components/workdetail/ShareButton";

const WorkDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const workDetail = await fetchWorkDetail({ id });
  if (!workDetail) redirect("/");

  return (
    <section>
      <Breadcrumbs name={workDetail.name} />
      <header className="mt-5 flex justify-between items-center">
        <h1 className="text-3xl">{workDetail.name}</h1>
        <div className="flex items-center gap-x-2">
          <ShareButton workId={workDetail.id} name={workDetail.name} />
          <FavoriteButton workId={workDetail.id} />
        </div>
      </header>
      <ImageContainer image={workDetail.image} name={workDetail.name} />
      <section className="mb-10">
        <div className="border-2 mt-5 p-5">
          <Description
            description={workDetail.description}
            province={workDetail.province}
          />
          <div className="mx-auto w-full lg:w-3/4">
            <MapWrapper
              location={{ lat: workDetail.lat, lng: workDetail.lng }}
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default WorkDetailPage;
