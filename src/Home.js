import React,{ useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My trip to Bali', body:'Lorem ipsum....', author:'Tasfia', id:1},
        {title: 'The one time I went to Bangladesh', body:'Lorem ipsum....', author:'Nusrat', id:2},
        {title: 'Sublte things we ignore', body:'Lorem ipsum....', author:'Labiba', id:3},
        {title: 'Late night thoughts', body:'Lorem ipsum....', author:'Beth', id:4}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    return ( 
        <div>
            <BlogList blogs={blogs} handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;