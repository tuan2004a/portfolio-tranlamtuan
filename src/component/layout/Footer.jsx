import { Link } from 'react-scroll';



const Footer = () => {
    return (
        <div className="rounded-lg shadow-sm bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div href="" className="flex items-center mb-4 sm:mb-0 space-x-3">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Hồ sơ</span>
                    </div>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium lg:space-x-10 sm:mb-0 text-gray-400">
                        <Link to="home" smooth={true} duration={500} className="cursor-pointer px-2">Trang chủ</Link>
                        <Link to="information" smooth={true} duration={500} className="cursor-pointer px-2">Thông tin</Link>
                        <Link to="services" smooth={true} duration={500} className="cursor-pointer px-2">Chuyên môn</Link>
                        <Link to="project" smooth={true} duration={500} className="cursor-pointer px-2">Dự án</Link>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} Hồ sơ.</span>
            </div>
        </div>
    )
}

export default Footer
