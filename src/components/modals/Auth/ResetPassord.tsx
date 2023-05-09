import { Button, Input } from "@/components";
import { ERROR, LOGIN, SUCCESS, TOAST_MESSAGES } from "@/constants";
import { fireBaseErrors, firebaseAuth } from "@/firebase/firebase";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { useToasify } from "@/hooks";
import { useSetRecoilState } from "recoil";
import { atomAuthModalState } from "@/atoms/authModal.atom";

export default function ResetPassword() {
  const [resetPassWordStatus, setResetPassWordStatus] =
    useState<boolean>(false);
  const { createToast } = useToasify();
  const [sendPasswordResetPassword, sending, error] =
    useSendPasswordResetEmail(firebaseAuth);

  const setAuthModalState = useSetRecoilState(atomAuthModalState);

  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),

    onSubmit: async ({ email }) => {
      try {
        const res = await sendPasswordResetPassword(email);

        if (!res) return;
        createToast(SUCCESS, `Reset link sent to ${formik.values.email}`);
        setAuthModalState((prev) => ({ ...prev, isOpen: false, type: LOGIN }));
      } catch (error: any) {
        console.log("ERROR : send reset password", error);
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

  useEffect(() => {
    if (resetPassWordStatus) createToast(SUCCESS, TOAST_MESSAGES.RESET);
  }, [resetPassWordStatus, createToast]);

  return (
    <>
      {!resetPassWordStatus && !error ? (
        <form
          className="px-6 py-4 flex flex-col gap-4"
          onSubmit={formik.handleSubmit}
        >
          <h3 className=" text-xl text-white">Reset password</h3>
          <p className="text-white">
            Forgotten your password? Enter your e-mail address below, and we
            &apos;ll send you an email allowing you to reset-it.
          </p>
          <Input
            type="email"
            id="email"
            placeholder="name@company.com"
            label="Your Email"
            formik={formik}
          />
          <div className=" flex justify-between align-bottom">
            <Button
              text={sending ? "Resetting..." : "Send reset link"}
              style="bg-brand-orange text-white hover:bg-white hover:text-brand-orange hover:border-brand-orange transition duration-300 ease-in-out"
              type="submit"
            />
          </div>
        </form>
      ) : (
        <div className="text-white w-full p-5 flex items-center justify-center">
          {`${fireBaseErrors[error?.message as keyof typeof fireBaseErrors]}`}
        </div>
      )}
    </>
  );
}
