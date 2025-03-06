// import React from 'react'

const Education = () => {
    return (
        <div className="max-w-[1300px] mx-auto text-white py-20 px-5 xl:px-0">
            {/* <h2 className="font-semibold text-5xl inline-block mb-7 text-transparent bg-linear-to-r from-purple-600 to-white bg-clip-text leading-tight">Học vấn & kinh nghiệm</h2>
             <div className="grid grid-cols-2 mt-5 gap-14">
                <div className="flex items-start space-x-5 pl-10 relative after:absolute after:bg-gray-700 after:h-5/6 after:w-px after:top-7 after:left-1.5 before:absolute before:top-5 before:left-px before:size-3 before:bg-gray-700 before:rounded-full">
                    <div className="size-14 bg-[#2a1454] rounded-full flex items-center justify-center">
                        <i className="fa-solid fa-graduation-cap text-2xl"></i>
                    </div>
                    <div >
                        <span className="text-lg font-bold text-[#8750f7] ">2022 - 2024</span>
                        <h5 className="text-xl font-extrabold mt-2">CÔNG NGHỆ THÔNG TIN</h5>
                        <p className="mt-2 text-gray-400">CĐ FPT Polytechnic - Tp Hồ Chí Minh</p>
                    </div>
                </div>
                <div className="flex items-start space-x-5 pl-10 relative after:absolute after:bg-gray-700 after:h-5/6 after:w-px after:top-7 after:left-1.5 before:absolute before:top-5 before:left-px before:size-3 before:bg-gray-700 before:rounded-full">
                    <div className="size-14 bg-[#2a1454] rounded-full flex items-center justify-center">
                        <i className="fa-solid fa-briefcase text-2xl"></i>
                    </div>
                    <div >
                        <span className="text-lg font-bold text-[#8750f7] ">8/2023 - 9/2023</span>
                        <h5 className="text-xl font-extrabold mt-2">THỰC TẬP SINH</h5>
                        <p className="mt-2 text-gray-400">Công ty TNHH công nghệ Optech</p>
                    </div>
                </div>
            </div> */}

            <div className="grid grid-cols-1 mt-5 gap-14 lg:grid-cols-2 ">
                <div>
                    <h3 className="font-semibold text-5xl inline-block mb-7 text-transparent bg-linear-to-r from-purple-600 to-white bg-clip-text leading-tight">Học vấn</h3>
                    <ul>
                        <li className="p-7 rounded-2xl flex items-start space-x-5 bg-linear-to-l from-[#2a1454]/40 to-[#140c1c]">
                            <div className="size-14 bg-[#2a1454] rounded-full flex items-center justify-center">
                                <i className="fa-solid fa-graduation-cap text-2xl"></i>
                            </div>
                            <div >
                                <span className="text-lg font-bold text-[#8750f7] ">2022 - 2024</span>
                                <h5 className="text-xl font-extrabold mt-2">CÔNG NGHỆ THÔNG TIN</h5>
                                <p className="mt-2 text-gray-400">CĐ FPT Polytechnic - Tp Hồ Chí Minh</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-5xl inline-block mb-7 text-transparent bg-linear-to-r from-purple-600 to-white bg-clip-text leading-tight">Kinh nghiệm</h3>
                    <ul>
                        <li className="p-7 rounded-2xl flex items-start space-x-5 bg-linear-to-l from-[#2a1454]/40 to-[#140c1c]">
                            <div className="size-14 bg-[#2a1454] rounded-full flex items-center justify-center">
                                <i className="fa-solid fa-briefcase text-2xl"></i>
                            </div>
                            <div >
                                <span className="text-lg font-bold text-[#8750f7] ">8/2023 - 9/2023</span>
                                <h5 className="text-xl font-extrabold mt-2">THỰC TẬP SINH</h5>
                                <p className="mt-2 text-gray-400">Công ty TNHH công nghệ Optech</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


    )
}

export default Education
