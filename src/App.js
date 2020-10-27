import React from 'react';
import Questions from './Data/Apprentice_TandemFor400_Data'
import AllAskedQuestions from './Components/AllAskedQuestions'

class App extends React.Component {
  state = {
    questions: [],
    num: 0
  }
 
  componentDidMount(){
    this.setState({questions: Questions})
  }

  newQuestion = () => {
    this.setState({ num: this.state.num + 1 })
  }

 render (){
  const arrayQ = this.state.questions.slice(0, this.state.num)
  return (
    <div>
      <button onClick={this.newQuestion}>Ask Me a Quesion</button>
      <AllAskedQuestions arrayQ={arrayQ}/>
    </div>
    )
  }
}

export default App 