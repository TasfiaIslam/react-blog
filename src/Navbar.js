const Navbar = () => {
    return ( 
        <header class="md:flex md:items-center md:justify-between p-4 pb-0 shadow-md md:pb-4">
            <div className="w-7/12 mx-auto md:flex md:items-center md:justify-between">
                <div class="flex items-center justify-between mb-4 md:mb-0">
                    <h1 class="leading-none text-2xl text-grey-darkest">
                    <a class="no-underline text-green-400 font-bold hover:text-black" href="#">
                        My Blog
                    </a>
                    </h1>

                    <a class="text-black hover:text-orange md:hidden" href="#">
                    <i class="fa fa-2x fa-bars"></i>
                    </a>
                </div>
                <nav>
                    <ul class="list-reset md:flex md:items-center">
                    <li class="md:ml-4 md:mx-8">
                        <a class="block no-underline hover:underline font-semibold py-2 text-gray-400 hover:text-black md:border-none md:p-0" href="#">
                        Blogs
                        </a>
                    </li>
                    <li class="md:ml-4 md:mx-8">
                        <a class="border-t block no-underline hover:underline font-semibold py-2 text-gray-400 hover:text-black md:border-none md:p-0" href="#">
                        About
                        </a>
                    </li>
                    <li class="md:ml-4 md:mx-8">
                        <a class="border-t block no-underline hover:underline font-semibold py-2 text-gray-400 hover:text-black md:border-none md:p-0" href="#">
                        Contact
                        </a>
                    </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
 
export default Navbar;