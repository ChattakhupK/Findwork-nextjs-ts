import { Input } from "../ui/input";
import { Label } from "../ui/label";

type ImageInputProps = {
  label: string;
  name: string;
};
const ImageInput = ({ label, name }: ImageInputProps) => {
  return (
    <div className="my-2">
      <Label className="mb-2" htmlFor={label}>
        {label}
      </Label>
      <Input id={name} name={name} type="file" required accept="image/*" />
    </div>
  );
};
export default ImageInput;
