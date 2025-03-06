// import React from 'react'
import { motion } from "framer-motion";
const Contact = () => {
    return (
        <div className="max-w-[1300px] mx-auto text-white py-20 flex flex-col items-center justify-center px-10 xl:px-0">
            <motion.h2 
                initial={{ opacity: 0, x: -50, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            className=" font-semibold text-5xl inline-block mb-7 text-transparent bg-linear-to-r from-purple-600 to-white bg-clip-text leading-tight">Liên hệ</motion.h2>
            <ul>
                <li>
                    Email: dev.lamtuan@gmail.com
                </li>
                <li>
                    Số điện thoại: 0354568051
                </li>
            </ul>
        </div>
    )
}

export default Contact
