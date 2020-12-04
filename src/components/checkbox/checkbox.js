import React from 'react';

const Checkbox = ({answer, checked = false, onChangeTestValue, correct, index}) => {
  return(
    <React.Fragment>
    <input
      type='checkbox'
      name={answer.name}
      value={answer.label}
      onChange={(e) => onChangeTestValue(e, answer.name, false)}
      checked={checked}
    />
    </React.Fragment>
  )
}
export default Checkbox;
