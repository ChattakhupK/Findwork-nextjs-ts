"use client";
import { FormContainerProps } from "@/utils/types";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

const FormContainer = ({ children, action }: FormContainerProps) => {
  const [state, formAction] = useActionState(action, { message: "" });
  console.log(state);

  useEffect(() => {
    if (state.message) {
      toast(state.message);
    }
  }, [state]);

  return (
    <form action={formAction} className="max-w-lg mx-auto">
      {children}
    </form>
  );
};

export default FormContainer;
