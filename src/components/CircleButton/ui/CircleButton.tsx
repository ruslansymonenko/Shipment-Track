import React, { ReactNode } from 'react';
import { addClassNames } from '../../../utils/addClassNames/addClassNames';

import './CircleButton.scss';

export enum CircleButtonTypes {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface I_CircleButtonProps {
  buttonType: CircleButtonTypes;
  btnChildren: string | ReactNode;
  addClasses?: string[];
}

const CircleButton: React.FC<I_CircleButtonProps> = ({ buttonType, btnChildren, addClasses }) => {
  let additionalClasses = '';

  if (addClasses) {
    additionalClasses = addClasses.join(' ');
  }

  return (
    <button className={addClassNames('circle-btn', {}, [buttonType, additionalClasses])}>
      <div className="circle-btn__content">{btnChildren}</div>
    </button>
  );
};

export default CircleButton;
