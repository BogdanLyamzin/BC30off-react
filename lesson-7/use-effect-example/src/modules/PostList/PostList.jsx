import {Component} from "react";

import { getPosts } from "../../shared/services/posts";

import styles from "./post-list.module.css";

class PostList extends Component {
    state = {
        posts: [],
        loading: false,
        error: null,
        page: 1
    }

    componentDidMount(){
        this.fetchPosts();
    }
    
    componentDidUpdate(prevProps, prevState) {
        const {page} = this.state;
        if(page > prevState.page){
            this.fetchPosts();
        }
    }

    async fetchPosts(){
        this.setState({
            loading: true
        })
        const {page} = this.state;

        try {
            const data = await getPosts(page);
            this.setState(prevState => {
                return {
                    posts: [...prevState.posts, ...data],
                    loading: true,
                    error: null
                }
            })
        } catch (error) {
            this.setState({
                loading: false,
                error: error.message
            })
        }
    }

    render() {
        const elements = posts.map(item => (
            <li className={styles.item} key={item.id} onClick={()=> handleClick(item)}>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
            </li>
        ));
    
        return (
            <ul className={styles.list}>
                {elements}
            </ul>
        )
    }
}

const PostList = ({posts, handleClick})=> {
    
}

export default PostList;