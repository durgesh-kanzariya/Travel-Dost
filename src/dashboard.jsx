import React, { useState } from 'react';

export default function Home() {
    const [toggle, setTog] = useState(true);
    const ontog = () => {
        const a = !toggle
        setTog(a)
    }

    const [bg, setBg] = useState(true);
    const changebg = () => {
        const b = !bg;
        setBg(b)
        if (bg == true) {
            document.body.style.backgroundColor = "#020617"
            document.body.style.color = "white"
            document.body.style.transitionDuration = "100"
        }
        else {
            document.body.style.backgroundColor = "white"
            document.body.style.color = "black"
            document.body.style.transitionDuration = "100"
        }
    }



    return (
        <>

            <header class={`flex  md:visible md:justify-around justify-between fixed top-0 left-0 w-full bg-white  shadow-md z-50 ${bg == true ? "text-black" : "text-black"}`}>
                <p class={`text-black items-center md:static fixed flex text-2xl font-extrabold  ${bg == true ? "text-black" : "text-black"}`}><img src="./src/image.png" class="h-15" alt="" />Travel Dost</p>
                <nav class="flex md:visible">
                    <ul class={`flex md:flex-row md:flex md:ml-0 ${toggle == true ? "hidden" : "visible"} md:mt-0 md:mb-0 mt-15 mb-3  flex-col gap-10 items-center text-[20px] font-semibold`}>
                        <li><a href="" class=" hover:text-blue-600">Features</a></li>
                        <li><a href="" class="hover:text-blue-600">How It Works</a></li>
                        <li><a href="" class="hover:text-blue-600">About</a></li>
                        <li class="pr-10 hover:text-blue-600"><a href="">Contact</a></li>

                        <div class="flex gap-5">
                            <button onClick={changebg} class="hover:bg-gray-100 pl-5 pr-5 pt-2 pb-2 rounded-[10px]">Dark / Light</button>
                            <a href="" class={`${bg == true ? "hover:bg-gray-100" : "dark"} pl-5 pr-5 pt-2 pb-2 rounded-[10px]`}>Login</a>
                            <a href="" class="rounded-lg bg-sky-900 px-4 py-2 text-[20px] font-medium text-white transition-colors hover:bg-sky-700 dark:bg-sky-600 dark:hover:bg-sky-500">Sign Up Free</a>
                        </div>
                    </ul>
                </nav>
                <img src="./src/image.png" onClick={ontog} class="h-15 md:hidden visible" alt="" />
            </header>

            <div class="p-5 md:flex mt-17 relative -z-1 items-center justify-evenly">
                <div class="mt-0">
                    <p class="w-auto text-7xl font-extrabold">Explore the World  <p class="text-blue-800">Without Fear</p></p><br />
                    <p class="text-2xl md:w-[800px] w-auto">Your smart travel companion that auto-detects your location to provide instant emergency numbers, regional rules, language tools, and local insights. Travel safe, travel smart.</p><br />
                    <a href="" class=" rounded-lg bg-sky-900 px-4 py-2 text-[20px] font-medium text-white transition-colors hover:bg-sky-700 dark:bg-sky-600 dark:hover:bg-sky-500">Start Your Journey {"=>"}</a>
                    <a href="" class="ml-5 rounded-lg p-4 border bg-white hover:bg-gray-100">Learn More</a>
                </div><br />
                <div>
                    <img class="h-[600px] w-full w-fit" src="./src/one.png" alt="" />
                </div>
            </div><br />



            <div class="text-center items-center">
                <h2 class="text-5xl font-bold">Everything You Need to Travel Safe</h2>
                <p class="text-2xl">Powerful features designed to keep you informed, prepared, and confident wherever your adventures take you.</p><br /><br />

                <div class="flex justify-evenly text-start">
                    <div class="w-[440px] h-[270px] p-5 shadow-xl border-[1px] border-gray-200 rounded-3xl hover:shadow-2xl hover:border-blue-400 ">
                        <h2 class="text-2xl font-bold">Smart Location Detection</h2>
                        <p class="text-[19px]">Automatically detects your location and provides region-specific information instantly.</p>
                    </div>
                    <div class="w-[440px] h-[270px] p-5 shadow-xl border-[1px] border-gray-200 rounded-3xl  hover:shadow-2xl hover:border-blue-400 ">
                        <h2 class="text-2xl font-bold">Smart Location Detection</h2>
                        <p class="text-[19px]">Automatically detects your location and provides region-specific information instantly.</p>
                    </div>
                    <div class="w-[440px] h-[270px] p-5 shadow-xl border-[1px] border-gray-200 rounded-3xl  hover:shadow-2xl hover:border-blue-400 ">
                        <h2 class="text-2xl font-bold">Smart Location Detection</h2>
                        <p class="text-[19px]">Automatically detects your location and provides region-specific information instantly.</p>
                    </div>
                </div>
            </div><br /><br />

            <div class="text-center items-center">
                <div class="flex justify-evenly text-start">
                    <div class="w-[440px] h-[270px] p-5 shadow-xl border-[1px] border-gray-200 rounded-3xl hover:shadow-2xl hover:border-blue-400 ">
                        <h2 class="text-2xl font-bold">Smart Location Detection</h2>
                        <p class="text-[19px]">Automatically detects your location and provides region-specific information instantly.</p>
                    </div>
                    <div class="w-[440px] h-[270px] p-5 shadow-xl border-[1px] border-gray-200 rounded-3xl  hover:shadow-2xl hover:border-blue-400 ">
                        <h2 class="text-2xl font-bold">Smart Location Detection</h2>
                        <p class="text-[19px]">Automatically detects your location and provides region-specific information instantly.</p>
                    </div>
                    <div class="w-[440px] h-[270px] p-5 shadow-xl border-[1px] border-gray-200 rounded-3xl  hover:shadow-2xl hover:border-blue-400 ">
                        <h2 class="text-2xl font-bold">Smart Location Detection</h2>
                        <p class="text-[19px]">Automatically detects your location and provides region-specific information instantly.</p>
                    </div>
                </div>
            </div><br /><br /><br />



            <div class="text-center">
                <h1 class="text-3xl font-bold">How It Works</h1>
                <p class="text-[23px]">Start exploring the world safely in three simple steps.</p><br />

                <div class="flex justify-evenly text-start">
                    <div class="w-[440px] h-[270px] p-5 shadow-xl border-[1px] border-gray-200 rounded-3xl hover:shadow-2xl hover:border-blue-400 ">
                        <h2 class="text-2xl font-bold">Smart Location Detection</h2>
                        <p class="text-[19px]">Automatically detects your location and provides region-specific information instantly.</p>
                    </div>
                    <div class="w-[440px] h-[270px] p-5 shadow-xl border-[1px] border-gray-200 rounded-3xl  hover:shadow-2xl hover:border-blue-400 ">
                        <h2 class="text-2xl font-bold">Smart Location Detection</h2>
                        <p class="text-[19px]">Automatically detects your location and provides region-specific information instantly.</p>
                    </div>
                    <div class="w-[440px] h-[270px] p-5 shadow-xl border-[1px] border-gray-200 rounded-3xl  hover:shadow-2xl hover:border-blue-400 ">
                        <h2 class="text-2xl font-bold">Smart Location Detection</h2>
                        <p class="text-[19px]">Automatically detects your location and provides region-specific information instantly.</p>
                    </div>
                </div>
            </div><br /><br /><br />



            <div class="text-center">
                <h1 class="text-3xl font-bold">About TravelDost</h1>
                <div class="text-center">
                    <p class="ml-100 mr-100 text-[22px]">Born from a 6th Semester Major Project, TravelDost aims to make tourism safer and smarter. We believe that lack of local knowledge shouldn't be a barrier to exploration. By combining geolocation technology with a curated database of local rules and emergency contacts, we empower travelers to visit new places with confidence.</p>
                </div>
            </div><br /><br /><br />
        </>
    );
}


