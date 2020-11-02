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
    input: '',
    images: ['https://cdn.cnn.com/cnnnext/dam/assets/200815163257-clueless-movie-file-restricted-super-tease.jpg', 'https://images.thestar.com/aEYEyMY0S72QwKC0zklHPv1N26I=/1200x794/smart/filters:cb(1588016999082)/https://www.thestar.com/content/dam/thestar/entertainment/movies/opinion/2020/04/27/clueless-is-25-as-if-why-this-sparkling-rom-com-is-a-ray-of-sunshine-in-these-troubled-times/clueless.jpg', 'https://m.media-amazon.com/images/M/MV5BNjUxMDM5MTAtZTMzMy00NGRiLWE1ZmUtZjMwMzA1MGM4Y2RmXkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_UX477_CR0,0,477,268_AL_.jpg','https://media.vanityfair.com/photos/5da8d531466db3000999523d/16:9/w_2624,h_1476,c_limit/MSDCLUE_EC035.jpg', "https://i.guim.co.uk/img/media/42fe49fa2389bb71f2a7c024bea0473831b17683/0_137_3006_1803/master/3006.jpg?width=700&quality=85&auto=format&fit=max&s=c770839bc9c6ba99cde59dac0b97cddd", 'https://imgix.bustle.com/rehost/2016/9/13/532717b6-2e35-42ab-ac19-441d03318f15.jpg']
  }

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    for (let i = 0; i < array.length-1; i++){
      let pic = this.state.images[Math.floor(Math.random() * this.state.images.length)]
      let temp = {...array[i], answered: false, answerGiven: '', image: pic }
      array[i] = temp 
    }
    return array
}

 playAgain = () => this.setState({ showScore: false, startingNum: 11, num: 11 })

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
    if (num === 100){
      return <div><h2>Boom! You got every question correct!</h2><img src='https://i.gifer.com/Ag6K.gif' alt='bow' /></div>
    } else if (num > 50){
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

  showScore = () => this.setState({ showScore: true })

  goBack = () => this.setState({ num: parseInt(this.state.num) - 1 })

 render (){
  const arrayQ = this.state.arrayQ[parseInt(this.state.num)-1]
  console.log(this.state.questions)
  if (this.state.userName === '')return (
    <div className='App'>
      <br></br>
      <img src="https://i.pinimg.com/originals/70/34/b5/7034b5150bba8e822468e95763b930b5.gif" alt='nerd'/>
      <UserName updateUser={this.updateUser} handleOnChange={this.handleOnChange}/> 
    </div>
  )
  
  if (this.state.arrayQ.length === this.state.questions.length) return (
    <div className='App'>
      <br></br>
      <img src="https://media2.giphy.com/media/26xBPncFx3h3MQd8s/giphy.gif" alt='nerd'/>
      <h3>Great Job {this.state.userName}!</h3>
      {this.gameOver(this.state.score)}
      <p id='newQ'>{this.state.num === 21 ? null : <button onClick={this.playAgain}>One More Round</button>}</p>
    </div>
  )
  return (
    <div className='App'>
      <br></br>
      {this.state.num < 1 ? <img src="https://img.cinemablend.com/quill/5/0/8/9/b/e/5089beb274389c4c438408ed7bdcc5d62e40d8fb.jpg" alt='nerd' width="400" height="250"/> : null}
      <h3>Good Luck {this.state.userName}!</h3>
      <h3>Currect Score: {this.state.score} </h3>
      <p id='newQ'>{this.state.num === 0 ? <button onClick={this.newQuestion}>Start Game</button> : null }</p>
      {this.state.arrayQ.length === 0 ? null : <AllAskedQuestions nextQuestion={this.newQuestion} goBack={this.goBack} questionNum={this.state.num} answer={this.answer} removeQuestion={this.removeQuestion} addToScore={this.addToScore} arrayQ={arrayQ}/>}
      <br></br>
    </div>
    )
  }
}

export default App 