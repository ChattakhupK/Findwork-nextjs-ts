import SubmitButtons from "@/components/form/SubmitButtons";
import FormInput from "@/components/form/FormInput";
import FormContainer from "@/components/form/FormContainer";
import { createProfileAction } from "@/actions/actions";

const CreatePage = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-10">
      <h1 className="font-bold text-2xl">กรอกข้อมูลการสมัคร</h1>
      <div className="border p-10 rounded-2xl my-5 w-full">
        <FormContainer action={createProfileAction}>
          <div className="grid md:grid-cols-2 gap-5">
            <FormInput
              name="firstName"
              label="ชื่อ"
              type="text"
              placeholder="กรุณาพิมพ์ชื่อ..."
            />
            <FormInput
              name="lastName"
              label="นามสกุล"
              type="text"
              placeholder="กรุณาพิมพ์นามสกุล..."
            />
            <FormInput
              name="userName"
              label="ชื่อผู้ใช้"
              type="text"
              placeholder="กรุณาพิมพ์ชื่อผู้ใช้..."
            />
          </div>
          <SubmitButtons size="default" text="สร้างโปรไฟล์" />
        </FormContainer>
      </div>
    </section>
  );
};

export default CreatePage;
