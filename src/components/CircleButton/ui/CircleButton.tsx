import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { addClassNames } from '../../../utils/addClassNames/addClassNames';

import './CircleButton.scss';
import { ButtonTypes } from '../../Button';

export enum CircleButtonTypes {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface I_CircleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: CircleButtonTypes;
  btnChildren: string | ReactNode;
  addClasses?: string[];
}

const CircleButton: React.FC<I_CircleButtonProps> = props => {
  const { buttonType = ButtonTypes.DEFAULT, btnChildren, addClasses, ...otherProps } = props;
  let additionalClasses = '';

  if (addClasses) {
    additionalClasses = addClasses.join(' ');
  }

  return (
    <button
      className={addClassNames('circle-btn', {}, [buttonType, additionalClasses])}
      {...otherProps}
    >
      <div className="circle-btn__content">{btnChildren}</div>
    </button>
  );
};

export default CircleButton;
