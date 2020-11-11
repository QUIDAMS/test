import React, {Component} from 'react';
import TestItem from '../test-item';
import _ from 'underscore';
import './tests.css';
import questions from '../questions';
import Timer from '../timer';



export default class Tests extends Component {
  constructor(){
    super();
    this.state = {
      questions: questions,
      questionNumber: 0,
      showAll: false,
      start: false,
    }
    this.onChangeQuestionForward = this.onChangeQuestionForward.bind(this);
    this.onChangeQuestionBack = this.onChangeQuestionBack.bind(this);
    // this.onAnswerChange = this.onAnswerChange.bind(this);
    this.showAllQuestions = this.showAllQuestions.bind(this);
    this.onChangeShowAll = this.onChangeShowAll.bind(this);
    this.onChangeValueCheckbox = this.onChangeValueCheckbox.bind(this);
    this.onChangeStateStart = this.onChangeStateStart.bind(this);
    this.QuestionList = this.QuestionList.bind(this);
    this.onCorrectChange = this.onCorrectChange.bind(this);

  }


  onChangeQuestionForward(){
    if(this.state.questionNumber < this.state.questions.length-1){
      this.setState({questionNumber: +this.state.questionNumber+1});
    }
  }

  onChangeQuestionBack(){
    if(this.state.questionNumber > 0){
      this.setState({questionNumber: +this.state.questionNumber-1});
    }
  }

  showAllQuestions(){
    const allQuestions = this.state.questions.map(({text, selectedAnswer, correctAnswer}, i) => {
      return(
        <React.Fragment key={i}>
          <p >{text}</p>
          <p>Ваш ответ: {selectedAnswer}
            {_.isEqual(_.sortBy(selectedAnswer), _.sortBy(correctAnswer)) ?
            <p className="green" >Верно!</p> :
            <p className="red">{`Не верно :( правильный ответ: ${correctAnswer}`}</p>
            }
          </p>
        </React.Fragment>
      )
    })
    return (
      <div>
        {allQuestions}
      </div>
    )
  }
  onChangeShowAll(){
    this.setState({showAll: true});
  }

  onCorrectChange(currentValue){
    this.setState({correct: currentValue});
  }

  onChangeValueCheckbox(e, correct){
    const item = e.target.name;
    const isChecked = e.target.checked;
    let questionsCopy = [...this.state.questions];
    questionsCopy[this.state.questionNumber].checkedItems.set(item, isChecked);
    questionsCopy[this.state.questionNumber].correct = correct;
    console.log(correct);
    this.setState({questions: questionsCopy});
  }

  onChangeStateStart(){
    this.setState({start: true});
  }
  QuestionList(){
    if(this.state.showAll){
      return(
        this.showAllQuestions()
      )
    } else {
      const {text, answers, checkedItems, correct} = this.state.questions[this.state.questionNumber];
      return(
        <div>
          <TestItem
            text={text}
            answers={answers}
            checkedItems={checkedItems}
            index={this.state.questionNumber}
            onChange={this.onChangeValueCheckbox}
            onCorrectChange={this.onCorrectChange}
            correct={correct}
          />
          {this.state.questionNumber === this.state.questions.length-1 ?
          <button onClick={this.onChangeShowAll}>Проверить ответы</button> :
          <div>
            <a href='#' onClick={this.onChangeQuestionBack}>Назад</a>
            <a href='#' onClick={this.onChangeQuestionForward}>Вперед</a>
          </div>}
        </div>
      )
    }
  }

  render(){
    return(
      <div>
        {this.state.start && this.QuestionList()}
        <hr/>
        <Timer
          status={this.state.start}
          onResultChange={this.onChangeStateStart}
          onChangeShowAll={this.onChangeShowAll}
        />
      </div>
    )
  }
}

// onAnswerChange(event, selectedAnswer, index) {
//   let newArrQuestions = [...this.state.questions];
//   if(typeof(newArrQuestions[index].selectedAnswer) === "string") {
//     newArrQuestions[index].selectedAnswer = event.target.value;
//   } else {
//     if(event.target.checked) {
//       newArrQuestions[index].selectedAnswer = [...newArrQuestions[index].selectedAnswer, event.target.value];
//     } else {
//       newArrQuestions[index].selectedAnswer.splice(index,1);
//     }
//   }
//   this.setState({
//     questions: newArrQuestions
//   })
// }
