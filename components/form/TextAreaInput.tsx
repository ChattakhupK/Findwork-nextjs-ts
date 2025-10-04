import { Textarea } from "@/components/ui/textarea";
import { Label } from "../ui/label";

type TextAreaInputProps = {
  name: string;
  label: string;
  defaultValue?: string;
};

const TextAreaInput = ({ name, label, defaultValue }: TextAreaInputProps) => {
  return (
    <div className="my-2">
      <Label className="mb-2" htmlFor={name}>
        {label}
      </Label>
      <Textarea id={name} name={name} defaultValue={defaultValue} required />
      <p className="text-muted-foreground text-[12px] mt-2">
        รายละเอียดข้อมูลไม่ควรเกิน 200 ตัวอักษร
      </p>
    </div>
  );
};

export default TextAreaInput;
