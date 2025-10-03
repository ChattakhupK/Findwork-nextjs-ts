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
    </div>
  );
};

export default TextAreaInput;
