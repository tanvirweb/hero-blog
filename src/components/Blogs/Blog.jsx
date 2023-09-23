import { Link, useNavigate } from "react-router-dom";

const Blog = ({post}) => {
    const navigate = useNavigate();
    const handleReadMore = () => {
        navigate(`/blogs/${post.id}`)
    }
    return (
        <article style={{border: "2px solid green", borderRadius: "5px", padding: "10px"}}>
            <h3>{post.title}</h3>
            <Link className="flex text-red-600 mb-3" to={`/blogs/${post.id}`}>Read more...</Link>
            <button className="bg-red-300 px-4 py-2 rounded-md" onClick={handleReadMore}>Read more...</button>
        </article>
    );
};

export default Blog;