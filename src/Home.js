import { useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    // https://my-json-server.typicode.com/tasfiaislam/blog-json-server/blogs/
    const {data: blogs, isLoading, error} = useFetch("http://localhost:8000/blogs");
    
    const [searchTerm, setSearchTerm] = useState('');
    const [searchCategory, setSearchCategory] = useState("None");
    const [searchResults, setSearchResults] = useState([]);

    const [searchArray, setSearchArray] = useState([]);


    const categoryHandler = (searchCategory) => {

        setSearchCategory(searchCategory);

        if(searchCategory !== "None"){
            const newBlogList = blogs.filter( (blog) => (
                blog.category.toLowerCase() === searchCategory.toLowerCase()
             ));
             setSearchArray(newBlogList);
             setSearchResults(newBlogList);
        }else{
            setSearchArray(blogs);
            setSearchResults(blogs);
        }       
    }

    const searchHandler = (searchTerm) => {

        setSearchTerm(searchTerm);   

        if(searchTerm !== ""){
            const newBlogList = searchArray.filter((blog) => {
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
            <div className="w-4/5 md:w-7/12 mx-auto mt-10">
                {error && <div>{error}</div>}
                {isLoading && <div>Loading...</div>}
            </div>
            <BlogList 
                blogs={(searchTerm.length < 1 && searchCategory === "None") ? blogs : searchResults } 
                searchTerm={searchTerm} searchCategory={searchCategory} searchHandler={searchHandler}
                categoryHandler={categoryHandler}
            />
        </div>
     );
}
 
export default Home;