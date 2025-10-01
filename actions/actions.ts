"use server";
import { profileSchema, validateWithZod } from "@/utils/schemas";

const renderError = (error: unknown): { message: string } => {
  return {
    message: error instanceof Error ? error.message : "ข้อผิดพลาดสักอย่าง",
  };
};

export const createProfileAction = async (
  prevState: unknown,
  formData: FormData
) => {
  try {
    const rawData = Object.fromEntries(formData);
    const validate = validateWithZod(profileSchema, rawData);
    console.log("validate", validate);
    return { message: "สร้างโปรไฟล์สำเร็จ!" };
  } catch (err) {
    console.log(err);
    return renderError(err);
  }
};
