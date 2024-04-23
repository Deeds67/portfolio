import { ReactNode } from "react"
import AboutMe from "../../ui/AboutMe"
import Introduction from "../../ui/Introduction"
import NavBar from "../../ui/NavBar"

interface Props {
    children?: ReactNode
    className?: string
}

const PageLayout = ({ children, ...props }: Props) => {

    return (
        <main className="min-h-screen xs:p-24">
            <NavBar></NavBar>
            <div className="flex flex-col lg:flex-row justify-center gap-3 pb-3">
                <div className="flex flex-col gap-3">
                    <Introduction></Introduction>
                    <AboutMe></AboutMe>
                </div>
                <div className={`${props.className || ""} flex flex-col gap-3`}>
                    {children}
                </div>
            </div>
        </main>
    )
}

export default PageLayout