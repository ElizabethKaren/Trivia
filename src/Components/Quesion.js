import React from 'react'

const Question = props => {

    const correctAnswer = e => {
        if (e.target.name == props.correct){
            props.addToScore(e)
        } 
        props.answer(e.target.name)
    }

    const alreadyAnswered = () => alert('QUESTION ALREADY ANSWERED')
    
    if (!props.incorrect) return <div>Loading...</div>
       const possibleAnswers = [...props.incorrect, props.correct]
       possibleAnswers.sort()
    if (props.answered && props.answerGiven === props.correct) return (
        <div>
            <p id='back' onClick={()=>props.removeQuestion(props.index)}>X</p>
            <p id='question'>{props.question}</p>
            {possibleAnswers.map((answer, index) => answer === props.correct ? <div><button id='green' onClick={alreadyAnswered} name={answer} key={index}>{answer}</button><br></br></div> : <div><button onClick={alreadyAnswered} name={answer} key={index}>{answer}</button><br></br></div> )}
        </div>
    )
    if (props.answered && props.answerGiven != props.correct) return (
        <div>
            <p id='back' onClick={()=>props.removeQuestion(props.index)}>X</p>
            <p id='question'>{props.question}</p>
            {possibleAnswers.map((answer, index) => answer === props.answerGiven ? <div><button id='red' onClick={alreadyAnswered} name={answer} key={index}>{answer}</button><br></br></div> : <div><button onClick={alreadyAnswered} name={answer} key={index}>{answer}</button><br></br></div> )}
        </div>
    )

    return (
        <div>
            <p id='back' onClick={()=>props.removeQuestion(props.index)}>X</p>
            <p id='question'>{props.question}</p>
            {possibleAnswers.map((answer, index) => <div><button onClick={correctAnswer} name={answer} key={index}>{answer}</button><br></br></div> )}
        </div>
    )

}

export default Question