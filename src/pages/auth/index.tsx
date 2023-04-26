import { Navbar } from "@/components";
import { ModalLayout } from "@/components/modals";
import Head from "next/head";

export default function Authentication() {
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
          <ModalLayout />
        </div>
      </div>
    </>
  );
}
