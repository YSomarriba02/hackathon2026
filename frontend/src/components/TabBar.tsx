"use client"

import { House, Plus, Search, CircleUserRound } from "lucide-react"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"

const tabLinks = [
  { name: "principal", icon: House, to: "/" },
  { name: "publicarPost", icon: Plus, to: "/create" },
  { name: "Busqueda", icon: Search, to: "/search" },
  { name: "Perfil", icon: CircleUserRound, to: "/profile" }
]

export default function TabBar() {
  const pathname = usePathname();

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [pathname])
  return (
    <nav className="bg-nav w-full fixed bottom-0 p-3 px-6 border-t-2 border-[#a3a3a3] pb-[env(safe-area-inset-bottom)]">
      <ul className="w-full flex gap-1 pb-2">
        {tabLinks.map((e, i) => {
          const isActive = pathname == e.to;
          return (
            <li key={i} className="w-full">
              <Link href={e.to} className="w-full flex justify-center">
                <e.icon size={isActive ? "27" : "25"} className={`${isActive ? '[stroke-3] brightness-100 scale-110' : '[stroke-2] scale-100 brightness-50'
                  }`}></e.icon>

              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}