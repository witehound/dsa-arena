import { InputProps } from "@/types";

export default function Input({
  type,
  id,
  placeholder,
  style,
  label,
}: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="text-sm block mb-2 text-gray-200">
        {label}
      </label>
      <input
        type={id}
        id={id}
        name={id}
        className={`${style} ${`border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white`}`}
        placeholder={placeholder}
      />
    </div>
  );
}