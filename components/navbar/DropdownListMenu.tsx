import { TextAlignJustify } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import UserIcon from "./UserIcon";
import Link from "next/link";
import { links } from "@/utils/links";
import SignOutLink from "./SignOutLink";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import SignInLink from "./SignInLink";
import SignUpLink from "./SignUpLink";

const DropdownListMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="cursor-pointer" variant={"outline"}>
          <TextAlignJustify />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2">
        <SignedIn>
          <div className="flex justify-center">
            <DropdownMenuLabel>บัญชีของฉัน</DropdownMenuLabel>
          </div>
          <DropdownMenuSeparator />
        </SignedIn>
        <SignedOut>
          <DropdownMenuItem className="!cursor-pointer">
            <SignInLink />
          </DropdownMenuItem>
          <DropdownMenuItem className="!cursor-pointer">
            <SignUpLink />
          </DropdownMenuItem>
        </SignedOut>
        <SignedIn>
          {links.map((item) => (
            <Link key={item.label} href={item.href}>
              <DropdownMenuItem className="!cursor-pointer">
                {item.label}
              </DropdownMenuItem>
            </Link>
          ))}
          <DropdownMenuSeparator />
          <div className="flex justify-center">
            <SignOutLink />
          </div>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownListMenu;
