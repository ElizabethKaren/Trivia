import React from 'react'
import Question from './Quesion'

const AllAskedQuestions = props => {
    return (
        <div>
            {props.arrayQ.map(question => <Question {...question} />)} 
        </div>
    )
}

export default AllAskedQuestions