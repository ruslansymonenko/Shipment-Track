import { FC, ReactNode } from 'react';
import { addClassNames } from '../../../utils/addClassNames/addClassNames';

import './Button.scss';

export enum ButtonTypes {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface I_ButtonProps {
  buttonType: ButtonTypes;
  btnChildren: string | ReactNode;
  addClasses?: string[];
}

export const Button: FC<I_ButtonProps> = ({
  buttonType = ButtonTypes.DEFAULT,
  btnChildren,
  addClasses,
}) => {
  let additionalClasses = '';

  if (addClasses) {
    additionalClasses = addClasses.join(' ');
  }

  return (
    <div className={addClassNames('button', {}, [buttonType, additionalClasses])}>
      <div className="button-content">{btnChildren}</div>
    </div>
  );
};
