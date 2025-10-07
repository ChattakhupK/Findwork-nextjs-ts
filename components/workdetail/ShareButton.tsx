"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Share } from "lucide-react";
import { Button } from "../ui/button";
import {
  LineShareButton,
  LineIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

const ShareButton = ({ workId, name }: { workId: string; name: string }) => {
  const SHARELINK = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/work/${workId}`;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="favorite">
          <Share color="black" strokeWidth={4} />
          <span className="text-black">แชร์</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="mt-2 flex gap-2 w-full"
        side="bottom"
        align="end"
      >
        <LineShareButton url={SHARELINK} name={name}>
          <LineIcon size={"36px"} />
        </LineShareButton>
        <TwitterShareButton url={SHARELINK} name={name} title={name}>
          <TwitterIcon size={"36px"} />
        </TwitterShareButton>
      </PopoverContent>
    </Popover>
  );
};

export default ShareButton;
