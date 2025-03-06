// import React from 'react'
const Contact = () => {
    return (
        <div className="max-w-[1300px] mx-auto text-white py-20 flex flex-col items-center justify-center px-10 xl:px-0">
            <h2 className=" font-semibold text-5xl inline-block mb-7 text-transparent bg-linear-to-r from-purple-600 to-white bg-clip-text leading-tight">Liên hệ</h2>
            <ul className="text-xl">
                <li>
                    Email: 
                    <a href="mailto:dev.lamtuan@gmail.com" className="ml-1 text-blue-500 underline">dev.lamtuan@gmail.com</a>
                </li>
                <li>
                    Số điện thoại: <a href="tel:0354568051" className="ml-1 text-blue-500 underline">0354568051</a>
                </li>
            </ul>
        </div>
    )
}

export default Contact
