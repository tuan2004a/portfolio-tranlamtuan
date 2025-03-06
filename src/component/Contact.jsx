// import React from 'react'

const Contact = () => {
    return (
        <div className="max-w-[1300px] mx-auto text-white py-20 flex flex-col items-center justify-center px-10 xl:px-0">
            <h2 className="font-semibold text-5xl inline-block mb-7 text-transparent bg-linear-to-r from-purple-600 to-white bg-clip-text leading-tight">Liên hệ</h2>
            <form className="bg-[#140c1c] p-7 border border-[#8750f7]/10 rounded-2xl w-1/2">
                <div className="flex items-center justify-between space-x-3.5">
                    <input type="text" className="bg-[#050709] w-full py-3 px-3 outline-none border border-[#8750f7]/0 rounded-lg placeholder:text-zinc-600 focus:border-[#8750f7]" placeholder="Họ và tên" />
                    <input type="number" className="bg-[#050709] w-full py-3 px-3 outline-none border border-[#8750f7]/0 rounded-lg placeholder:text-zinc-600 focus:border-[#8750f7]" placeholder="Số điện thoại"/>
                </div>
                <input type="email" className="bg-[#050709] w-full py-3 px-3 outline-none border border-[#8750f7]/0 mt-3.5 rounded-lg placeholder:text-zinc-600 focus:border-[#8750f7]" placeholder="Email" />
                <textarea className="w-full bg-[#050709] py-3 px-3 mt-3.5 rounded-lg outline-none border border-[#8750f7]/0 placeholder:text-zinc-600 focus:border-[#8750f7]" placeholder="Tin nhắn" name="" id="" cols={30} rows={10}></textarea>
            </form>
            
        </div>
    )
}

export default Contact
