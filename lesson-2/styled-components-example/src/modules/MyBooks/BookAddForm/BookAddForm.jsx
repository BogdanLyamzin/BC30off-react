import styled from "@emotion/styled";

// import "./book-add-form.css";

const FormContainer = styled.div`
    flex: 0 0 40%;
    border: 1px solid #dcdfe6;
    border-radius: 5px;
    padding: 20px;

    .form-group {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
    }

    .form-group-label {
        flex: 0 0 150px;
        text-align: left;
        color: #606266;
    }
    
    .form-group-input {
        border: 1px solid #c0c4cc;
        padding: 11px;
        color: #606266;
        border-radius: 3px;
    }
`

const Button = styled.button`
    background-color: ${props => props.type === "primary" ? "blue": "red"};
    cursor: pointer;
    padding: 10px 15px;
    color: #fff;
    border: none;
    border-radius: 5px;

    :hover {
        background-color: #fff;
        color: blue;
    }
`

const BookAddForm = ()=> {
    return (
        <FormContainer>
            <div className="form-group">
                <label htmlFor="" className="form-group-label">Название книги</label>
                <input type="text" className="form-group-input" placeholder="Название книги" />
            </div>
            <div className="form-group">
                <label htmlFor="" className="form-group-label">Любимая</label>
                <input type="checkbox" className="form-group-input" />
            </div>
            <div className="form-group">
                <label htmlFor="" className="form-group-label"></label>
                <Button type="primary">Добавить</Button>
                <Button type="danger">Удалить</Button>
            </div>
        </FormContainer>
    )
}

export default BookAddForm;