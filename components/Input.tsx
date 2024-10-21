import { ChangeEvent, FC } from "react";

interface InputProps {
  value?: string | number;
  label: string;
  type?: string;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  min?: number;
  max?: number;
}

const Input: FC<InputProps> = ({
  value,
  label,
  type = "text",
  disabled,
  onChange,
  name,
  min = 0,
  max = 1000000000,
}) => {
  return (
    <div className="relative w-full lg:w-[30rem]">
      <input
        type={type}
        value={value}
        disabled={disabled}
        onChange={onChange}
        name={name}
        min={min}
        max={max}
        className="outline-none px-3 py-5 border-2 border-neutral-300 w-full rounded-md peer focus:border-purple-400 disabled:bg-neutral-300 placeholder-transparent"
      />
      <label className="text-2 absolute top-0 left-2 scale-95 peer-focus-within:text-3 peer-focus-within:scale-103 peer-focus-within:-top-2 peer-focus-within:bg-white peer-focus-within:px-2 px-0 bg-transparent transition-all duration-200">
        {label}
      </label>
    </div>
  );
};

export default Input;
