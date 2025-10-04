"use client";
import { toggleFavoriteAction } from "@/actions/actions";
import FormContainer from "../form/FormContainer";
import { Button } from "../ui/button";
import { Cross } from "lucide-react";
import { usePathname } from "next/navigation";
import CardSubmitButton from "../CardSubmitButton";

type FavoriteFormProps = {
  favoriteId: string | null;
  workId: string;
};

const FavoriteForm = ({ favoriteId, workId }: FavoriteFormProps) => {
  const pathname = usePathname();
  console.log(pathname);

  const toggleAction = toggleFavoriteAction.bind(null, {
    favoriteId,
    workId,
    pathname,
  });

  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={favoriteId ? true : false} />
    </FormContainer>
  );
};

export default FavoriteForm;

// <Button size={"icon"} variant={"favorite"}>
//   <Cross stroke="black" />
// </Button>
