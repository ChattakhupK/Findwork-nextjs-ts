import { SignInButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "./ui/button";
import { Cross } from "lucide-react";

export const SignInCardButton = () => {
  return (
    <SignInButton mode="modal">
      <Button size={"icon"} variant={"favorite"}>
        <Cross stroke="black" />
      </Button>
    </SignInButton>
  );
};
