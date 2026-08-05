import { colorForm } from "@/lib/ui";
import InputFloating from "./InputFloating"

export default function FormLogin() {
  return (
    <form className={`flex-2 border-0 p-4 w-full rounded-t-[60px] bg-form`}>
      <div className="p-4 py-8 flex flex-col gap-10">
        <InputFloating title="email" type="email" />
        <InputFloating title="password" type="password" />
      </div>
    </form>
  );
}
