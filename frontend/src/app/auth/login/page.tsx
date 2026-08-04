import FormLogin from "@/components/auth/FormLogin";

export default function LoginPage() {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      <div className="flex flex-col">
        <div
          id="circle1"
          className=" absolute -z-10 -top-20 rounded-full -right-24 bg-primary size-66"
        ></div>
        <div
          id="circle1"
          className=" absolute -z-20 top-30 rounded-full -right-10 bg-primary2 size-40"
        ></div>
        <h1 className="p-6 w-3/4 text-5xl">Bienvenido de nuevo</h1>
        <FormLogin />
      </div>
    </section>
  )
}