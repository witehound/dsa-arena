import { Button, Input } from "@/components";
import {
  ERROR,
  FORGOT_PASSWORD,
  REGISTER,
  SUCCESS,
  TOAST_MESSAGES,
} from "@/constants";
import { fireBaseErrors, firebaseAuth } from "@/firebase/firebase";
import { useHandleAuthModel, useToasify } from "@/hooks";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

import * as Yup from "yup";

export default function Login() {
  const { handleChangeAuthModalState } = useHandleAuthModel();
  const router = useRouter();
  const [signInWithEmailandPassword, user, loading, error] =
    useSignInWithEmailAndPassword(firebaseAuth);
  const { createToast } = useToasify();

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

      email: Yup.string().email("Invalid email address").required("Required"),
    }),

    onSubmit: async ({ email, password }) => {
      try {
        const existingUser = await signInWithEmailandPassword(email, password);
        if (!existingUser) return;
        router.push("/");
        createToast(SUCCESS, TOAST_MESSAGES.LOGIN);
      } catch (error: any) {
        console.log("ERROR : register user", error?.message);
      }
    },
  });

  useEffect(() => {
    if (error) {
      createToast(
        ERROR,
        fireBaseErrors[error?.message as keyof typeof fireBaseErrors]
      );
    }
  }, [error, createToast]);

  return (
    <form
      className="px-6 py-4 flex flex-col gap-4"
      onSubmit={formik.handleSubmit}
    >
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
          text={loading ? "login in..." : "Login"}
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
