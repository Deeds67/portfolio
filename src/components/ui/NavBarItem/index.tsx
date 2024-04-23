import { ReactNode } from "react"

interface Props {
    children?: ReactNode
    className?: string,
    isActive?: boolean
}

const NavBarItem = ({ children, ...props }: Props) => {
    return (
    <div className={`${props.className || ""}flex flex-1 justify-center sm:flex-grow-0 min-w-20 sm:min-w-32 ${props.isActive && "border-b-4"} ${props.isActive && "border-blue-600"} `}>
        <div className="pb-5">
            {children}
        </div>
    </div>
    )
}

export default NavBarItem