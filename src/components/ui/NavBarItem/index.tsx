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
            <div className={`${props.className || ""}flex flex-1 justify-center hover:bg-gray-100 hover:border-b-4 ${!props.isActive && "hover:border-gray-100"} sm:flex-grow-0 min-w-20 sm:min-w-32 ${props.isActive && "border-b-4"} ${props.isActive && "border-blue-600"}`}>
                    <div className="text-lg font-medium py-5">
                        {children}
                    </div>
            </div>
        </Link>
    )
}

export default NavBarItem