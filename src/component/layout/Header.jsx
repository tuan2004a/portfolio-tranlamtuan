import { useState, useEffect } from "react";
import { Link } from 'react-scroll';

const Header = () => {
    const [isFixed, setIsFixed] = useState(false);

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
    });

  return (

    <div>
        <div className={`fixed top-0 z-50 w-full py-5 text-white transition-all duration-400 bg-[#2a1454] ${isFixed ? "translate-y-0" : "-translate-y-full"} `}>
            <div className="flex items-center justify-between max-w-[1300px] mx-auto">
                <a href="#" className="font-semibold text-2xl">
                    Hồ sơ
                </a>
                <nav>
                    <ul className="flex items-center space-x-8">
                        <Link to="home" smooth={true} duration={500} className="cursor-pointer px-2">Trang chủ</Link>
                        <Link to="information" smooth={true} duration={500} className="cursor-pointer px-2">Thông tin</Link>
                        <Link to="services" smooth={true} duration={500} className="cursor-pointer px-2">Services</Link>
                        <Link to="project" smooth={true} duration={500} className="cursor-pointer px-2">Dự án</Link>
                    </ul>
                </nav>
            </div>
        </div>


        <div className="z-40 w-full py-7 text-white transition-all duration-400 bg-transparent ">
            <div className="flex items-center justify-between max-w-[1300px] mx-auto">
                <a href="#" className="font-semibold text-3xl">
                    Hồ sơ
                </a>
                <nav>
                    <ul className="flex items-center space-x-8">
                        <Link to="home" smooth={true} duration={500} className="cursor-pointer px-2">Trang chủ</Link>
                        <Link to="information" smooth={true} duration={500} className="cursor-pointer px-2">Thông tin</Link>
                        <Link to="services" smooth={true} duration={500} className="cursor-pointer px-2">Services</Link>
                        <Link to="project" smooth={true} duration={500} className="cursor-pointer px-2">Dự án</Link>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Header
