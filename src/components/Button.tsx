import { ButtonProps } from "@/types";

export default function Button({ style, type }: ButtonProps) {
  return <button className={style} type={type}></button>;
}
