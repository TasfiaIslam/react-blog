import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const BlogList = ({blogs, searchTerm, searchCategory, searchHandler, categoryHandler}) => {

    
    const inputEl = useRef("");
    const selectEl = useRef("");

    const getSearchItems = () => {
        searchHandler(inputEl.current.value);
    }

    const getSelectItems = () => {
        categoryHandler(selectEl.current.value);
    }
    
    return ( 
        <div className="w-4/5 md:w-7/12 mx-auto md:mt-10">
            {/* Search Bar */}
            <div className="flex justify-between">
                <div className="mb-4 md:mb-0 md:w-1/3 shadow flex">
                    <input className="w-full rounded p-2 outline-none" type="text" placeholder="Search..."
                            value={searchTerm} onChange={getSearchItems} ref={inputEl}
                        />
                    <button className="bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
                {/* Select Category */}
                <div>
                    <select
                        value={searchCategory} ref={selectEl}
                        onChange={getSelectItems}
                        className="w-6/7 h-10 border-none outline-none shadow-md bg-white"
                    >
                        <option value="None">Category</option>
                        <option value="Technology">Technology</option>
                        <option value="Sports">Sports</option>
                        <option value="Beauty">Beauty</option>
                        <option value="Travel">Travel</option>
                    </select>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
            {blogs.map( blog => (
                <div className="mt-4 md:my-8 hover:shadow-md" key={blog.id}>
                    <div className="flex flex-col">
                        <div>
                            <img src={blog.blogImage} className="object-cover h-40 md:h-32 w-full"/>
                        </div>
                        <div className="p-4 flex justify-between">
                            <div>
                                <Link to={`/blogs/${blog.id}`}>
                                    <h2 className="py-2 text-xl text-green-400 font-bold hover:text-black">{ blog.title }</h2>
                                    <p className="pb-2 text-gray-400 text-sm">Written by { blog.author }</p>
                                    <p className="pb-2 text-gray-600">{ blog.body.slice(0,100) }.....</p>
                                    <span className="inline-block bg-gray-50 shadow-md rounded-full px-2 md:px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{blog.category}</span>
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