const LeavFeedback = ({handleClick})=> {
    return (
        <div>
            <button onClick={()=> handleClick("die")}>Казнить</button>
            <button onClick={()=> handleClick("life")}>Помиловать</button>
            <button onClick={()=> handleClick("hell")}>Заставить учить JavaScript</button>
        </div>
    )
}

export default LeavFeedback;