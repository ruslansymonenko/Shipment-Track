import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { addClassNames } from '../../../utils/addClassNames/addClassNames';

import './Button.scss';

export enum ButtonTypes {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface I_ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: ButtonTypes;
  btnChildren: string | ReactNode;
  addClasses?: string[];
}

export const Button: FC<I_ButtonProps> = props => {
  const { buttonType = ButtonTypes.DEFAULT, btnChildren, addClasses, ...otherProps } = props;
  let additionalClasses = '';

  if (addClasses) {
    additionalClasses = addClasses.join(' ');
  }

  return (
    <button
      className={addClassNames('button', {}, [buttonType, additionalClasses])}
      {...otherProps}
    >
      <div className="button-content">{btnChildren}</div>
    </button>
  );
};
