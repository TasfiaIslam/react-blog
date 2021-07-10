import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams()
    const {data: blog, isLoading, error} = useFetch("http://localhost:8000/blogs/"+id);
    const history = useHistory();

    const handleDelete = () => {
        fetch(`http://localhost:8000/blogs/` +blog.id, {
            method: 'DELETE'
        }).then(()=>{
            history.push("/");
        })
    }

    return ( 
        <div className="w-7/12 mx-auto mt-10">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}.</div>}
            {blog && (
                <div>
                    <h2 className="py-2 text-xl text-green-400 font-bold hover:text-black">{ blog.title }</h2>
                    <p className="text-gray-400 text-sm mb-6">Written by { blog.author }</p>
                    <div>
                        <img className="w-full object-cover h-80 mb-6" src={ blog.blogImage }/>
                        <p className="text-md text-justify">{ blog.body }</p>
                    </div>
                    <div className="text-red-500 hover:text-black">
                        <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                    </div>
                </div>
            )}
        </div>
     );
}
 
export default BlogDetails;