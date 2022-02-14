import { Component } from "react";
import axios from "axios";

import styles from "./post-list.module.css"

// fetch("https://jsonplaceholder.typicode.com/posts?_page=2&_limit=20")
//     .then(response => {
//         if(!response.ok) {
//             throw new Error()
//         }
//         return response.json()
//     })
//     .then(result => {
//         console.log(result)
//     })
//     .catch(error => console.log(error.message))

// axios.get("https://jsonplaceholder.typicode.com/posts?_page=2&_limit=20")
//     .then(({data}) => console.log(data))
//     .catch(error => console.log(error.message))

class PostList extends Component {
    state = {
        items: [],
        loading: false,
        error: null
    }

    componentDidMount(){
        this.setState({
            loading: true
        })
        axios.get("https://jsonplaceholder.typicode.com/post")
            .then(({data}) => this.setState({items: data, loading: false}))
            .catch(error => this.setState({loading: false, error: error.message}))
    }

    render(){
        const {items, loading, error} = this.state;
        const elements = items.map(item => <li key={item.id}>{item.title}</li>);
        // if(error){
        //     return <p>{error.message}</p>
        // }
        return (
            <>
            {loading && <p>...Loading</p>}
            {error && <p>{error}</p>}
            <ul>
                {elements}
            </ul>
            </>
        )
        
    }
}

export default PostList