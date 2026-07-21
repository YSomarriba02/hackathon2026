"use client"

import { House, Plus, Search, CircleUserRound } from "lucide-react"
import { useState } from "react"

const tabLinks = [
  { name: "principal", icon: House, to: "" },
  { name: "publicarPost", icon: Plus, to: "" },
  { name: "Busqueda", icon: Search, to: "" },
  { name: "Perfil", icon: CircleUserRound, to: "" }
]

export default function TabBar() {
  const [activeTab, setActiveTab] = useState("principal");
  return (
    <nav className="bg-nav w-full fixed bottom-0 p-3 px-6 border-t-2 border-[#a3a3a3] pb-[env(safe-area-inset-bottom)]">
      <ul className="w-full flex gap-1 pb-2">
        {tabLinks.map((e, i) => {
          const isActive = activeTab == e.name;
          return (
            <li key={i} className="w-full">
              <button onClick={() => setActiveTab(e.name)} className="w-full flex justify-center">
                <e.icon size={isActive ? "27" : "25"} className={`transition-all duration-150 ease-in-out ${isActive ? '[stroke-3] brightness-100 scale-110' : '[stroke-2] scale-100 brightness-50'
                  }`}></e.icon>

              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}