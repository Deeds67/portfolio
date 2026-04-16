import Image from "next/image"
import Tags from "../Tags"

const experiences = [
    {
        role: "Senior Software Engineer",
        company: "Acme Corp",
        location: "Your City, Country",
        workload: "Full-time",
        from: "Jan 2024",
        to: "Present",
        description: "Describe your role, responsibilities, and impact here. Focus on what you built and the outcomes you drove.",
        logo: "/logo-placeholder.svg",
        url: "https://example.com",
        tags: ["TypeScript", "React", "Node.js", "PostgreSQL"],
    },
    {
        role: "Software Engineer",
        company: "Example Labs",
        location: "Your City, Country",
        workload: "Full-time",
        from: "Jun 2021",
        to: "Dec 2023",
        description: "A summary of what you worked on at this company — systems you designed, teams you collaborated with, and notable wins.",
        logo: "/logo-placeholder.svg",
        url: "https://example.com",
        tags: ["Python", "AWS", "Docker", "Kubernetes"],
    },
    {
        role: "Junior Developer",
        company: "Starter Studio",
        location: "Your City, Country",
        workload: "Full-time",
        from: "Aug 2019",
        to: "May 2021",
        description: "Your first role — the foundational projects, tools, and lessons that shaped your career.",
        logo: "/logo-placeholder.svg",
        tags: ["JavaScript", "HTML", "CSS", "Git"],
    },
]

const Experience = () => {
    return (
    <div className="lg:max-w-xl flex flex-col gap-2">
        <h2 className="ml-1 text-lg font-semibold border-l-3 border-blue-500 pl-2">Experience</h2>
        {experiences.map((exp, index) =>
            <div key={index} className="flex items-start bg-white shadow-sm hover:shadow-md transition-shadow rounded-xl p-4">
                {exp.url && <a target="_blank" href={exp.url} rel="noopener noreferrer"><Image className="mx-2 rounded-full" src={exp.logo} width={70} height={70} alt="logo"></Image></a>}
                {!exp.url && <Image className="mx-2 rounded-full" src={exp.logo} width={70} height={70} alt="logo"></Image>}

                <div className="flex-1" style={{overflowWrap: "anywhere"}}>
                    <div className="flex flex-space-between">
                        <span className="flex-1 font-semibold mb-2 font-heading">{exp.role}</span>
                        <span className="mr-4"><Tags tags={[exp.workload || ""]}></Tags></span>
                    </div>
                    <div className="flex-col sm:flex-row flex gap-3 text-sm mb-3 pr-5 text-slate-700 font-medium">
                        <span className="flex flex-row gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4">
                                <path fill="currentColor" d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM4 16v3h16v-3zm0-2h16V7H4zM9 3v2h6V3zm2 8h2v2h-2z"></path>
                            </svg>
                            {exp.url && <a target="_blank" href={exp.url} rel="noopener noreferrer">{exp.company}</a>}
                            {!exp.url && <span>{exp.company}</span>}
                        </span>
                        <span className="flex flex-row gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4">
                                <path fill="currentColor" d="m12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zm4.95-7.778a7 7 0 1 0-9.9 0L12 20.9zM12 13a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></path>
                            </svg>
                            {exp.location}
                        </span>
                        <span className="flex flex-row gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4">
                                <path fill="currentColor" d="M9 1v2h6V1h2v2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1zm11 10H4v8h16zm-9 2v4H6v-4zM7 5H4v4h16V5h-3v2h-2V5H9v2H7z"></path>
                            </svg>
                            {exp.from} - {exp.to}
                        </span>
                    </div>
                    <div className="pr-5 text-slate-700">
                        {exp.description}
                    </div>
                    {exp.tags && <Tags tags={exp.tags} className="my-2"></Tags>}
                </div>
            </div>
        )}
    </div>
    )
}

export default Experience
