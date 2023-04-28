import Link from "next/link";
import { Button } from ".";
import { useRecoilState, useSetRecoilState } from "recoil";
import { atomAuthModalState } from "@/atoms/authModal.atom";

export default function Navbar() {
  const setatomAuthModalState = useSetRecoilState(atomAuthModalState);
  const handleClick = () => {
    setatomAuthModalState((prev) => ({ ...prev, isOpen: true }));
  };
  return (
    <div className="flex items-center w-full justify-between sm:px-12 px-2 md:px-24">
      <Link href={"/"} className="flex items-center justify-center h-20">
        <img src="/logo.png" alt="dsarena logo" className=" h-full" />
      </Link>
      <div className=" flex items-center justify-center">
        <Button
          style="bg-brand-orange text-white hover:bg-white hover:text-brand-orange hover:border-2 hover:border-brand-orange transition duration-300 ease-in-out"
          type="button"
          text="Sign In"
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}
