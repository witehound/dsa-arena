import { atomAuthModalState } from "@/atoms/authModal.atom";
import { Navbar } from "@/components";
import { ModalLayout } from "@/components/modals";
import Head from "next/head";
import Image from "next/image";
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
          <div className=" flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none ">
            <Image
              src="/hero.png"
              alt="hero image"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          {isOpen ? <ModalLayout /> : null}
        </div>
      </div>
    </>
  );
}
