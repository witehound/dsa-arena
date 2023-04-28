import { atomAuthModalState } from "@/atoms/authModal.atom";
import { Navbar } from "@/components";
import { ModalLayout } from "@/components/modals";
import Head from "next/head";
import { useRecoilValue } from "recoil";

export default function Authentication() {
  const { isOpen } = useRecoilValue(atomAuthModalState);
  return (
    <>
      <Head>
        <title>DSArena | Authentication</title>
      </Head>
      <div className=" bg-gradient-to-b from-gray-600 to-black h-screen relative flex items-center flex-col w-full">
        <div className="min-w-[1280px]">
          <Navbar />
          <div className=" flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none">
            <img src="hero.png" alt="hero image" className="" />
          </div>
          {isOpen ? <ModalLayout /> : null}
        </div>
      </div>
    </>
  );
}
