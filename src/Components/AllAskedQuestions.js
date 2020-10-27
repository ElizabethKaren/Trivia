import React from 'react'
import Question from './Quesion'

const AllAskedQuestions = props => {
    const array = props.arrayQ.reverse()
    return (
        <div>
            {array.map((question, index) => <Question addToScore={props.addToScore} key={index} {...question} />)} 
        </div>
    )
}

export default AllAskedQuestions