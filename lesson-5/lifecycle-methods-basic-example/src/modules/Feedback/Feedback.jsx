import { Component } from "react";

import LeavFeedback from "./LeavFeedback/LeavFeedback";
import FeedbackResult from "./FeedbackResult/FeedbackResult";

class Feedback extends Component {
    state = {
        die: 0,
        life: 0,
        hell: 0
    }

    setFeedback = (property)=> {
        this.setState(prevState => {
            const value = prevState[property];

            return {
                [property]: value + 1    
            }
        })
    }

    render() {
        return (
            <>
            <LeavFeedback handleClick={this.setFeedback} />
            <FeedbackResult result={this.state} />
            </>
        )
    }
}

export default Feedback;