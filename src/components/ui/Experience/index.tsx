import Image from "next/image"
import Tags from "../Tags"

const Experience = () => {
    const experiences = [
        {
            role: "Founder",
            company: "Tresor-AI",
            location: "Berlin, DE",
            workload: "Full-time",
            from: "Jun 2023",
            to: "Present",
            description: "Developed and maintained web applications using Kotlin, React, Scala, Kubernetes and Kafka.",
            logo: "/tresor-ai.png"
        },
        {
            role: "Senior Software Engineer",
            company: "Zalando",
            location: "Berlin, DE",
            workload: "Full-time",
            from: "Jun 2018",
            to: "Feb 2023",
            description: "Insert description ",
            logo: "/zalando_logo.png"
        }
    ]
    /* self-auto */
    return (
    <div className="lg:max-w-xl flex flex-col rounded-xl bg-white p-2">
        <ul className="list-disc pl-9">
            <li className="my-3 text-lg font-semibold">Experience</li>
        </ul>
        {experiences.map((exp, index) => 
            <div key={index} className="flex items-start bg-gray-100 m-1 rounded-lg py-4">
                <Image className="mx-2" src={exp.logo} width={70} height={70} alt="logo"></Image>
                <div className="flex-1 ">
                    <div className="flex flex-space-between">
                        <span className="flex-1 font-semibold mb-2">{exp.role}</span>
                        <span className="mr-4"><Tags tags={[exp.workload || ""]}></Tags></span>
                    </div>
                    <div className="flex-col sm:flex-row flex gap-3 text-sm mb-3">
                        <span className="flex flex-row gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4">
                                <path fill="currentColor" d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM4 16v3h16v-3zm0-2h16V7H4zM9 3v2h6V3zm2 8h2v2h-2z"></path>
                            </svg>
                            {exp.company}
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
                    <div className="">
                        {exp.description}
                    </div>
                </div>
            </div>
        )}
    </div>
    )
}

export default Experience