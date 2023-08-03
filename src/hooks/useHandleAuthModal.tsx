import { atomAuthModalState } from "@/atoms/authModal.atom";
import { LOGIN } from "@/constants";
import { AuthModaltypes } from "@/types";
import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";

export default function useHandleAuthModel() {
  const [{ isOpen, type }, setatomAuthModalState] =
    useRecoilState(atomAuthModalState);
  const handleChangeAuthModalState = (type: AuthModaltypes) => {
    setatomAuthModalState((prev) => ({ ...prev, type: type }));
  };

  const handleCloseAuthModal = useCallback(() => {
    setatomAuthModalState((prev) => ({ ...prev, isOpen: false, type: LOGIN }));
  }, [setatomAuthModalState]);

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
