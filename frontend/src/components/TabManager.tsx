"use client"

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface props {
  home: ReactNode;
  create: ReactNode;
  search: ReactNode;
  profile: ReactNode;

}

export default function TabManager({ home, create, profile, search }: props) {
  const pathname = usePathname()
  return (
    <div className="flex-1 relative overflow-hidden h-full px-4 bg-background">
      <div className={`pb-20 overflow-y-auto h-full ${pathname === '/' ? 'block' : 'hidden'}`}>{home}</div>
      <div className={`pb-20 overflow-y-auto h-full ${pathname === '/create' ? 'block' : 'hidden'}`}>{create}</div>
      <div className={`pb-20 overflow-y-auto h-full ${pathname === '/search' ? 'block' : 'hidden'}`}>{search}</div>
      <div className={`pb-20 overflow-y-auto h-full ${pathname === '/profile' ? 'block' : 'hidden'}`}>{profile}</div>
    </div>
  )
}