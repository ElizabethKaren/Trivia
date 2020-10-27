import React from 'react'

class Question extends React.Component {

    state = {
        answered: false 
    }

     correctAnswer = e => {
        e.preventDefault()
        if (e.target.name == this.props.correct){
            e.target.style.backgroundColor = 'Green'
            this.props.addToScore(e)
        } else {
            e.target.style.backgroundColor = 'Red'
        }
        this.setState({ answered: true })
    }

    alreadyAnswered = () => alert('QUESTION ALREADY ANSWERED')
    
    render(){
       const possibleAnswers = [...this.props.incorrect, this.props.correct]
       possibleAnswers.sort()
    if (this.state.answered) return  <div><p id='question'>{this.props.question}</p>{possibleAnswers.map((answer, index) => <div><button onClick={this.alreadyAnswered} name={answer} key={index}>{answer}</button><br></br></div> )}</div>
    return (
        <div>
            <p id='question'>{this.props.question}</p>
            {possibleAnswers.map((answer, index) => <div><button onClick={this.correctAnswer} name={answer} key={index}>{answer}</button><br></br></div> )}
        </div>
    )
  }
}

export default Question