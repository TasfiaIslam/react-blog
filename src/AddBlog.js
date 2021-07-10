import { useState } from "react";
import { useHistory } from "react-router";
import ImageUpload from 'image-upload-react'
import 'image-upload-react/dist/index.css'

const AddBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Tasfia');
    const [blogImage, setBlogImage] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
 
    const handleImageSelect = (e) => {
        setBlogImage(URL.createObjectURL(e.target.files[0]))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { title, body, author, blogImage };

        setIsLoading(true);

        fetch("http://localhost:8000", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(data)
        }).then(() => {
            console.log("Data added successfully!");
            setIsLoading(false);
            history.push("/");
        })
    }

    return ( 
        <div className="w-7/12 mx-auto mt-10">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-4 flex flex-col justify-center items-center">
                <h1 className="text-4xl font-semibold">Add Blog</h1>
                <div className="my-4 w-full md:w-3/5">
                    <label className="block text-gray-700 text-lg font-bold mb-2">
                        Title
                    </label>
                    <input 
                        onChange={ (e) => setTitle(e.target.value)}
                        id="name" type="text" placeholder="Title" value={title}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    />
                </div>
                <div className="my-4 w-full md:w-3/5">
                    <label className="block text-gray-700 text-lg font-bold mb-2">
                        Blog Content
                    </label>
                    <textarea 
                        onChange={ (e) => setBody(e.target.value)}
                        id="content" value={body}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
                    />
                </div>
                <div className="my-4 w-full md:w-3/5">
                    <label className="block text-gray-700 text-lg font-bold mb-2">
                        Author
                    </label>
                    <select
                        value={author}
                        onChange={ (e) => setAuthor(e.target.value)}
                    >
                        <option value="Tasfia">Tasfia</option>
                        <option value="Mansura">Mansura</option>
                        <option value="Nubayra">Nubayra</option>
                    </select>
                </div>
                <div className="my-4 w-full md:w-3/5">
                    <label className="block text-gray-700 text-lg font-bold mb-2">
                        Upload Image
                    </label>
                    <ImageUpload
                        handleImageSelect={handleImageSelect}
                        imageSrc={blogImage}
                        setImageSrc={setBlogImage}
                        style={{
                            width: 200,
                            height: 100,
                            background: 'gray',
                            marginTop: '-5px'
                        }}
                    />
                </div>
                { !isLoading && 
                <button className="w-3/5 md:w-1/5 bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Add
                </button>}
                { isLoading && 
                <button className="w-3/5 md:w-1/5 bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-not-allowed" type="submit">
                    Adding blog...
                </button>}
            </form>
        </div>
     );
}
 
export default AddBlog;