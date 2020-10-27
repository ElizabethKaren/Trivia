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
 
  componentDidMount(){
    this.setState({questions: Questions})
  }

  addToScore = () => this.setState({ score: parseInt(this.state.score) + 5 })

  newQuestion = () => {
    this.setState({ num: this.state.num + 1 })
  }

 render (){
  const arrayQ = this.state.questions.slice(0, this.state.num).reverse()
  return (
    <div className='App'>
      <h2>Currect Trivia Score: {this.state.score} </h2>
      <button onClick={this.newQuestion}>Ask Me a Quesion</button>
      <AllAskedQuestions addToScore={this.addToScore} arrayQ={arrayQ}/>
    </div>
    )
  }
}

export default App 