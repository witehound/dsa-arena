import { ToastOptions, TypeOptions, toast } from "react-toastify";

export default function useToasify() {
  const createToast = (type: toastTypes, message: string) => {
    toast<typeof type>(message);
  };

  return {
    createToast,
  };
}

export type toastTypes = "success" | "error" | "info";
