"use client"

import NavBarItem from '../NavBarItem'
import { usePathname } from 'next/navigation'

const NavBar = () => {
    const navbaritems = [
        { 
            "display_name" : "Home",
            "url" : "/"
        },
        {
            "display_name" : "Projects",
            "url" : "/projects"
        },
        {
            "display_name" : "Blog",
            "url" : "/blog"
        }
    ]

    const pathname = usePathname()

    return (
        <header className="mx-auto">
            <div className="flex mb-3">
                <div className="flex flex-1 bg-white justify-center">
                    {navbaritems.map((item, index) => (
                        <NavBarItem key={index} isActive={item.url == pathname} target={item.url}>{item.display_name}</NavBarItem>
                    ))
                }
                </div>
            </div>
        </header>
    )
}

export default NavBar