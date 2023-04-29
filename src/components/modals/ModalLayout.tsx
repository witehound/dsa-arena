import { IoClose } from "react-icons/io5";
import { Login, Signup, ResetPassword } from "./Auth";
import { FORGOT_PASSWORD, LOGIN, REGISTER } from "@/constants";
import { useHandleAuthModel } from "@/hooks";

export default function ModalLayout() {
  const { handleCloseAuthModal, type } = useHandleAuthModel();
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60"></div>
      <div className="w-full sm:w-[450px]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex justify-center items-center">
        <div className="relative w-full h-full mx-auto flex items-center justify-center">
          <div className="bg-white rounded-lg shadow relative w-full bg-gradient-to-b from-brand-orange to-slate-900 mx-6">
            <div className="flex justify-end p-2">
              <button
                type="button"
                onClick={handleCloseAuthModal}
                className="bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white text-white"
              >
                <IoClose className=" h-5 w-5" />
              </button>
            </div>
            {type == LOGIN ? (
              <Login />
            ) : type == REGISTER ? (
              <Signup />
            ) : type == FORGOT_PASSWORD ? (
              <ResetPassword />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
