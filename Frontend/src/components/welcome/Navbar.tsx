import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    const [isServiceMenuOpen, setServiceMenuOpen] = useState<boolean>(false);
    return (
        <>
            <div className="w-full max-w-screen-xl mx-auto h-[80px] flex items-center gap-12">
                <NavLink to="/welcome" className="flex items-center">
                    <img src="/icons/logo-blank.png" alt="eDokan" className="h-8" />
                    <h1 className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap -ml-1">
                        Dokan
                    </h1>
                </NavLink>

                <nav>
                    <ul className="flex items-center gap-6 select-none">
                        <li
                            className={"flex items-center hover:text-blue-500 cursor-pointer" + (isServiceMenuOpen ? " text-blue-400" : "")}
                            onClick={
                                () => setServiceMenuOpen((b) => !b)
                            }>
                            <span>Services</span>
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" className={"w-3 h-3 ms-1 mt-1" + (isServiceMenuOpen ? "transform rotate-180" : "")}>
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m1 1 4 4 4-4" />
                            </svg></li>
                        <NavLink to="/docs" className="hover:text-blue-500">
                            <li>Documentation</li>
                        </NavLink>
                        <NavLink to="/about-us" className="hover:text-blue-500">
                            <li>About Us</li>
                        </NavLink>
                        <NavLink to="/blog" className="hover:text-blue-500">
                            <li>Blog</li>
                        </NavLink>
                    </ul>
                </nav>

                <div className="flex items-center gap-3 ms-auto">
                    <Link to="/account/login">
                        <button type="button" className="text-white bg-gray-700 hover:bg-gray-800 font-medium rounded-lg px-5 py-2 text-center">
                            Login
                        </button>
                    </Link>
                    <Link to="/welcome/get-started">
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg px-5 py-2 text-center inline-flex items-center">
                            Get Started
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>

            <div className={`mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600 ${isServiceMenuOpen ? "block" : "hidden"}`}>
                <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-3 md:px-6">
                    <ul>
                        <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="font-semibold">Online Stores</div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="font-semibold">Segmentation</div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="font-semibold">Marketing CRM</div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="font-semibold">Online Stores</div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="font-semibold">Segmentation</div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="font-semibold">Marketing CRM</div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
