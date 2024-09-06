"use client"

import NavBarItem from '../NavBarItem'
import { usePathname } from 'next/navigation'

const navbaritems = [
    { 
        "display_name" : "Home",
        "url" : "/"
    },
    {
        "display_name" : "Projects",
        "url" : "/projects"
    },
]

const NavBar = () => {
    const pathname = usePathname()

    return (
        <header className="sticky top-0 mx-auto z-50 border-b-2 border-b-gray">
            <nav className="flex">
                <div className="flex flex-1 bg-white justify-center">
                    {navbaritems.map((item, index) => (
                        <NavBarItem key={index} isActive={item.url == pathname} target={item.url}>{item.display_name}</NavBarItem>
                    ))
                }
                </div>
            </nav>
        </header>
    )
}

export default NavBar