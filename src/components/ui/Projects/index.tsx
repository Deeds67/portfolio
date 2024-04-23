import Image from "next/image"
import Tags from "../Tags"

const Projects = () => {
    const projects = [
        {
            company: "Portfolio",
            date: "Apr 2024",
            description: "Built & open sourced this portfolio website",
            tags: ["React", "Next.js", "TailwindCSS", "TypeScript"],
            logo: "/linkedinprofilepic.jpeg",
            url: "https://github.com/Deeds67/blog/"
        },
        {
            company: "Tresor-AI",
            date: "Apr 2024",
            description: "Built a modern & responsive landing page for Tresor-AI.",
            tags: ["React", "Next.js", "TailwindCSS", "TypeScript"],
            logo: "/tresor-ai.png",
            url: "https://www.tresor-ai.com/"
        },
        {
            company: "Rolling-Aggregator",
            date: "Mar 2024",
            description: "Implemented an application that consumes a stream of data and does a 60 second rolling aggregation of the data. Provides the aggregated result in O(1) time.",
            tags: ["Kotlin", "Ktor", "Concurrency", "Locks"],
            logo: "/github.png",
            url: "https://github.com/Deeds67/rolling-aggregator"
        },
        {
            company: "Redis-Clone",
            date: "Mar 2024",
            description: "Built a Redis clone in Rust to learn about the internal workings of Redis and the RESP-protocol.",
            tags: ["Rust", "Redis", "RESP", "Concurrency"],
            logo: "/github.png",
            url: "https://github.com/Deeds67/redis-clone"
        },
        {
            company: "QR-File-Transfer",
            date: "Oct 2023",
            description: "Developed a website that enables you to transfer files between devices without an internet connection. Converts files into QR codes.",
            tags: ["React", "Javascript", "File Compression", "ZLib"],
            logo: "/github.png",
            url: "https://github.com/Deeds67/qr-file-transfer"
        },
        {
            company: "Backup & restore utility",
            date: "Mar 2023",
            description: "Built scripts used to spin up a full linux dev environment with all of my required software and custom settings.",
            tags: ["Bash"],
            logo: "/github.png",
            url: "https://github.com/Deeds67/backup-and-restore"
        },
        {
            company: "Cryptocurrency Arbitrage",
            date: "Nov 2022",
            description: "Implemented an algorithm that detected arbitrage between different currencies by representing them in an undirected graph and using the Bellman Ford algorithm to detect negative weight cycles.",
            tags: ["Scala", "scala-cli", "Algorithms", "Graph traversal"],
            logo: "/github.png",
            url: "https://github.com/Deeds67/cryptocurrency-arbitrage"
        },
        {
            company: "OrderBook parser",
            date: "Jun 2022",
            description: "Wrote an OrderBook implementation that would parse very large XML files containing millions of order book entries. Used efficient data structures like PriorityQueues (Heaps) to reduce parsing time to a few seconds.",
            tags: ["Kotlin", "XML", "Trading", "OrderBook", "Data Structures"],
            logo: "/github.png",
            url: "https://github.com/Deeds67/order-book"
        },
        {
            company: "Candlestick price histories",
            date: "Jun 2022",
            description: "Implemented an application that consumed a stream of json, persisted into a time-series database (TimescaleDB), and exposed an endpoint that would summarize this data and extrapolate missing data.",
            tags: ["Kotlin", "Ktor", "TimescaleDB", "WebSockets", "REST", "Docker"],
            logo: "/github.png",
            url: "https://github.com/Deeds67/candlestick"
        },
        
    ]
    return (
        <div className="lg:max-w-xl flex flex-col rounded-xl bg-white p-1">
            <ul className="list-disc pl-9">
                <li className="my-3 text-lg font-semibold">Projects</li>
            </ul>
            {projects.map((project, index) => 
            <div key={index} className="flex items-start bg-gray-50 hover:bg-gray-100 m-1 rounded-lg py-4">
                {project.url && <a target="_blank" href={project.url} rel="noopener noreferrer"><Image className="mx-2 rounded-full" src={project.logo} width={70} height={70} alt="logo"></Image></a>}
                {!project.url && <Image className="mx-2 rounded-full" src={project.logo} width={70} height={70} alt="logo"></Image>}
                
                <div className="flex-1">
                    <div className="flex flex-space-between">
                        <span className="flex-1 font-semibold mb-2">{project.company}</span>
                    </div>
                    <div className="flex-col sm:flex-row flex gap-3 text-sm mb-3 pr-5 text-slate-700 font-medium">
                        <span className="flex flex-row gap-2">
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
                    <a className="flex gap-3 mt-3" target="_blank" href={project.url} rel="noopener noreferrer">
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