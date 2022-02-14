import { Component } from "react";

class FaqItem extends Component {

    state = {
        visibility: false
    }

    onClick = () => {
        this.setState(prevState => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        const {visibility} = this.state;
        const {question, answer} = this.props;

        return (
            <div>
                <p onClick={this.onClick}>{question}</p>
                {visibility && <p>{answer}</p>}
            </div>
        )
    }
}

export default FaqItem;