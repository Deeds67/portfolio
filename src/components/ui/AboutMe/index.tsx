import Button from "../Button"
import Tags from "../Tags"

interface Props {
    tags: string[]
}

const AboutMe = (props: Props) => {

    return (
        <div className="flex flex-col max-w-xs bg-white rounded-xl p-5 gap-4">
        <p className="font-semibold text-lg">Pierre Marais</p>
        <p>Senior Software Engineer - DE</p>
        <div className="text-sm bg-gray-50 rounded p-5">Software engineer with 9+ years of experience in building web apps. Skilled in Kotlin, React, Python, Typescript, PostgreSQL, Kafka and Kubernetes.</div>
        <Tags tags={props.tags}></Tags>
        <Button className="flex justify-center items-center gap-3 block w-auto text-white bg-blue-600 hover:bg-blue-500 ring-offset-2 ring-blue-600 focus:ring shadow rounded-lg">
            Download CV
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4">
                              <path fill="currentColor" d="M13 10h5l-6 6l-6-6h5V3h2zm-9 9h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2z"></path></svg>
        </Button>

        </div>

    )
}

export default AboutMe