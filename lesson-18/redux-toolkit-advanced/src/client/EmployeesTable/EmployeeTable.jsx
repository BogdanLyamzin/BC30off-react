import styles from "./employees-table.module.css";

const EmployeesTable = ({ items, deleteCallback }) => {
    const elements = items.map(item => (
        <tr key={item.id}>
            <td className={styles.cell}>{item.name}</td>
            <td className={styles.cell}>{item.lastName}</td>
            <td className={styles.cell}>{item.position}</td>
            {deleteCallback && <td className={styles.cell}>
                <button onClick={()=> deleteCallback(item.id)}>Delete</button>
            </td>}
        </tr>
    ));

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th className={styles.thead}>Name</th>
                    <th className={styles.thead}>Last name</th>
                    <th className={styles.thead}>Position</th>
                    {deleteCallback && <th className={styles.thead}>Actions</th>}
                </tr>
            </thead>
            <tbody>
                {elements}
            </tbody>
        </table>
    )
};

export default EmployeesTable;