import { SignInButton, SignUpButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "../ui/button";

const SignUpLink = () => {
  return (
    <SignUpButton mode="modal">
      <Button className="cursor-pointer w-full" variant="link">
        สมัครสมาชิก
      </Button>
    </SignUpButton>
  );
};

export default SignUpLink;
