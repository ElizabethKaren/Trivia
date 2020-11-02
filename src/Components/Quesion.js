import React from 'react'
import Answer from './Answer'

const Question = props => {

    const correctAnswer = e => {
        if (e.target.name === props.correct){
            props.addToScore(e)
        } 
        props.answer(e.target.name)
    }

    const alreadyAnswered = () => alert('Cannot Change Answer')
    
    console.log(props)
    
    if (!props.incorrect) return <div><strong>Loading...</strong></div>
       const possibleAnswers = [...props.incorrect, props.correct]
       possibleAnswers.sort()
    
    return (
        <div className='content'>
            <img src={props.image} alt='pic' width="400" height="250"/>
            <span id='oneline'><p onClick={props.goBack}><strong>⬻</strong></p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p onClick={props.nextQuestion}><strong>⤖</strong></p></span>
            <p id='question'>{props.question}</p>
            {possibleAnswers.map((answer, index) => <Answer alreadyAnswered={alreadyAnswered} correct={props.correct} answerGiven={props.answerGiven} answered={props.answered} correctAnswer={correctAnswer} key={index} answer={answer}/> )}
        </div>
    )

}

export default Question