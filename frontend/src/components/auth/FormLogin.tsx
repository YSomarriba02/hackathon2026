import InputFloating from "./InputFloating";
import { GoogleLogin } from "@react-oauth/google";

export default function FormLogin() {
  return (
    <div className="h-[70%] relative">
      <div className="absolute -z-10 -top-70 -right-24 size-66 rounded-full bg-primary" />

      <div className="absolute -z-20 -top-30 -right-10 size-40 rounded-full bg-primary2" />

      <form className="h-full w-full rounded-t-[60px] bg-form p-6 py-12 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <InputFloating title="email" type="email" onPassword/>
          <InputFloating title="password" type="password" onPassword={false}/>
        </div>
          <span className="self-end hover:text-sky-400">Olvido contraseña?</span>
          <button className="p-2 py-3 bg-sky-400 rounded-2xl">Iniciar sesion</button>
          <hr />
          <div className="flex gap-2">

            <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log("Login failed");
      }}
      />
     <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log("Login failed");
      }}
      />
      </div>
      </form>
    </div>
  );
}