import { InputProps } from "@/types";

export default function Input({
  type,
  id,
  placeholder,
  style,
  label,
  handleInputChange,
  formik,
}: InputProps) {
  return (
    <div>
      <div className=" flex items-center justify-between">
        <label htmlFor={id} className="text-sm block mb-2 text-gray-200">
          {label}
        </label>
        {formik.touched[id] && formik.errors[id] ? (
          <div className=" text-red-500 text-[10px] font-thin">
            {formik.errors[id]}
          </div>
        ) : null}
      </div>
      <input
        onChange={handleInputChange}
        type={type}
        id={id}
        name={id}
        className={`${style} ${`border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white`}`}
        placeholder={placeholder}
        {...formik.getFieldProps(id)}
      />
    </div>
  );
}
