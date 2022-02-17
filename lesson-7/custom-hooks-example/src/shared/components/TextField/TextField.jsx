import styles from "./text-field.module.css";

const TextField = ({label, ...props}) => {
    return (
        <div className={styles.group}>
            {label && <label htmlFor="" className={styles.label}>{label}</label>}
            <input {...props} />
        </div>
    )
}

export default TextField;

TextField.defaultProps = {
    type: "text",
    value: "",
    placeholder: ""
}