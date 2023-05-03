import { Topbar } from "@/components";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={` bg-dark-layer-2 min-h-screen ${inter.className}`}>
      <Topbar />
    </main>
  );
}
