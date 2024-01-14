import React from 'react';
import { addClassNames } from '../../../utils/addClassNames/addClassNames';

import './Input.scss';

interface I_InputProps {
  addClasses?: string[];
}

const Input: React.FC<I_InputProps> = ({ addClasses }) => {
  let additionalClasses = '';

  if (addClasses) {
    additionalClasses = addClasses.join(' ');
  }

  return (
    <input
      className={addClassNames('input', {}, [additionalClasses])}
      type="text"
    ></input>
  );
};

export default Input;
