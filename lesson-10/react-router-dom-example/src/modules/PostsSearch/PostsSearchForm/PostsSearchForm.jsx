import { useState, useEffect, createRef, memo } from "react";

const PostsSearchForm = ({onSubmit}) => {
    console.log("Render")
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

export default memo(PostsSearchForm);