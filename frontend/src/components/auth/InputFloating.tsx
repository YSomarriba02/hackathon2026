"use client"

import { HTMLInputTypeAttribute } from "react";

interface props {
  type: HTMLInputTypeAttribute;
  title: string;
}

export default function InputFloating({ title, type }: props) {
  return (
    <div className="flex rounded-md relative">
      <input className="peer border-2 border-foreground p-4 w-full outline-0 rounded-sm focus:border-sky-400" type={type}></input>
      <span className={`px-2 bg-form text-foreground absolute top-1/2 -translate-y-1/2 translate-x-4 peer-focus:translate-y-[-170%] peer-focus:text-sky-500 transition-transform ease-initial duration-100`}>{title}</span>
    </div>
  )
}