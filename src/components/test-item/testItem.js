import React from 'react';
import './testItem.css';
import Radio from '../radio';
import Checkbox from '../checkbox';

// {'first-checkbox': true, 'second-checkbox' false}
function TestItem(props) {
  const {text, answers, index, onChangeTestValue, checkedItems, selectedAnswer} = props;
  let correctAnswers = answers.filter((item) => {
   if (item.correct) {
     return item
   }
  });
  console.log(correctAnswers);

  const allAnswers = answers.map((answer, i) => {
    let input;
    let checked = checkedItems.get(answer.name);

   if(Object.keys(correctAnswers).length > 1) {
     input = <Checkbox
       answer={answer}
       name={answer.name}
       onChangeTestValue={onChangeTestValue}
       checked={checked}
       correct={answer.correct}
       index={index}
     />;
   } else  {
     input = <Radio
      answer={answer}
      onChangeTestValue={onChangeTestValue}
      index={index}
      selectedAnswer={selectedAnswer}
      />;
   }
   return(
     <li key={i}>
       {input}
       {answer.label}
     </li>
   )
 })
 return(
   <div>
    <p>Вопрос №{index+1} </p>
    {text}
    <ul>{allAnswers}</ul>
   </div>
 )
}
export default TestItem;
