// import React from 'react'

const About = () => {
    return (
        <div className="max-w-[1300px] mx-auto text-white flex flex-col items-center justify-center py-20 px-10 xl:px-0">
            <h2 className="font-semibold text-5xl inline-block mb-7 text-transparent bg-linear-to-r from-purple-600 to-white bg-clip-text leading-tight">Thông tin</h2>
            <p className="z-30  text-center text-3xl leading-normal font-light xl:max-w-3/4">
                Hiện đang là sinh viên năm cuối ngành công nghệ thông tin với niềm đam mê về công nghệ và lập trình và đang tìm kiếm cơ hội phát triển bản thân với vai trò intern developer.
            </p>
            <a href="https://drive.google.com/file/d/1tVZyWLZWcNFiVWINfPTeb5GI3MJ5yrJr/view?usp=sharing" className="mt-7 py-4 px-7 bg-[#8750f7] rounded-full font-semibold leading-none flex items-center justify-center text-lg cursor-pointer">
                Tải hồ sơ xuống
                <i className="fa-solid fa-download ml-4 text-xl"></i>
            </a>


            <div className="">

            </div>
        </div>
    )
}

export default About
