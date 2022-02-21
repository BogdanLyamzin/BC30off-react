import {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getPostById } from "../../shared/services/posts";

const SinglePostPage = ()=> {
    const {id} = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState();
    
    useEffect(()=> {
        const fetchPost = async()=> {
            const data = await getPostById(id);
            setPost(data)
        }
        fetchPost();
    }, [id]);

    const goBack = ()=> navigate(-1);

    return (
        <>
            {post && (
                <div>
                    <button onClick={goBack}>Go back</button>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            )}
        </>
    )
}

export default SinglePostPage