import { useState } from 'react'

const NavBar = () => {
    // const [active, setActive] = useState(0)

    return (
        <header className="mx-auto">
            <div className="flex mb-3">
                <div className="flex flex-1 bg-white justify-center pt-5">
                    <div className="flex flex-1 sm:flex-grow-0 min-w-20 sm:min-w-32 border-b-4 border-blue-600 justify-center">
                        <div className="pb-5">
                            Nav Item
                        </div>
                    </div>
                    <div className="flex flex-1 sm:flex-grow-0 min-w-20 sm:min-w-32 justify-center">
                        Nav Item 2
                    </div>
                    <div className="flex flex-1 sm:flex-grow-0 min-w-20 sm:min-w-32 justify-center">
                        Nav Item 3
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar