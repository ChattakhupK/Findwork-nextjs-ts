import { Spinner } from "@/components/ui/spinner";
import React from "react";

const loading = () => {
  return (
    <div className="w-full flex justify-center my-10">
      <div className="flex justify-center items-center gap-2">
        <Spinner />
        กำลังโหลดข้อมูล โปรดรอสักครู่...
      </div>
    </div>
  );
};

export default loading;
