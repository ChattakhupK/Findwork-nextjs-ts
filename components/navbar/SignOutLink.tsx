"use client";
import { SignOutButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";

const SignOutLink = () => {
  const handleLogout = () => {
    toast("ออกจากระบบสำเร็จ");
  };

  return (
    <SignOutButton redirectUrl="/">
      <Button className="cursor-pointer" onClick={handleLogout} variant="link">
        ออกจากระบบ
      </Button>
    </SignOutButton>
  );
};

export default SignOutLink;
