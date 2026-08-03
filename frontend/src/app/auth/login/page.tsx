import FormLogin from "@/components/auth/FormLogin";

export default function LoginPage() {
  return (
    <section className="p-6">
      <div>
        <div
        id="circle1"
        className=" absolute -z-10 -top-20 rounded-full -right-24 bg-primary size-66"
      ></div>
      <div
        id="circle1"
        className=" absolute -z-20 top-30 rounded-full -right-10 bg-primary2 size-40"
      ></div>
        <h1 className="text-5xl mt-40">Bienvenido de nuevo</h1>
        <FormLogin />
      </div>
    </section>
  )
}