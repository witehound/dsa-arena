import { atomAuthModalState } from "@/atoms/authModal.atom";
import { AuthModaltypes } from "@/types";
import { useRecoilState, useSetRecoilState } from "recoil";

export default function useHandleAuthModel() {
  const [{ isOpen, type }, setatomAuthModalState] =
    useRecoilState(atomAuthModalState);
  const handleChangeAuthModalState = (type: AuthModaltypes) => {
    setatomAuthModalState((prev) => ({ ...prev, type: type }));
  };

  const handleCloseAuthModal = () => {
    setatomAuthModalState((prev) => ({ ...prev, isOpen: false }));
  };
  return {
    handleChangeAuthModalState,
    handleCloseAuthModal,
    isOpen,
    type,
  };
}
