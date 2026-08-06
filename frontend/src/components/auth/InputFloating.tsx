"use client";

import { ChangeEvent, HTMLInputTypeAttribute, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface props {
  type: HTMLInputTypeAttribute;
  title: string;
  onPassword: boolean | undefined;
}

export default function InputFloating({ title, type }: props) {
  const [valueInput, setValueInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  function handleShow() {
    setShowPassword((prev) => !prev);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setValueInput(value);
  }

  return (
    <div className="flex items-center px-2 relative border-2 border-foreground focus-within:border-sky-500 rounded-md">
      <input
        className="h-10 peer p-4 w-full outline-0"
        type={type === "password" && showPassword ? "text" : type}
        onChange={(e) => {
          handleChange(e);
        }}
      ></input>
      <span
        className={`px-2 bg-form text-foreground absolute top-1/2 ${valueInput == "" ? "-translate-y-1/2 text-[18px]" : "translate-y-[-140%]  text-sm"} -translate-y-1/2 translate-x-4 peer-focus:translate-y-[-140%] peer-focus:text-sky-500 peer-focus:text-sm transition-transform ease-initial duration-100`}
      >
        {title}
      </span>
      {type === "password" && (
        <button type="button" onClick={handleShow}>
          {showPassword ? <Eye /> : <EyeOff />}
        </button>
      )}
    </div>
  );
}
