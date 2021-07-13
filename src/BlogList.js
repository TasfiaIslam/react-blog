import { useRef } from "react";
import { Link } from "react-router-dom";

const BlogList = ({blogs, searchTerm, searchHandler}) => {

    const inputEl = useRef("");

    const getSearchTerm = () => {
        searchHandler(inputEl.current.value);
    }
    
    return ( 
        <div className="w-7/12 mx-auto mt-10">
            {/* Search Bar */}
            <div class="w-1/3 shadow flex">
                <input class="w-full rounded p-2 outline-none" type="text" placeholder="Search..."
                        value={searchTerm} onChange={getSearchTerm} ref={inputEl}
                     />
                <button class="bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
            {blogs.map( blog => (
                <div className="my-8 hover:shadow-md" key={blog.id}>
                    <div className="flex flex-col">
                        <div>
                            <img src={blog.blogImage} className="object-cover h-32 w-full"/>
                        </div>
                        <div className="p-4 flex justify-between">
                            <div>
                                <Link to={`/blogs/${blog.id}`}>
                                    <h2 className="py-2 text-xl text-green-400 font-bold hover:text-black">{ blog.title }</h2>
                                    <p className="text-gray-400 text-sm">Written by { blog.author }</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            ))}
            </div>
        </div>
     );
}
 
export default BlogList;