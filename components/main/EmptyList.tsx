import Link from "next/link";
import { Button } from "../ui/button";

type EmptyListProps = {
  heading?: string;
  message?: string;
  btnText?: string;
};

const EmptyList = ({
  heading = "ไม่มีงาน",
  message = "กรุณาลองใหม่อีกครั้ง",
  btnText = "กลับหน้าแรก",
}: EmptyListProps) => {
  return (
    <div className="text-center border rounded-2xl p-5 py-10">
      <h3 className="font-bold">{heading}</h3>
      <p>{message}</p>
      <Link href={"/"}>
        <Button className="mt-2 cursor-pointer" variant={"outline"}>
          {btnText}
        </Button>
      </Link>
    </div>
  );
};

export default EmptyList;
