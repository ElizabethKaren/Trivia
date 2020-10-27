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

    //  shuffleArray = a => {
    //     for (let i = a.length - 1; i > 0; i--) {
    //         let j = Math.floor(Math.random() * (i + 1));
    //         let x = a[i];
    //         a[i] = a[j];
    //         a[j] = x;
    //     }
    //     return a;
    // }
    
    render(){
       const possibleAnswers = [...this.props.incorrect, this.props.correct]
       possibleAnswers.sort()
    return (
        <div>
            <h3>{this.props.question}</h3>
            {possibleAnswers.map((answer, index) => <div><button onClick={this.correctAnswer} name={answer} key={index}>{answer}</button><br></br></div> )}
        </div>
    )
  }
}

export default Question