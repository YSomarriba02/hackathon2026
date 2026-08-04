"use client"

import { HTMLInputTypeAttribute, useState } from "react";

interface props {
  type: HTMLInputTypeAttribute;
  title: string
}

export default function InputFloating({ title, type }: props) {
  const [isFocus, setFocus] = useState(false);
  return (
    <div className="flex bg-amber-50 rounded-md relative">
      <input onFocus={() => { }} className="p-4 w-full" type={type}></input>
      <span className="text-black absolute top-1/2 -translate-y-1/2 translate-x-4">{title}</span>
    </div>
  )
}