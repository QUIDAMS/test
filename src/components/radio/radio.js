import React from 'react';

const Radio = ({answer, onChangeTestValue, selectedAnswer, index}) => {
    return(
      <React.Fragment>
        <input
          type='radio'
          name='radio'
          onChange={e => onChangeTestValue(e, answer.name, true)}
          />
      </React.Fragment>
    )
  }


export default Radio;


// onChange={e => onAnswerChange(e, selectedAnswer, index)}
// checked={typeof(correctAnswer) === 'string' ? selectedAnswer === answer  : selectedAnswer.includes(answer)}
