import { z, ZodSchema } from "zod";
export const profileSchema = z.object({
  firstName: z.string().min(2, { message: "ตัวอักษรต้องมากกว่า 5 ตัวอักษร" }),
  lastName: z.string().min(2, { message: "ตัวอักษรต้องมากกว่า 5 ตัวอักษร" }),
  userName: z.string().min(2, { message: "ตัวอักษรต้องมากกว่า 2 ตัวอักษร" }),
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
