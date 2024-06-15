import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <div className="w-full p-4 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-700 bg-white dark:bg-gray-800">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear() || "2024"} <NavLink to="/about-us" className="hover:underline">eDokan</NavLink>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <NavLink to="/about-us" className="hover:underline me-4 md:me-6">About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/legal/privacy-policy" className="hover:underline me-4 md:me-6">Privacy Policy</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" className="hover:underline me-4 md:me-6">Our Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="hover:underline">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}
