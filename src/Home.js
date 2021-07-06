import React,{ useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My trip to Bali', body:'Lorem ipsum....', author:'Tasfia', id:1},
        {title: 'The one time I went to Bangladesh', body:'Lorem ipsum....', author:'Nusrat', id:2},
        {title: 'Sublte things we ignore', body:'Lorem ipsum....', author:'Labiba', id:3},
        {title: 'Late night thoughts', body:'Lorem ipsum....', author:'Beth', id:4}
    ]);
    return ( 
        <div className="w-7/12 mx-auto mt-10">
            {blogs.map( blog => (
                <div className="my-8 hover:shadow-md p-4" key={blog.id}>
                    <h2 className="py-2 text-xl text-green-400 font-bold hover:text-black">{ blog.title }</h2>
                    <p className="text-gray-400 text-sm">Written by { blog.author }</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;