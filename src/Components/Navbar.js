import React from 'react'
import logo from "./logo256.png"
function Navbar() {
    return (
        <div className='mb-[7rem]'>
            <nav class=" backdrop-blur-2xl  bg-[#fdf5f3] fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-2 ">
                    <a href="/" class="flex items-center">
                        <img src={logo} class="h-20  mr-3" alt="Ekstep Logo" />
                        {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ekstep</span> */}
                    </a>

                </div>
            </nav>
        </div>
    )
}

export default Navbar  