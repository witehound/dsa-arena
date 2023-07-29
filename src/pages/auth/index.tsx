import { Navbar } from "@/components";
import Head from "next/head";

export default function Authentication() {
  return (
    <>
      <Head>
        <title>DSArena | Authentication</title>
      </Head>
      <div className=" bg-gradient-to-b from-gray-600 to-black h-screen relative flex items-center flex-col w-full">
        <div className="min-w-[1020px]">
          <Navbar />
          Authentication page
        </div>
      </div>
    </>
  );
}
