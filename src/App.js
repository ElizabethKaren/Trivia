import React from 'react';
import Questions from './Data/Apprentice_TandemFor400_Data'
import AllAskedQuestions from './Components/AllAskedQuestions'
import './App.css'

class App extends React.Component {
  state = {
    questions: [],
    num: 0,
    score: 0
  }


  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}
 
  componentDidMount(){
    const questions = this.shuffleArray(Questions)
    this.setState({questions: questions})
  }


  addToScore = e => {
    e.preventDefault()
    this.setState({ score: parseInt(this.state.score) + 5 })
  }

  newQuestion = e => {
    e.preventDefault()
    this.setState({ num: this.state.num + 10 })
  }

 render (){
  const arrayQ = this.state.questions.slice(0, this.state.num).reverse()
  return (
    <div className='App'>
      <br></br>
      <h2>Currect Trivia Score: {this.state.score} </h2>
      <button onClick={this.newQuestion}>Ten New Questions</button>
      <AllAskedQuestions newQuestion={this.newQuestion} addToScore={this.addToScore} arrayQ={arrayQ}/>
    </div>
    )
  }
}

export default App 