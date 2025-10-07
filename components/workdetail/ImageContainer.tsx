import Image from "next/image";
import React from "react";

const ImageContainer = ({ image, name }: { image: string; name: string }) => {
  return (
    <section className="h-[300px] md:h-[500px] relative mt-5">
      <Image
        src={image}
        sizes="100vw"
        fill
        alt={name}
        priority
        className="object-cover"
      />
    </section>
  );
};

export default ImageContainer;
