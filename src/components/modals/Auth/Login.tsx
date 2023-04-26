import { Button, Input } from "@/components";

export default function Login() {
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
          <a
            href="#"
            className=" text-sm block text-brand-orange hover:underline"
          >
            Forgot password
          </a>
        </div>
      </div>
      <div className=" text-sm flex justify-end gap-4 text-white">
        Not registered?{" "}
        <a href="#" className=" text-sm block text-blue-700 hover:underline">
          Create account
        </a>
      </div>
    </form>
  );
}
