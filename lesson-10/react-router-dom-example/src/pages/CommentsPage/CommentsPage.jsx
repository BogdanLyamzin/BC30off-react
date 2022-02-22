import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import { getPostComments } from "../../shared/services/posts";

const CommentsPage = ()=> {
    const [comments, setComments] = useState([]);
    const {id} = useParams();

    useEffect(()=> {
        const fetchComments = async()=> {
            const data = await getPostComments(id);
            setComments(data)
        }
        fetchComments()
    }, []);

    const elements = comments.map(item => <li key={item.id}>
        <p>Name: {item.name}</p>
        <p>Email: {item.email}</p>
        <p>{item.body}</p>
    </li>)

    return (
        <ol>
            {elements}
        </ol>
    )
}

export default CommentsPage