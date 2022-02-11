const FeedbackResult = ({result = {}})=> {
    return (
        <div>
            <p>Казнили: {result.die}</p>
            <p>Помиловали: {result.life}</p>
            <p>Учат JS: {result.hell}</p>
        </div>
    )
}

export default FeedbackResult;