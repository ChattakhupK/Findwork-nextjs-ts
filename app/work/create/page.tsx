import { createWorkAction } from "@/actions/actions";
import CategoryInput from "@/components/form/CategoryInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInput from "@/components/form/ImageInput";
import ProvinceInput from "@/components/form/ProvinceInput";
import SubmitButtons from "@/components/form/SubmitButtons";
import TextAreaInput from "@/components/form/TextAreaInput";
import MapWork from "@/components/map/MapWork";
import MapWrapper from "@/components/map/MapWrapper";

import React from "react";

const CreateWorkPage = async () => {
  return (
    <section className="flex flex-col items-center justify-center mt-10">
      <div className="border p-10 rounded-2xl my-5 w-full">
        <h1 className="text-center font-bold text-2xl mb-10">
          กรอกข้อมูลสร้างงาน
        </h1>
        <FormContainer action={createWorkAction}>
          <div className="grid md:grid-cols-2 md:gap-5">
            <FormInput
              name="name"
              label="ชื่องาน"
              type="text"
              placeholder="กรุณาพิมพ์ชื่องาน..."
            />
            <CategoryInput label="หมวดหมู่" name="category" />
          </div>
          <TextAreaInput
            name="description"
            label="รายละเอียด"
            defaultValue=""
          />
          <div className="grid md:grid-cols-2 md:gap-5">
            <FormInput
              name="price"
              label="จำนวนเงิน"
              type="number"
              placeholder="ยอดเงินที่ได้ให้..."
            />
            <ProvinceInput label="จังหวัดที่จ่ายงาน" name="province" />
          </div>
          <div className="my-4">
            <ImageInput label="รูปภาพ" name="image" />
            <MapWrapper editable={true} />
          </div>
          <SubmitButtons size="default" text="สร้างงาน" />
        </FormContainer>
      </div>
    </section>
  );
};
export default CreateWorkPage;
