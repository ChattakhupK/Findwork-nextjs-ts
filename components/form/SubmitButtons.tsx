"use client";
import React from "react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
import { LoaderCircle } from "lucide-react";

type SubmitButtonsProps = {
  className?: string;
  size?: "default" | "icon" | "lg" | "sm";
  text: string;
};

const SubmitButtons = ({ className, size, text }: SubmitButtonsProps) => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      size={size}
      type="submit"
      className={`${className} capitalize cursor-pointer`}
    >
      {pending ? (
        <>
          <LoaderCircle className="animate-spin" />
          {text}
        </>
      ) : (
        text
      )}
    </Button>
  );
};

export default SubmitButtons;
