import React from "react";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";

type LabeledInputProps = {
  label: string;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export function LabeledInput({
  label,
  name,
  value,
  onChange,
  placeholder,
}: LabeledInputProps) {
  return (
    <InputGroup>
      <InputLeftAddon>{label}</InputLeftAddon>
      <Input name={name} onChange={onChange} placeholder={placeholder}>
        {value}
      </Input>
    </InputGroup>
  );
}

export default LabeledInput;
