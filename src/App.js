import React from 'react';
import Questions from './Data/Apprentice_TandemFor400_Data'
import AllAskedQuestions from './Components/AllAskedQuestions'
import UserName from './Components/UserName'
import './App.css'

class App extends React.Component {
  state = {
    questions: [],
    num: 0,
    startingNum: 0,
    score: 0,
    showScore: false,
    arrayQ: [],
    userName: '',
    input: ''
  }

  newGame = () => this.setState({ score: 0, startingNum: parseInt(this.state.startingNum) + 10, num: 0 })


  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    for (let i = 0; i > array.length-1; i++){
      let temp = {...array[i], answered: false, answerGiven: ''}
      array[i] = temp 
    }
    return array
}

 answer = (words) => {
  const replacementQArray = this.state.arrayQ.slice()
  const answeredQuestion = replacementQArray.find(quest => quest.incorrect.includes(words) || quest.correct === words )
  const index = replacementQArray.indexOf(answeredQuestion)
  const replacementQuestionArray = this.state.questions
  const theQuestion = replacementQuestionArray.find(each => each.question == answeredQuestion.question)
  let indexQuestionArray = replacementQuestionArray.indexOf(theQuestion)
  answeredQuestion.answered = true 
  answeredQuestion.answerGiven = words
  theQuestion.answered = true 
  theQuestion.answerGiven = words 
  replacementQArray[index] = answeredQuestion
  replacementQuestionArray[indexQuestionArray] = theQuestion
  this.setState({ questions: replacementQuestionArray, arrayQ: replacementQArray})
 }
 
  componentDidMount(){
    const questions = this.shuffleArray(Questions)
    const arrayQ = questions.slice(parseInt(this.state.startingNum), parseInt(this.state.num))
    this.setState({questions: questions, arrayQ: arrayQ})
  }


  addToScore = () => this.setState({ score: parseInt(this.state.score) + 5 })

  newQuestion = () => this.setState({ num: this.state.num + 1, arrayQ: this.state.questions.slice(parseInt(this.state.startingNum), parseInt(this.state.num)+1) })

  gameOver = (num) => {
    if (num == 50){
      return <div><h2>GREAT JOB! YOU GOT EVERY QUESTION CORRECT!</h2></div>
    } else if (num > 20){
      return <div><h2>GREAT JOB! YOU WON {num} POINTS THIS GAME</h2></div>
    } else {
      return <div><h2>YOUR SCORE IS {num}! YOULL GET THEM NEXT TIME!</h2></div>
    }
  }

  handleOnChange = e => this.setState({ input: e.target.value })

  updateUser = () => this.setState({ userName: this.state.input, input: ''})

  showScore = () => this.setState({ showScore: true })

  removeQuestion = (question) => this.setState({ questions: this.state.questions.filter(quest => quest.question != question), arrayQ: this.state.arrayQ.filter(quest => quest.question != question), num: parseInt(this.state.num)-1 })

 render (){
  const arrayQ = this.state.questions.slice(parseInt(this.state.startingNum), parseInt(this.state.num)).reverse()
  if (this.state.userName === '')return (
    <div className='App'>
      <UserName updateUser={this.updateUser} handleOnChange={this.handleOnChange}/> 
    </div>
  )
  
  if (this.state.showScore) return (
    <div className='winner'>
      <h2>{this.state.userName}</h2>
      {this.gameOver(this.state.score)}
    </div>
  )
  return (
    <div className='App'>
      <br></br>
      <h2>{this.state.userName}</h2>
      <h2>Currect Trivia Score: {this.state.score} </h2>
      {this.state.num == 10 ? <button onClick={this.showScore}>How'd I do?</button> : <button onClick={this.newQuestion}>New Questions</button>}
      <br></br>
      {this.state.arrayQ.length === 0 ? null : <AllAskedQuestions answer={this.answer} removeQuestion={this.removeQuestion} addToScore={this.addToScore} arrayQ={arrayQ}/>}
      <br></br>
    </div>
    )
  }
}

export default App 