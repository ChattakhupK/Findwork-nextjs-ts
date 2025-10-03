"use client";

import dynamic from "next/dynamic";

// โหลด MapWork แบบ client only
const MapWrapper = dynamic(() => import("./MapWork"), { ssr: false });

export default MapWrapper;
