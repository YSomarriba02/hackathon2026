import InputFloating from "./InputFloating"

export default function FormLogin() {
  return (
    <form className="absolute bottom-0 p-4 h-1/2 w-full bg-gray-600 rounded-t-[60px]">
      <div className="p-4 py-8 flex flex-col gap-10">

        <InputFloating title="email" type="email" />
        <InputFloating title="password" type="password" />
      </div>
    </form>
  );
}
