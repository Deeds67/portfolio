import Button from "../Button"
import Tags from "../Tags"
import Image from "next/image"

interface Props {
    tags: string[]
}

const AboutMe = (props: Props) => {

    return (
        <div className="max-w-xs bg-white rounded-xl p-2">
            <div className="flex justify-center my-3">
                <Image src="/linkedinprofilepic.jpeg" width={150} height={150} className="rounded-full border-4 border-gray-400"></Image>
            </div>
            <p className="font-semibold pl-5 text-lg mb-1">Pierre Marais</p>
            <p className="pl-5 mb-5">Senior Software Engineer - DE</p>
            <div className="text-sm bg-gray-50 rounded p-5">
                Software engineer with 9+ years of experience in building web apps. Skilled in Kotlin, React, Python, Typescript, PostgreSQL, Kafka and Kubernetes.
                <div className="my-4">
                    <Tags tags={props.tags}></Tags>
                </div>
                <div>
                <Button className="flex justify-center items-center gap-3 w-full text-white bg-blue-600 hover:bg-blue-500 ring-offset-2 ring-blue-600 focus:ring shadow rounded-lg">
                    Download CV
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4">
                                    <path fill="currentColor" d="M13 10h5l-6 6l-6-6h5V3h2zm-9 9h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2z"></path></svg>
                </Button>
                </div>
            </div>

        </div>
    )
}

export default AboutMe