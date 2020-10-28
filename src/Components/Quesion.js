import React from 'react'

const Question = props => {

    const correctAnswer = e => {
        if (e.target.name == props.correct){
            e.target.style.backgroundColor = 'Lime'
            props.addToScore(e)
        } else {
            e.target.style.backgroundColor = 'Red'
        }
        props.answer(e.target.name, props,index)
    }

    const alreadyAnswered = () => alert('QUESTION ALREADY ANSWERED')
    
    if (!props.incorrect) return <div>Loading...</div>
       const possibleAnswers = [...props.incorrect, props.correct]
       possibleAnswers.sort()
    if (props.answered) return (
        <div>
            <p id='back' onClick={()=>this.props.removeQuestion(props.index)}>→</p>
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