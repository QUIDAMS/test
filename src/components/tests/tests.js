import React, {Component} from 'react';
import TestItem from '../test-item';
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
    this.showAllQuestions = this.showAllQuestions.bind(this);
    this.onChangeShowAll = this.onChangeShowAll.bind(this);
    this.onChangeTestValue = this.onChangeTestValue.bind(this);
    this.onChangeStateStart = this.onChangeStateStart.bind(this);
    this.QuestionList = this.QuestionList.bind(this);
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
    // const a = this.state.questions[this.state.questionNumber].correctAnswer;
    const allQuestions = this.state.questions.map(({text, correct, answers, checkedItems}, i) => {
      return(
        <React.Fragment key={i}>
          <p >{text}</p>
          <p>Ваш ответ:
            {answers.map((answer, i) => {
              return(
                <React.Fragment key={i}>
                  {checkedItems.get(answer.name)
                    && <p>{answer.label}</p>
                  }
                </React.Fragment>
              );
              }
            )}
            {correct ?
              <p className="green" >Верно!</p> :
              <p className="red">
                {
                  `Не верно :( правильный ответ:
                  ${answers.filter(item => item.correct).map(item => item.label)}`
                }
              </p>
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

  onChangeStateStart(){
    this.setState({start: true});
  }

  onChangeTestValue(e, item, clearMap) {
    let correct;
    const {checkedItems} = this.state.questions[this.state.questionNumber];

    const isChecked = e.target.checked;
    let questionsCopy = [...this.state.questions];
    if (clearMap) { checkedItems.clear(); }
    checkedItems.set(item, isChecked);
    // проверяем, что все ответы правильные, проходя по ним циклом
    // answer каждую итерецию будет присвоено новое значение объекта questionsCopy[this.state.questionNumber].answers (сделать строку из массива)
    for (let answer of questionsCopy[this.state.questionNumber].answers) {
      // если в checkedItems есть ключ, который содержится в answer.name, тогда
      // currentObjectValue станет его значением, а если ключа нет, то
      // переменная становится false
      let currentObjectValue = checkedItems.has(answer.name) ? checkedItems.get(answer.name) : false;
      // Сравниваем выбранное значение с реальным ответом
      if (currentObjectValue === answer.correct) {
        // если условие выполняется, переменная становится true
        correct = true;
      } else {
        // при первом же не выполненном условии мы устанавливам correct в false
        // и завершаем цикл, тем самым если у нас есть хотябы одно условие
        // с false, то значение correct всегда будет false
        correct = false;
        break;
      }
    }

    questionsCopy[this.state.questionNumber].correct = correct;
    this.setState({questions: questionsCopy});
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
            onChangeTestValue={this.onChangeTestValue}
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
