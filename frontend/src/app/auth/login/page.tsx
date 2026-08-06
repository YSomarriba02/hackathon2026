"use client";
import Link from "next/link";
import FormLogin from "@/components/auth/FormLogin";
import { ChevronLeft } from "lucide-react";

export default function LoginPage() {
  return (
    <section className="flex flex-col w-full h-full overflow-hidden">
      <Link href="/" className={`z-20 h-10`}>
        <ChevronLeft size={38} />
      </Link>
      <div className="h-full flex flex-col gap-4">
          <h1 className="p-6 w-4/6 text-[38px] h-[30%]">Bienvenido de nuevo</h1>
          <FormLogin/>
      </div>
    </section>
  );
}
