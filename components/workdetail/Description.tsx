import React from "react";

const Description = ({
  description,
  province,
}: {
  description: string;
  province: string;
}) => {
  return (
    <article className="my-5 flex justify-center items-center flex-col">
      <h4 className="">รายละเอียดของงาน</h4>
      <p className="text-muted-foreground">{description}</p>
      <p className="">จังหวัด : {province}</p>
    </article>
  );
};

export default Description;
