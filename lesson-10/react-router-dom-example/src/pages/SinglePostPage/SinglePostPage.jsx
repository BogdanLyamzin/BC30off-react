import {useState, useEffect} from "react";
import { useParams, useNavigate, Link, Outlet, useLocation } from "react-router-dom";

import { getPostById } from "../../shared/services/posts";

const SinglePostPage = ()=> {
    const {id} = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState();
    const location = useLocation()
    const from = location.state?.from || "/";
    console.log(from)
    useEffect(()=> {
        const fetchPost = async()=> {
            const data = await getPostById(id);
            setPost(data)
        }
        fetchPost();
    }, [id]);

    const goBack = ()=> navigate(from);

    return (
        <>
            {post && (
                <>
                    <div>
                        <button onClick={goBack}>Go back</button>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <Link to="comments" state={{from}}>Comments</Link>
                    </div>
                    <Outlet />
                </>
            )}
        </>
    )
}

export default SinglePostPage