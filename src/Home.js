import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data: blogs, isLoading, error} = useFetch("http://localhost:8000/blogs");

    return ( 
        <div>
            <div className="w-7/12 mx-auto mt-10">
                {error && <div>{error}</div>}
                {isLoading && <div>Loading...</div>}
            </div>
            <BlogList blogs={blogs} />
        </div>
     );
}
 
export default Home;