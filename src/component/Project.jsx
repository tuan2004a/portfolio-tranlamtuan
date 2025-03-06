// import React from 'react'

const Project = () => {
    return (
        <div className="max-w-[1300px] mx-auto py-20 px-10 xl:px-10">
            <h4 className="font-semibold text-5xl inline-block mb-12 text-transparent bg-linear-to-r from-purple-600 to-white bg-clip-text leading-tight">Dự án gần đây</h4>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                <div className="z-10 group overflow-hidden rounded-2xl relative h-56 bg-cover bg-top bg-no-repeat bg-[url(https://themejunction.net/tailwind/gerold/demo/assets/img/project/project-3.png)]">
                    <span className="flex flex-col items-center justify-center z-20 cursor-default bg-linear-to-t from-indigo-800 from-15% to-transparent absolute size-full rounded-2xl transition-all duration-400 translate-y-full group-hover:translate-y-0">
                        <h5 className="text-2xl text-white font-semibold mb-3">TokenMiner</h5>
                        <p className="text-white text-center text-wrap max-w-3/4 mb-2 leading-tight">Tham gia xây dựng Html/css</p>
                        <a href="#" className="size-10 bg-white rounded-full flex items-center justify-center">
                            <i className="fa-solid fa-arrow-up-left-from-circle rotate-90"></i>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Project
