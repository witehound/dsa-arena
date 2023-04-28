import { atomAuthModalState } from "@/atoms/authModal.atom";
import { Button, Input } from "@/components";
import { FORGOT_PASSWORD, REGISTER } from "@/constants";
import { AuthModaltypes } from "@/types";
import { useSetRecoilState } from "recoil";

export default function Login() {
  const setatomAuthModalState = useSetRecoilState(atomAuthModalState);
  const handleChangeAuthModalState = (type: AuthModaltypes) => {
    setatomAuthModalState((prev) => ({ ...prev, type: type }));
  };
  return (
    <form className="px-6 py-4 flex flex-col gap-4">
      <h3 className=" text-xl text-white">Log in to DSArena</h3>
      <Input
        type="email"
        id="email"
        placeholder="name@company.com"
        label="Your Email"
      />
      <Input
        type="password"
        id="password"
        placeholder="***********"
        label="Your Password"
      />
      <div className=" flex justify-between align-bottom">
        <Button
          text="Login"
          style="bg-brand-orange text-white hover:bg-white hover:text-brand-orange hover:border-brand-orange transition duration-300 ease-in-out"
          type="submit"
        />
        <div>
          <Button
            handleClick={() => handleChangeAuthModalState(FORGOT_PASSWORD)}
            style="text-sm block text-brand-orange hover:underline"
            text={"Forgot password"}
            type="button"
          />
        </div>
      </div>
      <div className=" text-sm flex justify-end gap-4 text-white items-center">
        Not registered?{" "}
        <Button
          handleClick={() => handleChangeAuthModalState(REGISTER)}
          style="text-sm block text-blue-700 hover:underline"
          text={"Create account"}
          type="button"
        />
      </div>
    </form>
  );
}
