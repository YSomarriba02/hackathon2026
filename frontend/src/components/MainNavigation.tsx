"use client"

import { useState } from "react"
import BtnTab from "./BtnTab"
import Tab from "./Tab"

export default function MainNavigation(){
    const [activateTab, setActivateTab] = useState(false)
    return(
        <div>
            <div className="p-2 w-full flex justify-between">
            <span className="text-2xl">Portico</span>
            <BtnTab></BtnTab>
        </div>
        <Tab></Tab>
        </div>
    )
}