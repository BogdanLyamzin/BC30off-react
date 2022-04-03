import {useState, useCallback} from "react";

import styles from "./form-add-employees.module.css";

import {initialState} from "./initialState";

const FormAddEmplyees = ({onSubmit})=> {
    const [state, setState] = useState({...initialState});

    const handleChange = useCallback(({target}) => {
        const {name, value} = target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }, [setState]);

    const handleSubmit = (e)=> {
        e.preventDefault();
        onSubmit(state);
        setState({...initialState});
    };

    return (
        <form onSubmit={handleSubmit} className={styles.inline}>
            <div className={styles.group}>
                <label className={styles.label}>Name</label>
                <input name="name" value={state.name} onChange={handleChange} placeholder="Name" />
            </div>
            <div className={styles.group}>
                <label className={styles.label}>Last name</label>
                <input name="lastName" value={state.lastName} onChange={handleChange} placeholder="Last name" />
            </div>
            <div className={styles.group}>
                <label className={styles.label}>Position</label>
                <select name="position" value={state.positon} onChange={handleChange}>
                    <option value="manager">Manager</option>
                    <option value="developer">Developer</option>
                    <option value="QA">QA</option>
                </select>
            </div>
            <div className={styles.group}>
                <button type="submit">Add employee</button> 
            </div>
        </form>
    )
}

export default FormAddEmplyees;