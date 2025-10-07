"use client";
import dynamic from "next/dynamic";

const MapWork = dynamic(() => import("./MapWork"), { ssr: false });

export default function MapWrapper({
  location,
  editable,
}: {
  location?: { lat: number; lng: number };
  editable?: boolean;
}) {
  console.log(location);
  return <MapWork location={location} editable={editable} />;
}
