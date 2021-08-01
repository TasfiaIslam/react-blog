import { useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data: blogs, isLoading, error} = useFetch("https://my-json-server.typicode.com/tasfiaislam/blog-json-server/blogs");
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const searchHandler = (searchTerm) => {
        setSearchTerm(searchTerm);
        if(searchTerm !== ""){
            const newBlogList = blogs.filter((blog) => {
                return Object.values(blog)
                        .join(" ")
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
            })
            setSearchResults(newBlogList);
        }
        else{
            setSearchResults(blogs);
        }
    }

    return ( 
        <div>
            <div className="w-7/12 mx-auto mt-10">
                {error && <div>{error}</div>}
                {isLoading && <div>Loading...</div>}
            </div>
            <BlogList blogs={searchTerm.length < 1 ? blogs : searchResults } searchTerm={searchTerm} searchHandler={searchHandler}/>
        </div>
     );
}
 
export default Home;