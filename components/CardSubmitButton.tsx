import React from "react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";
import { Cross } from "lucide-react";
import { Spinner } from "./ui/spinner";

const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" size={"icon"} variant={"favorite"}>
      {pending ? (
        <Spinner className="text-black" />
      ) : isFavorite ? (
        <Cross stroke="black" fill="black" />
      ) : (
        <Cross stroke="black" />
      )}
    </Button>
  );
};

export default CardSubmitButton;
