import Link from "next/link"
import { ReactNode } from "react"

interface Props {
    children?: ReactNode
    className?: string,
    isActive?: boolean,
    target: string
}

const NavBarItem = ({ children, ...props }: Props) => {
    return (
        <Link href={props.target}>
            <div className={`${props.className || ""}flex flex-1 justify-center hover:text-blue-600 transition-colors sm:flex-grow-0 min-w-20 sm:min-w-32 relative`}>
                    <div className={`text-lg font-medium py-5 ${props.isActive ? "text-blue-600" : "text-gray-600"}`}>
                        {children}
                    </div>
                    {props.isActive && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-blue-600 rounded-full"></div>}
            </div>
        </Link>
    )
}

export default NavBarItem