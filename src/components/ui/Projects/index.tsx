import Image from "next/image"
import Tags from "../Tags"

const projects = [
    {
        company: "Your Flagship Project",
        date: "Jan 2025",
        description: "A short description of your most impressive project — what it does, who it's for, and what makes it technically interesting.",
        tags: ["TypeScript", "React", "Node.js", "PostgreSQL"],
        logo: "/logo-placeholder.svg",
        url: "https://example.com"
    },
    {
        company: "Side Project Name",
        date: "Aug 2024",
        description: "A second project — perhaps an open-source library, a hackathon winner, or an experiment you shipped.",
        tags: ["Python", "FastAPI", "Docker"],
        logo: "/github.png",
        url: "https://github.com/your-username/your-repo"
    },
    {
        company: "Experiment or Learning Project",
        date: "Mar 2024",
        description: "A learning project that taught you something new — a clone of an existing tool, an algorithmic challenge, or a deep-dive into a new technology.",
        tags: ["Rust", "Algorithms", "Systems Programming"],
        logo: "/github.png",
        url: "https://github.com/your-username/your-repo"
    },
]

const Projects = () => {
    return (
        <div className="lg:max-w-xl flex flex-col gap-2">
            <h2 className="ml-1 text-lg font-semibold border-l-3 border-blue-500 pl-2">Projects</h2>
            {projects.map((project, index) =>
            <div key={index} className="flex bg-white shadow-sm hover:shadow-md transition-shadow rounded-xl p-4">
                {project.url && <a target="_blank" href={project.url} rel="noopener noreferrer"><Image className="mx-2 rounded-lg min-w-16" src={project.logo} width={70} height={70} alt="logo"></Image></a>}
                {!project.url && <Image className="mx-2 rounded-lg" src={project.logo} width={70} height={70} alt="logo"></Image>}
                <div className="flex-1 break-words" style={{overflowWrap: "anywhere"}}>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold font-heading">{project.company}</span>
                    </div>
                    <div className="flex gap-3 text-sm mb-3 pr-5 text-slate-700 font-medium">
                        <span className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4">
                                <path fill="currentColor" d="M9 1v2h6V1h2v2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1zm11 10H4v8h16zm-9 2v4H6v-4zM7 5H4v4h16V5h-3v2h-2V5H9v2H7z"></path>
                            </svg>
                            {project.date}
                        </span>
                    </div>
                    <div className="pr-5 text-slate-700">
                        {project.description}
                    </div>
                    {project.tags && <Tags tags={project.tags} className="my-2"></Tags>}
                    <a className="flex mt-4 gap-1 text-xs sm:text-sm font-medium" target="_blank" href={project.url} rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4">
                            <path fill="currentColor" d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3z"></path>
                        </svg>
                        <span>{project.url}</span>
                    </a>
                </div>
            </div>
        )}
        </div>
    )
}

export default Projects
