import { Cross, Flame } from "lucide-react";
import { Button } from "../ui/button";
import { auth } from "@clerk/nextjs/server";
import { fetchFavoriteId } from "@/actions/actions";
import FavoriteForm from "./FavoriteForm";
import { SignInCardButton } from "../SignInCardButton";

type FavoriteButtonProps = {
  workId: string;
};

const FavoriteButton = async ({ workId }: FavoriteButtonProps) => {
  const { userId } = await auth();
  if (!userId) return <SignInCardButton />;
  const favoriteId = await fetchFavoriteId({ workId });

  return <FavoriteForm favoriteId={favoriteId} workId={workId} />;
};

export default FavoriteButton;
