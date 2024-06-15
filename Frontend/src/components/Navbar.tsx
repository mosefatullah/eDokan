import { useEffect, useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../utils/account";

export default function Navbar({ isSidebarOpen, setSidebar }: { isSidebarOpen: boolean, setSidebar: (arg0: boolean) => void }) {
   const [isAccountMenuOpen, setAccountMenu] = useState<boolean>(false);
   const userInfo = useMemo(() => JSON.parse(localStorage.getItem("user-info") || "{}"), []);

   const [profile, setProfile] = useState<string>(userInfo.picture || "/icons/user-icon.png");
   const [email, setEmail] = useState<string>(userInfo.email || "No email address");
   const [username, setUsername] = useState<string>(userInfo.username || "USER");

   useEffect(() => {
      setProfile(userInfo.picture || "/icons/user-icon.png");
      setEmail(userInfo.email || "No email address");
      setUsername(userInfo.username || "USER");
   }, [userInfo]);
   return (
      <>
         <div className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
               <div className="flex items-center justify-between">
                  <div className="flex items-center justify-start rtl:justify-end">
                     <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={() => setSidebar(!isSidebarOpen)}>
                        <span className="sr-only">Open sidebar</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                        </svg>
                     </button>
                     <NavLink to="/main" className="flex items-center">
                        <img src="/icons/logo-blank.png" alt="eDokan" className="h-8" />
                        <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap -ml-1 dark:text-white">
                           Dokan
                        </span>
                     </NavLink>
                     <form className="ms-10 hidden sm:block">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative w-[500px]">
                           <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                              </svg>
                           </div>
                           <input type="search" id="default-search" className="block w-full p-4 py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Stores, Markets..." required />
                        </div>
                     </form>
                  </div>
                  <div className="flex items-center gap-4">
                     <div>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                           <option selected>Choose a dokan</option>
                           {/*<option value="US">United States</option>*/}
                        </select>
                     </div>
                     <div className="flex items-center gap-2">
                        <div>
                           <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                              </svg>
                              <span className="sr-only">Create new dokan</span>
                           </button>
                        </div>
                        <div>
                           <button type="button" className="flex text-sm bg-gray-800 rounded-full dark:ring-4 dark:ring-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false"
                              onClick={() => setAccountMenu(!isAccountMenuOpen)}
                              data-dropdown-toggle="dropdown-user">
                              <span className="sr-only">Open user menu</span>
                              <img className="w-8 h-8 rounded-full" src={profile} alt="User" />
                           </button>
                           <div className="z-50 my-4 text-base list-none divide-y divide-gray-100 rounded shadow dark:bg-gray-800 dark:divide-gray-700 border border-gray-100 dark:border-gray-700"
                              style={isAccountMenuOpen ? { position: "absolute", inset: "0px 200px auto auto", margin: 0, transform: "translate3d(193.6px, 58.4px, 0px)" } : { display: "none" }}
                           >
                              <div className="px-4 py-3" role="none">
                                 <p className="text-sm text-gray-900 dark:text-white" role="none">
                                    {username
                                       ?.replace(/-/g, " ")
                                       ?.split(" ")
                                       ?.map((word: string) => word[0].toUpperCase() + word.slice(1))
                                       ?.join(" ")}
                                 </p>
                                 <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                    {email}
                                 </p>
                              </div>
                              <ul className="py-1" role="none" onClick={() => setAccountMenu(false)}>
                                 <li>
                                    <Link to="/account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Account</Link>
                                 </li>
                                 <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">My Dokans (unavailable)</a>
                                 </li>
                                 <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                                 </li>
                                 <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem" onClick={logout}>Sign out</a>
                                 </li>
                              </ul>
                           </div></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
