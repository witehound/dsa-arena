"use client";
import { Button, Input } from "@/components";
import { ERROR, LOGIN, SUCCESS } from "@/constants";
import { useHandleAuthModel, useToasify } from "@/hooks";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import { fireBaseErrors, firebaseAuth } from "@/firebase/firebase";
import { useRouter } from "next/router";

export default function Signup() {
  const router = useRouter();
  const { createToast } = useToasify();
  const { handleChangeAuthModalState } = useHandleAuthModel();
  const [createNewUserWithEmailandPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(firebaseAuth);

  const formik = useFormik({
    initialValues: {
      email: "",
      userName: "",
      password: "",
    },

    validationSchema: Yup.object({
      password: Yup.string()
        .max(15, "Must be 15 characters or less")
        .min(6, "Must be 6 characters or more")
        .required("Required"),
      userName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),

    onSubmit: async ({ email, password }) => {
      try {
        const newUser = await createNewUserWithEmailandPassword(
          email,
          password
        );
        if (!newUser) return;
        router.push("/");
        createToast(SUCCESS, "Registration Successful");
      } catch (error: any) {
        createToast(
          ERROR,
          fireBaseErrors[error?.message as keyof typeof fireBaseErrors]
        );
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
      console.log("ERROR : register user", error?.message);
    }
  }, [error, createToast]);

  return (
    <form
      className="px-6 py-4 flex flex-col gap-4"
      onSubmit={formik.handleSubmit}
    >
      <h3 className=" text-xl text-white">Register to DSArena</h3>
      <Input
        type="email"
        id="email"
        placeholder="name@company.com"
        label="Your Email"
        formik={formik}
      />
      <Input
        type="text"
        id="userName"
        placeholder="username"
        label="Your Username"
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
          text={loading ? "Regitering..." : "Register"}
          style="bg-brand-orange text-white hover:bg-white hover:text-brand-orange hover:border-brand-orange transition duration-300 ease-in-out"
          type="submit"
        />
      </div>
      <div className=" text-sm flex justify-end items-center gap-4 text-white">
        Already have an account?{" "}
        <Button
          handleClick={() => handleChangeAuthModalState(LOGIN)}
          style="text-sm block text-blue-700 hover:underline"
          text={"Login"}
          type="button"
        />
      </div>
    </form>
  );
}
