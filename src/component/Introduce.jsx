
const Introduce = () => {
    return (
        <div className="max-w-[750px] mx-auto text-white py-20 px-5 lg:max-w-[1300px] sm:px-10 xl:px-0">
            <div className="w-full flex flex-wrap items-center justify-between md:flex-nowrap">
                <div className="flex flex-col items-center w-full md:w-1/2">
                    <h1 className="text-left font-bold w-full text-[21px] lg:pl-20 md:text-xl lg:text-3xl">
                        Xin chào, Tôi là Lâm Tuấn <br /> <span className="inline-block font-bold text-transparent bg-linear-to-r from-purple-600 to-white bg-clip-text leading-none mt-2.5 text-4xl md:text-4xl lg:text-6xl">Web Developer</span>
                    </h1>
                    <div className="size-[320px] sm:size-[380px] md:size-[430px] overflow-hidden relative rounded-4xl border-2 border-[#8750f7]/50 cursor-default transition-all duration-400 rotate-6 hover:rotate-0 hover:border-[#8750f7] my-10 md:hidden">
                        <img src="/image/avat2.jpg" alt="" className="overflow-hidden " />
                    </div>
                    <p className="text-xl font-light leading-relaxed mt-5 text-zinc-300 w-full lg:pl-20 md:max-lg:text-lg">Sinh viên năm cuối ngành công nghệ thông tin đang tìm kiếm cơ hội  phát triển bản thân với vai  trò intern developer</p>
                    
                    <div className="flex flex-wrap items-center gap-7 mt-10 w-full lg:pl-20">
                        <a href="mailto:dev.lamtuan@gmail.com" className="py-4 px-18 bg-[#8750f7] rounded-full font-semibold leading-none flex items-center text-[17.5px] cursor-pointer lg:px-8">
                            <i className="fa-regular fa-envelope mr-3 text-[27px]"></i>
                            Gmail
                        </a>
                        <div className="flex items-center space-x-7">
                            <a href="https://www.linkedin.com/in/lam-tuan-2072a4329/" className="size-9 overflow-hidden peer relative z-10 rounded-full border border-[#8750f7] flex items-center justify-center text-[#8750f7] text-sm transition-all duration-300 hover:text-white after:absolute after:top-1/2 after:left-1/2 after:-translate-1/2 after:size-0 after:-z-10 after:bg-[#8750f7] after:rounded-full after:transition-all after:duration-300 hover:after:size-full">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a href="https://tranlamtuan.vercel.app/" className="size-9 overflow-hidden peer relative z-10 rounded-full border border-[#8750f7] flex items-center justify-center text-[#8750f7] text-sm transition-all duration-300 hover:text-white after:absolute after:top-1/2 after:left-1/2 after:-translate-1/2 after:size-0 after:-z-10 after:bg-[#8750f7] after:rounded-full after:transition-all after:duration-300 hover:after:size-full">
                                <i className="fa-solid fa-globe"></i>
                            </a>
                            <a href="https://github.com/tuan2004a" className="size-9 overflow-hidden peer relative z-10 rounded-full border border-[#8750f7] flex items-center justify-center text-[#8750f7] text-sm transition-all duration-300 hover:text-white after:absolute after:top-1/2 after:left-1/2 after:-translate-1/2 after:size-0 after:-z-10 after:bg-[#8750f7] after:rounded-full after:transition-all after:duration-300 hover:after:size-full">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 hidden px-5 lg:px-20 md:block">
                    <div className="relative rounded-4xl overflow-hidden border-2 border-[#8750f7]/50 cursor-default transition-all duration-400 rotate-6 bg-cover bg-top bg-no-repeat bg-[url()] hover:rotate-0 hover:border-[#8750f7] md:size-[320px] lg:size-[380px] xl:size-[430px] ">
                        <img src="/image/avat2.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduce
