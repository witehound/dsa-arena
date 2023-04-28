import { atomAuthModalState } from "@/atoms/authModal.atom";
import { Button, Input } from "@/components";
import { LOGIN } from "@/constants";
import { AuthModaltypes } from "@/types";
import { useSetRecoilState } from "recoil";

export default function Signup() {
  const setatomAuthModalState = useSetRecoilState(atomAuthModalState);
  const handleChangeAuthModalState = (type: AuthModaltypes) => {
    setatomAuthModalState((prev) => ({ ...prev, type: type }));
  };
  return (
    <form className="px-6 py-4 flex flex-col gap-4">
      <h3 className=" text-xl text-white">Register to DSArena</h3>
      <Input
        type="email"
        id="email"
        placeholder="name@company.com"
        label="Your Email"
      />
      <Input
        type="text"
        id="userName"
        placeholder="username"
        label="Your Username"
      />
      <Input
        type="password"
        id="password"
        placeholder="***********"
        label="Your Password"
      />
      <div className=" flex justify-between align-bottom">
        <Button
          text="Register"
          style="bg-brand-orange text-white hover:bg-white hover:text-brand-orange hover:border-brand-orange transition duration-300 ease-in-out"
          type="submit"
        />
      </div>
      <div className=" text-sm flex justify-end items-center gap-4 text-white">
        Already have an account?{" "}
        <Button
          handleClick={() => handleChangeAuthModalState(LOGIN)}
          style="text-sm block text-blue-700 hover:underline"
          text={"Login"}
          type="button"
        />
      </div>
    </form>
  );
}
