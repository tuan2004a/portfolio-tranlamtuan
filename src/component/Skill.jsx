// import React from 'react'

const Skill = () => {
    return (
        <div className="max-w-[1300px] mx-auto text-white py-20 px-10 xl:px-0">
            <h4 className="font-semibold text-5xl text-center mb-12 text-transparent bg-linear-to-r from-purple-600 from-45% to-white to-55% bg-clip-text leading-tight">Kỹ năng</h4>
            <div className="w-full flex flex-wrap items-center justify-center gap-7">
                <div className="size-44 bg-[#140C1C] group flex flex-col items-center justify-center rounded-3xl transition-all duration-300 cursor-default border border-transparent hover:border-[#8750f7]">
                    <img src="./image/skills/figma.png" alt="" className="size-14 grayscale-80 transition-all duration-300 group-hover:grayscale-0"/>
                    <span className="text-xl font-medium mt-5 text-gray-400 ">Figma</span>
                </div>
                <div className="size-44 bg-[#140C1C] group flex flex-col items-center justify-center rounded-3xl transition-all duration-300 cursor-default border border-transparent hover:border-[#8750f7]">
                    <img src="./image/skills/tailwindcss.png" alt="" className="size-14 grayscale-80 transition-all duration-300 group-hover:grayscale-0"/>
                    <span className="text-xl font-medium mt-5 text-gray-400">Tailwindcss</span>
                </div>
                <div className="size-44 bg-[#140C1C] group flex flex-col items-center justify-center rounded-3xl transition-all duration-300 cursor-default border border-transparent hover:border-[#8750f7]">
                    <img src="./image/skills/js.png" alt="" className="size-14 grayscale-80 transition-all duration-300 group-hover:grayscale-0"/>
                    <span className="text-xl font-medium mt-5 text-gray-400">JavaScript</span>
                </div>
                <div className="size-44 bg-[#140C1C] group flex flex-col items-center justify-center rounded-3xl transition-all duration-300 cursor-default border border-transparent hover:border-[#8750f7]">
                    <img src="./image/skills/react.png" alt="" className="size-14 grayscale-80 transition-all duration-300 group-hover:grayscale-0"/>
                    <span className="text-xl font-medium mt-5 text-gray-400">React</span>
                </div>
                <div className="size-44 bg-[#140C1C] group flex flex-col items-center justify-center rounded-3xl transition-all duration-300 cursor-default border border-transparent hover:border-[#8750f7]">
                    <img src="./image/skills/nodejs.png" alt="" className="size-14 grayscale-80 transition-all duration-300 group-hover:grayscale-0"/>
                    <span className="text-xl font-medium mt-5 text-gray-400">Nodejs</span>
                </div>
                <div className="size-44 bg-[#140C1C] group flex flex-col items-center justify-center rounded-3xl transition-all duration-300 cursor-default border border-transparent hover:border-[#8750f7]">
                    <img src="./image/skills/mongodb.png" alt="" className="size-14 grayscale-80 transition-all duration-300 group-hover:grayscale-0"/>
                    <span className="text-xl font-medium mt-5 text-gray-400">Mongodb</span>
                </div>
            </div>
        </div>
    )
}

export default Skill
