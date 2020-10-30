import React from 'react'

const Answer = props => {
    if (!props.answered) return (
        <div>
            <button onClick={props.correctAnswer} name={props.answer}>{props.answer}</button>
        </div>
    )
    if (props.answer === props.correct && props.answer !== props.answerGiven) return (
        <div>
            <button onClick={props.alreadyAnswered} id='yellow'>{props.answer}</button>
        </div>
    )
    if (props.answerGiven === props.answer && props.answer !== props.correct) return (
        <div>
            <button onClick={props.alreadyAnswered} id='red'>{props.answer}</button>
        </div>
    )
    if (props.answer === props.correct) return (
        <div>
            <button onClick={props.alreadyAnswered} id='green'>{props.answer}</button>
        </div>
    )
    return (
        <div>
            <button onClick={props.alreadyAnswered}>{props.answer}</button>
        </div>
    )
}

export default Answer