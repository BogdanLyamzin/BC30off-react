import { useForm } from "../../../shared/hooks/useForm";

const initialState = {
    search: ""
}

const PostsSearchForm = ({onSubmit}) => {
    const [form, handleChange, handleSubmit] = useForm(initialState, onSubmit)

    return (
        <form onSubmit={handleSubmit} action="">
            <input onChange={handleChange} value={form.search} type="text" name="search" placeholder="Поиск" />
            <button type="submit">Поиск</button>
        </form>
    )
}

export default PostsSearchForm;