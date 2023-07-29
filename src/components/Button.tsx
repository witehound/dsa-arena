import { ButtonProps } from "@/types";

export default function Button({ style, type, text }: ButtonProps) {
  return (
    <button className={`${style} p-2 rounded-[5px]`} type={type}>
      {text}
    </button>
  );
}
