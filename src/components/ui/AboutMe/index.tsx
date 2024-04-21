import Tags from "../Tags"

interface Props {
    tags: string[]
}

const AboutMe = (props: Props) => {

    return (
        <div className="flex flex-col max-w-xs bg-white rounded-xl p-5 gap-3">
        <p className="font-semibold text-lg">Pierre Marais</p>
        <p>Senior Software Engineer - DE</p>
        <div className="text-sm bg-gray-50 rounded p-5">Software engineer with 9+ years of experience in building web apps. Skilled in Kotlin, React, Python, Typescript, PostgreSQL, Kafka and Kubernetes.</div>
            <Tags tags={props.tags}></Tags>
        </div>
    )
}

export default AboutMe