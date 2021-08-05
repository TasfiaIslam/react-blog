import { useState } from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {

    const [isHidden, setHidden] = useState("true");

    const handleMenu = (e) => {
        e.preventDefault();
        setHidden(!isHidden);
    }

    return ( 
        <header class="md:flex md:items-center md:justify-between py-4 pb-0 shadow-md md:pb-4">
            <div className="w-4/5 md:w-7/12 mx-auto md:flex md:items-center md:justify-between">
                <div className="flex items-center justify-between">
                    
                    <div class="flex items-center justify-between mb-4 md:mb-0">
                        <h1 class="leading-none text-2xl text-grey-darkest">
                            <Link to="/" class="no-underline text-green-400 font-bold hover:text-black">
                                WriteUp
                            </Link>
                        </h1>
                    </div>

                    <nav className="md:hidden mb-4" onClick={handleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </nav>
                </div>
                <nav className={`md:block ${isHidden ? "hidden" : "block"} `}>
                    <ul class="list-reset md:flex md:items-center">
                        <li class="md:ml-4 md:mx-8">
                            <Link to="/blogs/add" class="block no-underline hover:underline font-semibold py-2 text-gray-400 hover:text-black md:border-none md:p-0">
                            New Blog
                            </Link>
                        </li>
                        <li class="md:ml-4 md:mx-8">
                            <Link to="/" class="block no-underline hover:underline font-semibold py-2 text-gray-400 hover:text-black md:border-none md:p-0">
                            Blogs
                            </Link>
                        </li>
                        <li class="md:ml-4 md:mx-8">
                            <Link to="/about" class="block no-underline hover:underline font-semibold py-2 text-gray-400 hover:text-black md:border-none md:p-0">
                            About
                            </Link>
                        </li>
                        <li class="md:ml-4 md:ml-4">
                            <Link to="/contact" class="block no-underline hover:underline font-semibold py-2 text-gray-400 hover:text-black md:border-none md:p-0">
                            Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                </div>
        </header>
    );
}
 
export default Navbar;