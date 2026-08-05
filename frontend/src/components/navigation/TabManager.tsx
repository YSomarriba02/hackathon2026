"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface props {
  home: ReactNode;
  create: ReactNode;
  search: ReactNode;
  profile: ReactNode;
}

export default function TabManager({ home, create, profile, search }: props) {
  const pathname = usePathname();
  return (
    <section className="h-[88vh] overflow-hidden px-4 mt-1">
      <div className="h-full">
        <div
          className={`no-scrollbar pb-40 overflow-y-auto h-full  ${pathname === "/" ? "block" : "hidden"}`}
        >
          {home}
        </div>
        <div
          className={`no-scrollbar pb-40 overflow-y-auto h-full ${pathname === "/create" ? "block" : "hidden"}`}
        >
          {create}
        </div>
        <div
          className={`no-scrollbar pb-40 overflow-y-auto h-full ${pathname === "/search" ? "block" : "hidden"}`}
        >
          {search}
        </div>
        <div
          className={`no-scrollbar pb-40 overflow-y-auto h-full ${pathname === "/profile" ? "block" : "hidden"}`}
        >
          {profile}
        </div>
      </div>
    </section>
  );
}
