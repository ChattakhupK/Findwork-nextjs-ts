"use client";
import { WorkCardProps } from "@/utils/types";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import HeroInfo from "./HeroInfo";

const Hero = ({ works }: { works: WorkCardProps[] }) => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper my-10 rounded-2xl"
      >
        {works.map((work) => {
          return (
            <SwiperSlide
              className="group relative"
              key={work.id}
              style={{ position: "relative", width: "100%", height: "500px" }}
            >
              <Image
                className="group-hover:brightness-50 transition-all duration-300"
                src={work.image}
                alt={work.name}
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <HeroInfo work={work} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Hero;
