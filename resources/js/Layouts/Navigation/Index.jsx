import { Link } from "@inertiajs/react";
import {useState} from "react";
import { motion } from "framer-motion";

const icon = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        fill: "rgb(255,255,255)"
    }
};


export default function Index() {
    const [toggleNavbar, setToggleNavbar] = useState(false);

    function onClickToggle() {
        setToggleNavbar(!toggleNavbar);
    }
    return (
       <>
           <nav className="w-full py-4 px-4 bg-transparent z-50 flex justify-between md:flex absolute top-0 left-0 lg:hidden items-center">
               <div>
                   <motion.img
                       src="/images/vertical-white.png"
                       alt="Logo"
                       className="w-10"
                       variants={icon}
                       initial="hidden"
                       animate="visible"
                       transition={{
                           default: { duration: 2, ease: "easeInOut" },
                           fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                       }}
                   />
               </div>
               <div>
                   <button onClick={onClickToggle}>
                       <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth={1.5}
                           stroke="currentColor"
                           className="w-6 h-6 text-white"
                       >
                           <path
                               strokeLinecap="round"
                               strokeLinejoin="round"
                               d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                           />
                       </svg>
                   </button>
                   {toggleNavbar && (
                       <div className="transition duration-500 ease-in-out">
                           <nav className="bg-white font-medium p-4 md:dark:bg-gray-900 dark:border-gray-700 absolute right-0 mr-5">
                               <ul className="flex flex-col">
                                   <li>
                                       <Link href="/"
                                             className={`block py-2 pl-3 pr-4 ${window.location.pathname === '/' ? 'text-white bg-gray-800' : 'text-gray-800'} rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500`}
                                             aria-current="page">Home</Link>
                                   </li>
                                   <li>
                                       <Link href="/about-us"
                                             className={`block py-2 pl-3 pr-4 ${window.location.pathname === '/grow-with-us' ? 'text-white bg-gray-800' : 'text-gray-800'} rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500`}
                                       >
                                           About</Link>
                                   </li>
                                   <li>
                                       <Link  href="/contact"
                                              className={`block py-2 pl-3 pr-4 ${window.location.pathname === '/activities' ? 'text-white bg-gray-800' : 'text-gray-800'} rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500`}
                                       >
                                           Contacts</Link>
                                   </li>
                                   <li>
                                       <Link href="/about-us"
                                             className={`block py-2 pl-3 pr-4 ${window.location.pathname === '/service' ? 'text-white bg-gray-800' : 'text-gray-800'} rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500`}
                                       >    Service</Link>
                                   </li>
                               </ul>
                           </nav>
                       </div>
                   )}
               </div>
           </nav>
           <nav className="w-full z-50 absolute top-0 left-0">
               <div className="hidden md:hidden lg:grid grid-cols-2 items-center py-4 max-w-6xl mx-auto">
                   <div className="container">
                       <motion.img
                           src="/images/horizontal-white.png"
                           alt="Logo"
                           className="w-44"
                           variants={icon}
                           initial="hidden"
                           animate="visible"
                           transition={{
                               default: { duration: 2, ease: "easeInOut" },
                               fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                           }}
                       />
                   </div>
                   <div className="flex justify-evenly">
                       <Link href="/" className="text-gray-200 hover:text-white transition ease-in-out duration-300 font-medium">
                           Home
                       </Link>
                       <Link  href="/about-us" className="text-gray-200 hover:text-white transition ease-in-out duration-300 font-medium">
                           About
                       </Link>
                       <Link  href="/contact" className="text-gray-200 hover:text-white transition ease-in-out duration-300 font-medium">
                           Contact
                       </Link>
                       <Link  href="/service" className="text-gray-200 hover:text-white transition ease-in-out duration-300 font-medium">
                           Service
                       </Link>
                   </div>
               </div>
           </nav>
       </>
    );
}
