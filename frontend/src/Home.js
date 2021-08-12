import { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import BlogList from "./BlogList";


const BLOGS = gql`
    query GetBlogs{
        blogs {
            id
            title
            body
            author
            category
            blogImage{
              url
            }
          }
    }
`

const Home = () => {
    // https://my-json-server.typicode.com/tasfiaislam/blog-json-server/blogs/
    const {isLoading, error, data} = useQuery(BLOGS)
  
    
    const [searchTerm, setSearchTerm] = useState('');
    const [searchCategory, setSearchCategory] = useState("None");
    const [searchResults, setSearchResults] = useState([]);

    const [searchArray, setSearchArray] = useState([]);


    const categoryHandler = (searchCategory) => {

        setSearchCategory(searchCategory);

        if(searchCategory !== "None"){
            const newBlogList = data.blogs.filter( (blog) => (
                blog.category.toLowerCase() === searchCategory.toLowerCase()
             ));
             setSearchArray(newBlogList);
             setSearchResults(newBlogList);
        }else{
            setSearchArray(data.blogs);
            setSearchResults(data.blogs);
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
            setSearchResults(data.blogs);
        }
    }

    return ( 
        <div>
            {/* {console.log(data.blogs)} */}
            <div className="w-4/5 md:w-7/12 mx-auto mt-10">
                {error && <div>{error}</div>}
                {isLoading && <div>Loading...</div>}
            </div>
            <BlogList 
                blogs={(searchTerm.length < 1 && searchCategory === "None") ? data.blogs : searchResults } 
                searchTerm={searchTerm} searchCategory={searchCategory} searchHandler={searchHandler}
                categoryHandler={categoryHandler}
            />
        </div>
     );
}
 
export default Home;