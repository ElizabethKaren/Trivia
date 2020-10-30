import React from 'react';
import Questions from './Data/Apprentice_TandemFor400_Data'
import AllAskedQuestions from './Components/AllAskedQuestions'
import UserName from './Components/UserName'
import Nerd from './Images/nerd.png'
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

 playAgain = () => this.setState({ showScore: false, score: 0, startingNum: 11, num: 11 })

 answer = (words) => {
  const replacementQArray = this.state.arrayQ.slice()
  const answeredQuestion = replacementQArray.find(quest => quest.incorrect.includes(words) || quest.correct === words )
  const index = replacementQArray.indexOf(answeredQuestion)
  const replacementQuestionArray = this.state.questions.slice()
  const theQuestion = replacementQuestionArray.find(each => each.question === answeredQuestion.question)
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
    if (num === 50){
      return <div><h2>Boom! You got every question correct!</h2></div>
    } else if (num > 20){
      return <div><h2>Awesome! You won {num} points this game!</h2></div>
    } else {
      return <div><h2>Your score is {num}!</h2></div>
    }
  }

  handleOnChange = e => this.setState({ input: e.target.value })

  updateUser = () => {
    if (this.state.input === ''){
       alert("Please Enter Your Name")
    } else {
      this.setState({ userName: this.state.input, input: ''})
    }
  }

  bonusQ = () => console.log(this.state.questions[this.state.questions.length-1])

  showScore = () => this.setState({ showScore: true })

  removeQuestion = (question) => this.setState({ questions: this.state.questions.filter(quest => quest.question !== question), arrayQ: this.state.arrayQ.filter(quest => quest.question !== question), num: parseInt(this.state.num)-1 })

 render (){
  const arrayQ = this.state.questions.slice(parseInt(this.state.startingNum), parseInt(this.state.num)).reverse()
  if (this.state.userName === '')return (
    <div className='App'>
      <br></br>
      <img src={Nerd} alt='nerd' width="150" height="150"/>
      <UserName updateUser={this.updateUser} handleOnChange={this.handleOnChange}/> 
    </div>
  )
  
  if (this.state.showScore) return (
    <div className='App'>
      <br></br>
      <img src={Nerd} alt='nerd' width="150" height="150"/>
      <h3>Great Job {this.state.userName}!</h3>
      {this.gameOver(this.state.score)}
      <p id='newQ'>{this.state.num === 21 ? null : <button onClick={this.playAgain}>Play Again</button>}</p>
    </div>
  )
  return (
    <div className='App'>
      <br></br>
      <img src={Nerd} alt='nerd' width="150" height="150"/>
      <h3>Good Luck {this.state.userName}!</h3>
      <h3>Currect Trivia Score: {this.state.score} </h3>
      <p id='newQ'>{this.state.num === 10 || this.state.num === 21 ? <button onClick={this.showScore}>How'd I do?</button> : <button onClick={this.newQuestion}>New Question</button>}</p>
      <br></br>
      {this.state.arrayQ.length === 0 ? null : <AllAskedQuestions answer={this.answer} removeQuestion={this.removeQuestion} addToScore={this.addToScore} arrayQ={arrayQ}/>}
      <br></br>
    </div>
    )
  }
}

export default App 