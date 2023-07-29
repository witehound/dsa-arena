import Link from "next/link";
import { Button } from ".";

export default function Navbar() {
  return (
    <div className="flex items-center w-full justify-between sm:px-12 px-2 md:px-24">
      <Link href={"/"} className="flex items-center justify-center h-20">
        <img src="/logo.png" alt="dsarena logo" className=" h-full" />
      </Link>
      <div className=" flex items-center justify-center">
        <Button style="" type="button" />
      </div>
    </div>
  );
}
