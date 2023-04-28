import { ButtonProps } from "@/types";

export default function Button({
  style,
  type,
  text,
  handleClick,
}: ButtonProps) {
  return (
    <button
      className={`${style} px-2 py-1 sm:px-4 rounded-md text-sm font-sm`}
      type={type}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
