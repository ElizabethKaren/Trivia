import React from 'react';
import Questions from './Data/Apprentice_TandemFor400_Data'
import Question from './Components/Quesion';

class App extends React.Component {
  state = {
    questions: {}
  }
 
  componentDidMount(){
    this.setState({questions: Questions})
  }

  generateQuestion = obj => {
    return (
      <div>
      <Question question={obj} />
      </div>
    )
  }

 render (){
    const newQ = this.state.questions[Math.floor(Math.random() * this.state.questions.length)]
    console.log(newQ)
  return (
    <div>
      <button onClick={(newQ) => this.generateQuestion(newQ)}>Ask Me a Quesion</button>
    </div>
    )
  }
}

export default App 