import React from 'react'
import Question from './Quesion'

const AllAskedQuestions = props => {
    return (
        <div className='contianer'>
           <Question nextQuestion={props.nextQuestion} goBack={props.goBack} questionNum={props.questionNum} className='question' answer={props.answer} removeQuestion={props.removeQuestion} addToScore={props.addToScore} {...props.arrayQ} />
        </div>
    )
}

export default AllAskedQuestions