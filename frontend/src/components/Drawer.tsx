import { useEffect } from "react";

interface props {
    activateTab: boolean;
    handleClick: () => void;
}


export default function Drawer({ activateTab, handleClick }: props) {
    useEffect(() => {
        if (activateTab) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [activateTab]);
    return (
        <>
            <div className={`absolute bg-[#00000079] h-screen w-full ${activateTab ? "block" : "hidden"}`} onClick={handleClick} />
            <nav className={`absolute top-20 bg-zinc-200 w-3/4 h-screen min-w-50 rounded-tl-3xl ${activateTab ? "translate-x-[33%]" : "translate-x-[133%]"} transition-transform ease-in duration-100`}>
            </nav>
        </>
    )
}