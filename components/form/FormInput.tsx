import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

type FormInput = {
  name: string;
  type: string;
  label: string;
  defaultValue?: string;
  placeholder?: string;
};

const FormInput = ({
  name,
  type,
  label,
  defaultValue,
  placeholder,
}: FormInput) => {
  return (
    <div className="my-2">
      <Label className="mb-2" htmlFor={name}>
        {label}
      </Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default FormInput;
