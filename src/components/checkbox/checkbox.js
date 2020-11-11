import React from 'react';

const Checkbox = ({answer, checked = false, onChange, name, correct}) => {
  return(
    <React.Fragment>
    <input
      type='checkbox'
      name={name}
      value={answer}
      onChange={(e) => onChange(e, correct)}
      checked={checked}
    />
    </React.Fragment>
  )
}
export default Checkbox;
