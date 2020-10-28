import React from 'react'

const Question = props => {

    const correctAnswer = e => {
        if (e.target.name == props.correct){
            e.target.style.backgroundColor = 'Lime'
            props.addToScore(e)
        } else {
            e.target.style.backgroundColor = 'Red'
        }
        props.answer(e.target.name)
    }

    const alreadyAnswered = () => alert('QUESTION ALREADY ANSWERED')

    //{answerGiven === answer ? style.backgroundColor = 'Lime' : style.backgroundColor = 'Red'}
    
    if (!props.incorrect) return <div>Loading...</div>
       const possibleAnswers = [...props.incorrect, props.correct]
       const answerGiven = props.answerGiven
       console.log(answerGiven)
       possibleAnswers.sort()
    if (props.answered && props.answerGiven === props.correct) return (
        <div id='green'>
            <p id='back' onClick={()=>props.removeQuestion(props.index)}>X</p>
            <p id='question'>{props.question}</p>
            {possibleAnswers.map((answer, index) => <div><button onClick={alreadyAnswered} name={answer} key={index}>{answer}</button><br></br></div> )}
        </div>
    )
    if (props.answered && props.answerGiven != props.correct) return (
        <div id='red'>
            <p id='back' onClick={()=>props.removeQuestion(props.index)}>X</p>
            <p id='question'>{props.question}</p>
            {possibleAnswers.map((answer, index) => <div><button onClick={alreadyAnswered} name={answer} key={index}>{answer}</button><br></br></div> )}
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