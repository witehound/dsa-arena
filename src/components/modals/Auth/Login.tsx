import { Button, Input } from "@/components";
import { FORGOT_PASSWORD, REGISTER } from "@/constants";
import { useHandleAuthModel } from "@/hooks";
import { useFormik } from "formik";

import * as Yup from "yup";

export default function Login() {
  const { handleChangeAuthModalState } = useHandleAuthModel();
  const formik = useFormik({
    initialValues: {
      email: "",
      userName: "",
      password: "",
    },

    validationSchema: Yup.object({
      password: Yup.string()

        .max(15, "Must be 15 characters or less")

        .required("Required"),

      userName: Yup.string()

        .max(20, "Must be 20 characters or less")

        .required("Required"),

      email: Yup.string().email("Invalid email address").required("Required"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form className="px-6 py-4 flex flex-col gap-4">
      <h3 className=" text-xl text-white">Log in to DSArena</h3>
      <Input
        type="email"
        id="email"
        placeholder="name@company.com"
        label="Your Email"
        formik={formik}
      />
      <Input
        type="password"
        id="password"
        placeholder="***********"
        label="Your Password"
        formik={formik}
      />
      <div className=" flex justify-between align-bottom">
        <Button
          text="Login"
          style="bg-brand-orange text-white hover:bg-white hover:text-brand-orange hover:border-brand-orange transition duration-300 ease-in-out"
          type="submit"
        />
        <div>
          <Button
            handleClick={() => handleChangeAuthModalState(FORGOT_PASSWORD)}
            style="text-sm block text-brand-orange hover:underline"
            text={"Forgot password"}
            type="button"
          />
        </div>
      </div>
      <div className=" text-sm flex justify-end gap-4 text-white items-center">
        Not registered?{" "}
        <Button
          handleClick={() => handleChangeAuthModalState(REGISTER)}
          style="text-sm block text-blue-700 hover:underline"
          text={"Create account"}
          type="button"
        />
      </div>
    </form>
  );
}
