"use client"

import { Menu } from "lucide-react"

interface props {
    handleClick: () => void;
}

export default function BtnTab({ handleClick }: props) {
    return (
        <button onClick={handleClick}>
            <Menu size={30}></Menu>
        </button>
    )
}