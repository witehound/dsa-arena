export default function Login() {
  return (
    <form className="px-6 py-4 flex flex-col items-center justify-center gap-4">
      <h3 className=" text-xl text-white">Log in to DSArena</h3>
      <div>
        <label htmlFor="email" className="text-sm block mb-2 text-gray-200">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500"
        />
      </div>
      Login
    </form>
  );
}
