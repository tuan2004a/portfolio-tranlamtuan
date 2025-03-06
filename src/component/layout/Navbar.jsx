// import React from 'react';
import { Link } from 'react-scroll';
import { useState, useEffect } from "react";

const Navbar = () => {
    const [isFixed, setIsFixed] = useState(false);
    const [isBtnNavbar, setIsBtnNavbar] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsFixed(true); 
            } else {
                setIsFixed(false); 
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleDropDownNavbar = () => {
        setIsBtnNavbar((prev) => !prev)
        
    }

    return (
        <div className={`fixed top-0 z-50 w-full py-5 text-white transition-all duration-400 transform ${isFixed ? "bg-[#2a1454]" : "bg-transparent"} `}>
            <div className="flex items-center justify-between max-w-[1300px] mx-auto px-10 xl:px-0">
                <a href="#" className="font-semibold text-2xl">
                    Hồ sơ
                </a>
                <button onClick={ handleDropDownNavbar } className='text-lg md:hidden'>
                    {isBtnNavbar ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-xmark"></i>}
                </button>
                <nav className=' hidden md:block'>
                    <ul className="flex items-center space-x-12">
                        <Link to="home" smooth={true} duration={500} className="cursor-pointer px-2">Trang chủ</Link>
                        <Link to="information" smooth={true} duration={500} className="cursor-pointer px-2">Thông tin</Link>
                        <Link to="services" smooth={true} duration={500} className="cursor-pointer px-2">Services</Link>
                        <Link to="project" smooth={true} duration={500} className="cursor-pointer px-2">Dự án</Link>
                        <Link to="contact" smooth={true} duration={500} className="cursor-pointer px-2">Liên hệ</Link>
                    </ul>
                </nav>

            </div>
            {
                isBtnNavbar  ?
                    ""    
                :
                <div id='dropDown_menu' className='md:hidden z-50 mt-5'>
                    <ul className="flex w-full flex-col items-center bg-[#2a1454] ">
                        <li className='cursor-pointer py-5 hover:bg-[#2a1454]/70 w-full text-center transition-all duration-300 text-lg'>
                            <Link to="home" smooth={true} duration={500}>
                                Trang chủ
                            </Link>
                        </li>
                        <li className='cursor-pointer py-5 hover:bg-[#2a1454]/70 w-full text-center transition-all duration-300 text-lg'>
                            <Link to="information" smooth={true} duration={500}>Thông tin</Link>
                        </li>
                        <li className='cursor-pointer py-5 hover:bg-[#2a1454]/70 w-full text-center transition-all duration-300 text-lg'>
                            <Link to="services" smooth={true} duration={500}>Services</Link>
                        </li>
                        <li className='cursor-pointer py-5 hover:bg-[#2a1454]/70 w-full text-center transition-all duration-300 text-lg'>
                            <Link to="project" smooth={true} duration={500}>Dự án</Link>
                        </li>
                        <li className='cursor-pointer py-5 hover:bg-[#2a1454]/70 w-full text-center transition-all duration-300 text-lg'>
                            <Link to="contact" smooth={true} duration={500}>Liên hệ</Link>
                        </li>
                    </ul>
                </div>
            }
        </div>
    );
};

export default Navbar;
