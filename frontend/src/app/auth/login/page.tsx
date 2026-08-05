"use client"
import Link from "next/link";
import FormLogin from "@/components/auth/FormLogin";
import { ChevronLeft } from "lucide-react";
import { mainPaddingTop } from "@/lib/ui";

export default function LoginPage() {
  return (
   <section className="h-[88vh] flex flex-col w-full overflow-hidden">
  <Link href="/" className={`z-20 absolute ${mainPaddingTop}`}>
    <ChevronLeft size={38} />
  </Link>

  <div className="flex flex-col justify-between h-full">
    <div className="flex relative overflow-hidden flex-1">
      <div
        className="absolute -z-10 -top-20 rounded-full -right-24 bg-primary size-66"
      />

      <div
        className="absolute -z-20 top-30 rounded-full -right-10 bg-primary2 size-40"
      />

      <h1 className="p-6 w-3/4 text-[38px] mt-auto">
        Bienvenido de nuevo
      </h1>
    </div>

    <FormLogin />
  </div>
</section>
  );
}
