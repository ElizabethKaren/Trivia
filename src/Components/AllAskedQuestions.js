import React from 'react'
import Question from './Quesion'

const AllAskedQuestions = props => {
    return (
        <div>
            {props.arrayQ.map((question, index) => <Question className='question' addToScore={props.addToScore} key={index} {...question} />)} 
        </div>
    )
}

export default AllAskedQuestions