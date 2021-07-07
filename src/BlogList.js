const BlogList = ({blogs, handleDelete}) => {
    
    return ( 
        <div className="w-7/12 mx-auto mt-10">
            {blogs.map( blog => (
                <div className="my-8 hover:shadow-md p-4" key={blog.id}>
                    <div className="flex justify-between">
                        <div>
                            <h2 className="py-2 text-xl text-green-400 font-bold hover:text-black">{ blog.title }</h2>
                            <p className="text-gray-400 text-sm">Written by { blog.author }</p>
                        </div>
                        <div className="text-red-500 hover:text-black" onClick={() => handleDelete(blog.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </div>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;