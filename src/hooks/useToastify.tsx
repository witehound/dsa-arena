import { ToastOptions, TypeOptions, toast } from "react-toastify";

export default function useToasify() {
  const craeteToast = (type: toastTypes, message: string) => {
    toast<typeof type>(message);
  };

  return {
    craeteToast,
  };
}

export type toastTypes = "SUCCESSs" | "error" | "info";
