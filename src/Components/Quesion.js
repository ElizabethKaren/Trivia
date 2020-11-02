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
    
    if (!props.incorrect) return <div>Loading...</div>
       const possibleAnswers = [...props.incorrect, props.correct]
       possibleAnswers.sort()
    
    if (props.questionNum === props.index) return (
        <div className='content'>
            <p onClick={props.goBack}>Last Question</p> <p onClick={props.nextQuestion}>Next Question</p>
            <p><strong>Question {props.size - props.index}</strong></p>
            <p id='question'>{props.question}</p>
            {possibleAnswers.map((answer, index) => <Answer alreadyAnswered={alreadyAnswered} correct={props.correct} answerGiven={props.answerGiven} answered={props.answered} correctAnswer={correctAnswer} key={index} answer={answer}/> )}
        </div>
    )

}

export default Question