import Tags from "../Tags"
import Image from "next/image"

const tags = ["Your", "Top", "Skills", "Here"]

const Introduction = () => {
    return (
        <div className="self-auto">
            <div className="lg:max-w-xs bg-white shadow-sm rounded-xl pb-2">
                <div className="rounded-t-xl flex justify-center mb-3" style={{background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #e0e7ff 100%)"}}>
                    <Image alt="Profile Picture" src="/profile-placeholder.svg" width={150} height={150} className="rounded-full border-4 border-white/80 mt-4 shadow-lg bg-white"></Image>
                </div>
                <p className="flex justify-center font-semibold text-xl mb-3 font-heading">Your Name</p>
                <div className="text-sm bg-gray-50 rounded-lg p-5 mx-2">
                    A short, punchy tagline about who you are and what you do.
                    <div className="my-4">
                        <Tags tags={tags}></Tags>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction
