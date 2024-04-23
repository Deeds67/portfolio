
const AboutMe = () => {
    return  (
        <div className="self-auto">
            <div className="lg:max-w-xs bg-white rounded-xl p-1">
                <ul className="list-disc pl-9">
                    <li className="my-3 text-lg font-semibold">About me</li>
                </ul>

                <div className="text-sm bg-gray-50 rounded-lg p-5 m-1">
                    I really enjoy working with motivated people to solve real-world problems. My approach to software engineering is very pragmatic. I am technology agnostic and believe that the best tool is the one that the team is most comfortable with.
                    <hr className="my-5"></hr>
                    <div className="flex gap-3 font-medium">
                        <div className="flex flex-col gap-3 justify-center">
                            <a href="https://github.com/deeds67" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                            </a>

                            <a href="https://www.linkedin.com/in/pierre-marais-a67-/" target="_blank" aria-label="Social media" rel="noreferrer">
                                <svg className="w-6 h-6 hover:text-gray-900 duration-150" fill="none" viewBox="0 0 28 28"><g clipPath="url(#clip0_1274_2978)"><path fill="currentColor" d="M25.927 0H2.067C.924 0 0 .902 0 2.018v23.959C0 27.092.924 28 2.067 28h23.86C27.07 28 28 27.092 28 25.982V2.018C28 .902 27.07 0 25.927 0zM8.307 23.86H4.151V10.495h4.156V23.86zM6.229 8.673a2.407 2.407 0 110-4.812 2.406 2.406 0 010 4.812zM23.86 23.86h-4.15v-6.497c0-1.547-.028-3.543-2.16-3.543-2.16 0-2.49 1.69-2.49 3.434v6.606h-4.144V10.495h3.98v1.826h.056c.552-1.05 1.908-2.16 3.926-2.16 4.206 0 4.982 2.767 4.982 6.366v7.333z"></path></g><defs><clipPath id="clip0_1274_2978"><path fill="#fff" d="M0 0h28v28H0z"></path></clipPath></defs></svg>
                            </a>
                        </div>
                        <div className="flex flex-col gap-3 justify-center">
                            <a href="https://github.com/deeds67" target="_blank" rel="noopener noreferrer">
                                Github
                            </a>
                            <a href="https://www.linkedin.com/in/pierre-marais-a67-/" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutMe