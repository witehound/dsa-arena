import { atomAuthModalState } from "@/atoms/authModal.atom";
import { LOGIN } from "@/constants";
import { AuthModaltypes } from "@/types";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

export default function useHandleAuthModel() {
  const [{ isOpen, type }, setatomAuthModalState] =
    useRecoilState(atomAuthModalState);
  const handleChangeAuthModalState = (type: AuthModaltypes) => {
    setatomAuthModalState((prev) => ({ ...prev, type: type }));
  };

  const handleCloseAuthModal = () => {
    setatomAuthModalState((prev) => ({ ...prev, isOpen: false, type: LOGIN }));
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key == "Escape") handleCloseAuthModal();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [handleCloseAuthModal]);

  return {
    handleChangeAuthModalState,
    handleCloseAuthModal,
    isOpen,
    type,
  };
}
