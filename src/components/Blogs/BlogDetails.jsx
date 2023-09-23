import { useLoaderData, useNavigate } from "react-router-dom";

const BlogDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();

    const handlerGoBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <h2 className="font-bold text-2xl">{post.id} : {post.title}</h2>
            <p>{post.body}</p>
            <button className="text-red-700" onClick={handlerGoBack}>Back to blog page</button>
        </div>
    );
};

export default BlogDetails;