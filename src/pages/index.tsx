import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <main className={` bg-black ${inter.className}`}>hello world</main>;
}
