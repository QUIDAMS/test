import React from 'react';

function Radio(props) {
  const {answer} = this.props;
  return(
    <React.Fragment>
      <input
        type='radio'
        name='answer'
        value={answer}
        // onChange={}
        // checked={}
        />
    </React.Fragment>
  )
}
export default Radio;


// onChange={e => onAnswerChange(e, selectedAnswer, index)}
// checked={typeof(correctAnswer) === 'string' ? selectedAnswer === answer  : selectedAnswer.includes(answer)}
