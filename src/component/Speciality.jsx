// import React from 'react'

const Speciality = () => {
    return (
        <div className="max-w-[1300px] mx-auto text-white py-20 px-10 xl:px-0">
            <h4 className="font-semibold text-5xl inline-block mb-12 text-transparent bg-linear-to-r from-purple-600 to-white bg-clip-text leading-tight">Chuyên môn</h4>
            <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
                <div className=" rounded-2xl border border-[#8750f7]/50">
                    <div className="bg-[#2a1454] px-7 py-4 rounded-t-2xl">
                        <span className="size-14 rounded-full border border-[#8750f7] flex items-center justify-center ">
                            <i className="fa-solid fa-laptop-code text-xl "></i>
                        </span>
                    </div>
                    <div className="px-7 py-10">
                        <h5 className="text-[26px] font-semibold mb-4">Lập trình web</h5>
                        <p className="text-zinc-300">Xây dựng giao diện với Html Tailwindcss, lập trình FE với ngôn ngữ Reac.js và sử dụng BE với Node.js và Mongodb</p>
                    </div>
                </div>
                <div className=" rounded-2xl border border-[#8750f7]/50">
                    <div className="bg-[#2a1454] px-7 py-4 rounded-t-2xl">
                        <span className="size-14 rounded-full border border-[#8750f7] flex items-center justify-center ">
                            <i className="fa-solid fa-pen-ruler text-xl"></i>
                        </span>
                    </div>
                    <div className="px-7 py-10">
                        <h5 className="text-[26px] font-semibold mb-4">Thiết kế web</h5>
                        <p className="text-zinc-300">Tham gia thiết kế website cơ bản trên Figma </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Speciality
