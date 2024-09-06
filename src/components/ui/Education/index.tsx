import Image from "next/image"

const studies = [
    {
        name: "Bachelor of Science in Computer Science",
        company: "North-West University",
        location: "Potchefstroom, ZA",
        url: "https://www.nwu.ac.za/",
        from: "2014",
        logo: "/nwu_logo.png",
        description: "Completed my Honours Degree in Computer Science cum laude at the North-West University."
    },
    {
        name: "Bachelor of Science in Information Technology",
        company: "North-West University",
        location: "Potchefstroom, ZA",
        url: "https://www.nwu.ac.za/",
        from: "2011",
        to: "2013",
        logo: "/nwu_logo.png",
        description: "Completed my Bachelor's Degree in Information Technology cum laude at the North-West University. Received an award for achieving the highest overall academic score during the three year B.Sc degree."
    },
]

const Education = () => {
    return (
        <div className="lg:max-w-xl flex flex-col rounded-xl bg-white p-1">
            <ul className="list-disc pl-9">
                <li className="my-3 text-lg font-semibold">Education</li>
            </ul>
            {studies.map((exp, index) => 
            <div key={index} className="flex items-start bg-gray-50 hover:bg-gray-100 m-1 rounded-lg py-4">
                {exp.url && <a target="_blank" href={exp.url} rel="noopener noreferrer"><Image className="mx-2 rounded-full" src={exp.logo} width={70} height={70} alt="logo"></Image></a>}
                {!exp.url && <Image className="mx-2 rounded-full" src={exp.logo} width={70} height={70} alt="logo"></Image>}
                
                <div className="flex-1">
                    <div className="mb-3">
                        <span className="font-semibold">{exp.name}</span>
                    </div>
                    <div className="flex-col sm:flex-row flex gap-3 text-sm mb-3 pr-5 text-slate-700 font-medium">
                        <span className="flex flex-row gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4">
                            <path fill="currentColor" d="M4 11.333L0 9l12-7l12 7v8.5h-2v-7.333l-2 1.166v6.678l-.223.275A9.983 9.983 0 0 1 12 22a9.983 9.983 0 0 1-7.777-3.714L4 18.011zM6 12.5v4.792A7.979 7.979 0 0 0 12 20a7.978 7.978 0 0 0 6-2.708V12.5L12 16zM3.97 9L12 13.685L20.03 9L12 4.315z"></path>
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
                            {exp.from} 
                            {exp.to && <span>- {exp.to}</span> }
                        </span>
                    </div>
                    <div className="pr-5 text-slate-700">
                        {exp.description}
                    </div>
                </div>
            </div>
        )}
        </div>
        )
}

export default Education