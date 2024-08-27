import { ChangeEvent, FC } from "react";

interface InputProps {
  value?: string;
  label: string;
  type?: string;
  disabled: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  value,
  label,
  type = "text",
  disabled,
  onChange,
}) => {
  return (
    <div className="relative w-full lg:w-[30rem]">
      <input
        type={type}
        value={value}
        disabled={disabled}
        onChange={onChange}
        className="outline-none p-4 border-2 border-neutral-300 w-full rounded-md peer focus:border-purple-400 disabled:bg-neutral-300"
      />
      <label className="absolute top-0 left-3 scale-75 peer-focus-within:scale-100 peer-focus-within:-top-2 peer-focus-within:bg-white peer-focus-within:px-2 px-0 bg-transparent transition-all duration-200">
        {label}
      </label>
    </div>
  );
};

export default Input;
