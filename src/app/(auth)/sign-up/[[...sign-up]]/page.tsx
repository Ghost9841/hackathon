import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center md:mt-10">
      <SignUp  redirectUrl={'/dashboard'}/>
    </div>
  );
}
