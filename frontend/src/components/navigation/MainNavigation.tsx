"use client"

import { useState } from "react"
import Drawer from "./Drawer"

export default function MainNavigation() {
    const [activateTab, setActivateTab] = useState(false)

    function handleClick() {
        setActivateTab(prev => !prev)
    }
    return (
        <div className="sticky top-0 left-0 right-0 border-b-2 border-black mb-10 bg-slate-100">
            <div className="p-3 w-full flex justify-between">
                <span className="text-3xl font-medium">Portico</span>
                <div className="flex gap-4">
                </div>
            </div>
            <Drawer activateTab={activateTab} handleClick={handleClick}></Drawer>
        </div>
    )
}