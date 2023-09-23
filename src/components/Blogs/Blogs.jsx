import { useLoaderData } from "react-router-dom";
import Blog from "./Blog";

const Blogs = () => {
    const posts = useLoaderData();
    return (
        <section>
            <h2>Total Blog Posts: {posts.length}</h2>
            <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"20px"}}>
                {
                    posts.map(post => <Blog key={post.id} post={post}></Blog>)
                }
            </div>
        </section>
    );
};

export default Blogs;