import { Component } from "react";

class PostsSearchForm extends Component {

    state = {
        search: ""
    }

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e)=> {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset()
    }

    reset() {
        this.setState({
            search: ""
        })
    }

    render(){
        const {handleChange, handleSubmit} = this;
        const {search} = this.state;

        return (
            <form onSubmit={handleSubmit} action="">
                <input onChange={handleChange} value={search} type="text" name="search" placeholder="Поиск" />
                <button type="submit">Поиск</button>
            </form>
        )
    }
}

export default PostsSearchForm;