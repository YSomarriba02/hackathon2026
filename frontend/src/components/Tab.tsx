interface props{
    activateTab: boolean
}

export default function Tab({activateTab}:props){
    return(
        <nav className={`hidden absolute bg-slate-500 w-3/4 min-h-1/2 min-w-50 rounded-sm `}>
        </nav>
    )
}