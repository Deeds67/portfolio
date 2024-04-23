import AboutMe from "@/components/ui/AboutMe";
import Introduction from "@/components/ui/Introduction";
import NavBar from "@/components/ui/NavBar";

const Projects = () => {
    return (
        <main className="min-h-screen xs:p-24">
            <NavBar></NavBar>
            <div className="flex flex-col lg:flex-row justify-center gap-3 pb-3">
                <div className="hidden lg:flex flex-col gap-3">
                    <Introduction></Introduction>
                    <AboutMe></AboutMe>
                </div>
            </div>
        </main>
    );
}

export default Projects