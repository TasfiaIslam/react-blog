import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <header class="md:flex md:items-center md:justify-between p-4 pb-0 shadow-md md:pb-4">
            <div className="w-7/12 mx-auto md:flex md:items-center md:justify-between">
                <div class="flex items-center justify-between mb-4 md:mb-0">
                    <h1 class="leading-none text-2xl text-grey-darkest">
                    <Link to="/" class="no-underline text-green-400 font-bold hover:text-black">
                        WriteUp
                    </Link>
                    </h1>

                    <a class="text-black hover:text-orange md:hidden">
                    <i class="fa fa-2x fa-bars"></i>
                    </a>
                </div>
                <nav className="">
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
                        <Link to="/about" class="border-t block no-underline hover:underline font-semibold py-2 text-gray-400 hover:text-black md:border-none md:p-0">
                        About
                        </Link>
                    </li>
                    <li class="md:ml-4 md:ml-4">
                        <Link to="/contact" class="border-t block no-underline hover:underline font-semibold py-2 text-gray-400 hover:text-black md:border-none md:p-0">
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