"use client";

import {
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

const iconUrl =
  "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png";
const markerIcon = L.icon({
  iconUrl: iconUrl,
  iconSize: [20, 30],
});

type LatLng = [number, number];
type LocationMarkerProps = {
  position: LatLng | null;
  setPosition: (position: LatLng) => void;
};
function LocationMarker({ position, setPosition }: LocationMarkerProps) {
  const map = useMapEvents({
    click(e) {
      const newLocat: LatLng = [e.latlng.lat, e.latlng.lng];
      setPosition(newLocat);
      map.flyTo(e.latlng);
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={markerIcon}>
      <Popup>จุดจ่ายเงินของคุณ</Popup>
    </Marker>
  );
}

type MapWorkProps = {
  location?: { lat: number; lng: number };
};
const MapWork = ({ location }: MapWorkProps) => {
  const defaultLocation: LatLng = [14, 101];
  const [position, setPosition] = useState<LatLng | null>(null);

  return (
    <MapContainer
      className="h-100 z-0"
      center={location || defaultLocation}
      zoom={7}
      scrollWheelZoom={false}
    >
      <LocationMarker position={position} setPosition={setPosition} />
      <input type="hidden" name="lat" value={position ? position[0] : ""} />
      <input type="hidden" name="lng" value={position ? position[1] : ""} />

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};
export default MapWork;
