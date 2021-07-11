import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, isLoading, error} = useFetch("http://localhost:8000/blogs/"+id);
    const history = useHistory();

    const [liked, setLiked] = useState(false);

    const handleDelete = () => {
        fetch(`http://localhost:8000/blogs/` +blog.id, {
            method: 'DELETE'
        }).then(()=>{
            history.push("/");
        })
    }

    const toggleLike = () => {
        let localLiked = liked;
        localLiked = !localLiked;
        setLiked(localLiked);
        if(localLiked){
            console.log("liked");
        }
        else{
            console.log("unliked");
        }
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
                    <div className="" onClick={toggleLike}>
                        {liked === false ?  
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        :
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-red-500 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        }
                    </div>
                </div>
            )}
        </div>
     );
}
 
export default BlogDetails;