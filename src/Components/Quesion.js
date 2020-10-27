import React from 'react'

const Question = props => {

    const correctAnswer = e => {
        console.log(e.target.name)
        if (e.target.name == props.correct){
            e.target.style.backgroundColor = 'Green' 
            props.addToScore()
        } else {
            e.target.style.backgroundColor = 'Red'
        }
    }

    const shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    
    const possibleAnswers = [...props.incorrect, props.correct]
    shuffleArray(possibleAnswers)
    return (
        <div>
            <h3>{props.question}</h3>
            {possibleAnswers.map((answer, index) => <div><button onClick={correctAnswer} name={answer} key={answer}>{answer}</button><br></br></div> )}
        </div>
    )
}

export default Question