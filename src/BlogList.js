import { Link } from "react-router-dom";

const BlogList = ({blogs}) => {
    
    return ( 
        <div className="w-7/12 mx-auto mt-10">
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