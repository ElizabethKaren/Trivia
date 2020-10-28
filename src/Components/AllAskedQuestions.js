import React from 'react'
import Question from './Quesion'

const AllAskedQuestions = props => {
    return (
        <div className='contianer'>
            {props.arrayQ.map((question, index) => <Question className='question' index={index} removeQuestion={props.removeQuestion} addToScore={props.addToScore} key={index} {...question} />)} 
        </div>
    )
}

export default AllAskedQuestions