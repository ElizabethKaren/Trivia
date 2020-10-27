import React from 'react';
import questions from './Data/Apprentice_TandemFor400_Data'
import Question from './Components/Question'

class App extends React.Component {
  state = {
    questions: [questions]
  }
  render (){
    console.log(this.state.questions)
  return (
    <div>
      <h1><Question /></h1>
    </div>
    )
  }
}

export default App 