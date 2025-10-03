import { provinces } from "@/utils/province";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type ProvinceInputProps = {
  name: string;
  label: string;
  defaultValue?: string;
};
const ProvinceInput = ({ name, label, defaultValue }: ProvinceInputProps) => {
  return (
    <div className="my-2">
      <Label className="mb-2" htmlFor={name}>
        {label}
      </Label>
      <Select
        defaultValue={defaultValue || provinces[0].provinceNameTh}
        name={name}
        required
      >
        <SelectTrigger className="min-w-[180px] w-full">
          <SelectValue placeholder="กรุณาเลิอกหมวดหมู่" />
        </SelectTrigger>
        <SelectContent>
          {provinces.map((item) => (
            <SelectItem key={item.id} value={item.provinceNameTh}>
              <span className="capitalize flex gap-2">
                {item.provinceNameTh}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
export default ProvinceInput;
