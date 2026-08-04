"use client"

import { House, Plus, Search, CircleUserRound } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"

const tabLinks = [
  { name: "Inicio", icon: House, to: "/" },
  { name: "publicar", icon: Plus, to: "/create" },
  { name: "Busqueda", icon: Search, to: "/search" },
  { name: "Perfil", icon: CircleUserRound, to: "/profile" }
]

export default function TabBar() {
  const pathname = usePathname();

  return (
    <nav className="[backdrop-filter:blur(5px)] bg-[#0c0c0cc1] w-full fixed bottom-0 p-3 px-6 pb-[env(safe-area-inset-bottom)]">
      <ul className="w-full flex gap-1 pb-2">
        {tabLinks.map((e, i) => {
          const isActive = pathname == e.to;
          return (
            <li key={i} className="w-full">
              <Link href={e.to} className="w-full flex justify-center items-center flex-col gap-1">
                <e.icon size={isActive ? "27" : "25"} className={`${isActive ? 'text-primary [stroke-3] scale-110 ' : '[stroke-2] scale-100 text-white'
                  }`}></e.icon>
                <span className={`text-[10px] ${isActive ? "text-primary" : "text-foreground"}`}>{e.name}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}