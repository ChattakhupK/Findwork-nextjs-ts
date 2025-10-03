import { number, z, ZodSchema } from "zod";
export const profileSchema = z.object({
  firstName: z.string().min(2, { message: "ตัวอักษรต้องมากกว่า 5 ตัวอักษร" }),
  lastName: z.string().min(2, { message: "ตัวอักษรต้องมากกว่า 5 ตัวอักษร" }),
  userName: z.string().min(2, { message: "ตัวอักษรต้องมากกว่า 2 ตัวอักษร" }),
});

const validateImage = () => {
  const maxFileSize = 1024 * 1024;
  return z.instanceof(File).refine((file) => {
    return file.size <= maxFileSize;
  }, "ไฟล์รูปภาพมีขนาดมากกว่า 1 mb");
};

export const imageSchema = z.object({
  image: validateImage(),
});

export const workSchema = z.object({
  name: z
    .string()
    .min(5, { message: "ตัวอักษรต้องการมากกว่า 5 ตัวอักษร" })
    .max(30, { message: "ตัวอักษรต้องไม่เกิน 30 ตัวอักษร" }),
  category: z.string(),
  description: z
    .string()
    .max(200, { message: "ตัวอักษรต้องไม่เกิน 200 ตัวอักษร" }),
  price: z.coerce
    .number()
    .int()
    .min(0, { message: "ค่าจ้างต้องไม่ต่ำกว่า 0 บาท" }),
  province: z.string(),
  lat: z.coerce.number(),
  lng: z.coerce.number(),
});

export const validateWithZod = <T>(schema: ZodSchema<T>, data: unknown): T => {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.issues.map((err) => err.message);
    // console.log(errors);
    throw new Error(errors.join(","));
  }

  return result.data;
};
