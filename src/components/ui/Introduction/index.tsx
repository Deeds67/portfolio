import Button from "../Button"
import Tags from "../Tags"
import Image from "next/image"

const tags = ["Kotlin", "React", "Scala", "Typescript", "Python", "PostgreSQL", "Kafka","Kubernetes", "Docker", "LLM", "RAG", "Transformers"]

const Introduction = () => {
    return (
        <div className="self-auto">
            <div className="lg:max-w-xs bg-white rounded-xl pb-2">
                <div className="rounded-t-xl flex justify-center mb-3 bg-gradient-to-b from-blue-500 to-white-500">
                    <Image alt="Profile Picture" src="/linkedinprofilepic.jpeg" width={150} height={150} className="rounded-full border-4 border-blue-500 mt-4"></Image>
                </div>
                <p className="flex justify-center font-semibold text-xl mb-3">Pierre Marais</p>
                <div className="text-sm bg-gray-50 rounded-lg p-5 mx-2">
                    Experienced Software Engineer with 9+ years of experience and a track record of delivering distributed, scalable solutions.
                    <div className="my-4">
                        <Tags tags={tags}></Tags>
                    </div>
                    <a href="/PierreMaraisCV.pdf" download="PierreMaraisCV">
                        <Button className="flex justify-center items-center gap-3 w-full text-white bg-blue-600 hover:bg-blue-500 ring-offset-2 ring-blue-600 focus:ring shadow rounded-lg">
                            Download CV
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4">
                                            <path fill="currentColor" d="M13 10h5l-6 6l-6-6h5V3h2zm-9 9h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2z"></path></svg>
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Introduction