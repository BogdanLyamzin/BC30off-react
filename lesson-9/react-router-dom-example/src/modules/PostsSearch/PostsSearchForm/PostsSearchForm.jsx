import { Component, useState, useEffect, createRef } from "react";

const PostsSearchForm = ({onSubmit}) => {
    const [form, setForm] = useState({
        search: ""
    });

    const inputRef = createRef(null);

    useEffect(()=> {
        if(inputRef.current) {
            inputRef.current.focus()
        }
    }, []);

    const handleChange = ({target}) => {
        const {name, value} = target;
        setForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        onSubmit(form);
        setForm({
            search: ""
        })
    }

    return (
        <form onSubmit={handleSubmit} action="">
            <input ref={inputRef} onChange={handleChange} value={form.search} type="text" name="search" placeholder="Поиск" />
            <button type="submit">Поиск</button>
        </form>
    )
}

// class PostsSearchForm extends Component {

//     state = {
//         search: ""
//     }

//     handleChange = ({target}) => {
//         const {name, value} = target;
//         this.setState({
//             [name]: value
//         })
//     }

//     handleSubmit = (e)=> {
//         e.preventDefault();
//         this.props.onSubmit(this.state);
//         this.reset()
//     }

//     reset() {
//         this.setState({
//             search: ""
//         })
//     }

//     render(){
//         const {handleChange, handleSubmit} = this;
//         const {search} = this.state;

//         return (
//             <form onSubmit={handleSubmit} action="">
//                 <input onChange={handleChange} value={search} type="text" name="search" placeholder="Поиск" />
//                 <button type="submit">Поиск</button>
//             </form>
//         )
//     }
// }

export default PostsSearchForm;