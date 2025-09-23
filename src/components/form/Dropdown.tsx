"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller, Control } from "react-hook-form";

type Option = {
  label: string;
  value: string;
};

type TProps = {
  label: string;
  name: string;
  options: Option[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  placeholder?: string;
};

const Dropdown = ({ label, name, options, control, placeholder }: TProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-navy-100 rounded-[12px] px-4 pt-[10px] cursor-pointer pb-1 ${
        open ? "border border-navy-200" : "border border-transparent"
      }`}
      onClick={() => setOpen(true)}
    >
      <label className="block text-sm font-semibold text-neutral-700">
        {label}
      </label>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            open={open}
            onOpenChange={setOpen}
            value={field.value}
            onValueChange={field.onChange} // connect react-hook-form
          >
            <SelectTrigger
              className={`w-full shadow-none border-0 px-0 focus:ring-0 text-lg text-neutral-500 ${
                open && "text-neutral-700"
              }`}
            >
              <SelectValue placeholder={placeholder || "Select an option"} />
            </SelectTrigger>
            <SelectContent className="shadow-none dropdown-shadow border-navy-200 top-2">
              <SelectGroup>
                {options.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      />
    </div>
  );
};

export default Dropdown;
