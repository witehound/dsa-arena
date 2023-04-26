import { Button, Input } from "@/components";

export default function ResetPassword() {
  return (
    <form className="px-6 py-4 flex flex-col gap-4">
      <h3 className=" text-xl text-white">Reset password</h3>
      <p className="text-white">
        Forgotten your password? Enter your e-mail address below, and we
        &apos;ll send you an email allowing you to reset-it.
      </p>
      <Input
        type="email"
        id="email"
        placeholder="name@company.com"
        label="Your Email"
      />
      <div className=" flex justify-between align-bottom">
        <Button
          text="Reset password"
          style="bg-brand-orange text-white hover:bg-white hover:text-brand-orange hover:border-brand-orange transition duration-300 ease-in-out"
          type="submit"
        />
      </div>
    </form>
  );
}
