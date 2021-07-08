import React,{ useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState([]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect( () => {
        setTimeout(() => {
            fetch("http://localhost:8000/blogs")
            .then(res => {
                if(!res.ok){
                    throw Error("Could not fetch data for that resource!");
                }
                return res.json()
            })
            .then((data) => {
                setBlogs(data);
                setIsLoading(false);
                setError([]);
            })
            .catch((e) => {
                setIsLoading(false);
                setError(e.message);
            })
        }, 1000)
    },[]);

    return ( 
        <div>
            <div className="w-7/12 mx-auto mt-10">
                {error && <div>{error}</div>}
                {isLoading && <div>Loading...</div>}
            </div>
            <BlogList blogs={blogs} handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;