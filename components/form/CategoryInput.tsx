import { categories } from "@/utils/categories";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CategoryInput = ({
  defaultValue,
  name,
}: {
  defaultValue?: string;
  name: string;
}) => {
  return (
    <div className="my-2">
      <Label className="mb-2" htmlFor="name">
        {name}
      </Label>
      <Select
        defaultValue={defaultValue || categories[0].label}
        name={name}
        required
      >
        <SelectTrigger className="min-w-[180px] w-full">
          <SelectValue placeholder="กรุณาเลิอกหมวดหมู่" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((item) => (
            <SelectItem key={item.label} value={item.label}>
              <span className="capitalize flex gap-2">
                <item.icon />
                {item.label}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoryInput;
