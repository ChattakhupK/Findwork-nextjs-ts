import { SignInButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "../ui/button";

const SignInLink = () => {
  return (
    <SignInButton mode="modal">
      <Button className="cursor-pointer w-full" variant="ghost">
        เข้าสู่ระบบ
      </Button>
    </SignInButton>
  );
};

export default SignInLink;
