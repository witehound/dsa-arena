import { Button } from "@/components";

export default function Login() {
  return (
    <form className="px-6 py-4 flex flex-col gap-4">
      <h3 className=" text-xl text-white">Log in to DSArena</h3>
      <div>
        <label htmlFor="email" className="text-sm block mb-2 text-gray-200">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="name@company.com"
        />
      </div>
      <div>
        <label htmlFor="password" className="text-sm block mb-2 text-gray-200">
          Your Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="***********"
        />
      </div>
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
      <div className=" text-sm flex justify-end gap-4">
        Not registered?{" "}
        <a href="#" className=" text-sm block text-blue-700 hover:underline">
          Create account
        </a>
      </div>
    </form>
  );
}
