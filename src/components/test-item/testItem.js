import React from 'react';
import './testItem.css';
import Radio from '../radio';
import Checkbox from '../checkbox';

// {'first-checkbox': true, 'second-checkbox' false}
function TestItem(props) {
 const {text, answers, index, onChange, checkedItems, onCorrectChange} = props;
 let correctAnswers = answers.map((item, i) => {
   if (item.correct) {
     return item
   }
 });

// let correct = this.props.correct;



 const allAnswers = answers.map((answer, i) => {
   let input;

   let checked = checkedItems.get(answer.name);
   let correct = !answer.correct;
   let currentObjectValue = checkedItems.get((answer.name));
    console.log(answer);
    console.log(currentObjectValue);
    console.log(answer.correct);
   if (currentObjectValue != answer.correct) {
     correct = false;
   } else {
     correct = true//  onChange=(e => onCorrectChange(e, i))
   }
   console.log(correct);

   if(correctAnswers.length > 1) {
     input = <Checkbox
       answer={answer.label}
       name={answer.name}
       onChange={onChange}
       checked={checked}
       correct={correct}
     />;
   } else  {
     input = <Radio answer={answer.label}/>;
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
