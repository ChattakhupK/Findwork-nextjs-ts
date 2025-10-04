"use server";
import {
  imageSchema,
  profileSchema,
  validateWithZod,
  workSchema,
} from "@/utils/schemas";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import db from "@/utils/db";
import { redirect } from "next/navigation";
import { uploadFile } from "@/utils/supabase";
import { revalidatePath } from "next/cache";

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) throw new Error("คุณต้องเข้าสู่ระบบก่อน!");

  if (!user.privateMetadata.hasProfile) redirect("/profile/create");
  return user;
};

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
    const user = await currentUser();
    if (!user) throw new Error("กรุณาเข้าสู่ระบบก่อน!");

    // validate form
    const rawData = Object.fromEntries(formData);
    const validateData = await validateWithZod(profileSchema, rawData);

    // save profile
    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? "",
        ...validateData,
      },
    });

    // update clerk metadata
    const client = await clerkClient();
    await client.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });

    // return { success: true, message: "สร้างโปรไฟล์สำเร็จ!" };
  } catch (err) {
    // console.log(err);
    return renderError(err);
  }
  redirect("/");
};

export const createWorkAction = async (
  prevState: unknown,
  formData: FormData
): Promise<{ message: string }> => {
  try {
    const user = await getAuthUser();
    if (!user) throw new Error("เข้าสู่ระบบก่อน!");

    const rawData = Object.fromEntries(formData);
    const file = formData.get("image") as File;

    // 1 validate Data
    const validatedFile = validateWithZod(imageSchema, { image: file });
    const validatedData = validateWithZod(workSchema, rawData);
    // console.log(validatedData.description);

    // 2 upload Image to supabase
    const fullPath = await uploadFile(validatedFile.image);
    // console.log(fullPath);
    // 3 insert to DB
    await db.work.create({
      data: { ...validatedData, image: fullPath, profileId: user.id },
    });

    // return { message: "สร้างงานสำเร็จ!" };
  } catch (err) {
    return renderError(err);
  }
  redirect("/");
};

export const fetchWorkAction = async () => {
  const work = await db.work.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return work;
};

export const fetchFavoriteId = async ({ workId }: { workId: string }) => {
  const user = await getAuthUser();

  const favorite = await db.favorite.findFirst({
    where: {
      workId: workId,
      profileId: user.id,
    },
    select: {
      id: true,
    },
  });

  return favorite?.id || null;
};

export const toggleFavoriteAction = async (prevState: {
  favoriteId: string | null;
  workId: string;
  pathname: string;
}) => {
  const { favoriteId, workId, pathname } = prevState;
  const user = await getAuthUser();
  try {
    // remove if have fav
    if (favoriteId) {
      await db.favorite.delete({
        where: {
          id: favoriteId,
        },
      });
    } else {
      // create if no fav
      await db.favorite.create({
        data: {
          workId: workId,
          profileId: user.id,
        },
      });
    }
    revalidatePath(pathname);
    return { message: favoriteId ? "ลบจัดเก็บงาน" : "เพิ่มจัดเก็บงาน" };
    console.log(prevState);
  } catch (err) {
    return renderError(err);
  }
};

export const fetchFavorits = async () => {
  const user = await getAuthUser();

  const favorites = await db.favorite.findMany({
    where: {
      profileId: user.id,
    },
    select: {
      work: {
        select: {
          id: true,
          name: true,
          description: true,
          image: true,
          price: true,
          province: true,
          lat: true,
          lng: true,
          category: true,
        },
      },
    },
  });

  return favorites.map((fav) => fav.work);
};
