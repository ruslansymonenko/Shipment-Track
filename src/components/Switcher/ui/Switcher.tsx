import React from 'react';
import { addClassNames } from '../../../utils/addClassNames/addClassNames';

import './Switcher.scss';

import themeImage from '../../../assets/icons/theme.svg';

interface I_SwitcherProps {
  action: () => void;
  isChecked?: boolean;
  addClasses?: string[];
}

const Switcher: React.FC<I_SwitcherProps> = ({ action, isChecked, addClasses }) => {
  let additionalClasses = '';

  if (addClasses) {
    additionalClasses = addClasses.join(' ');
  }

  return (
    <label className={addClassNames('toggle', {}, [additionalClasses])}>
      <input
        className="toggle-checkbox"
        type="checkbox"
        onChange={action}
        checked={isChecked}
      />
      <div className="toggle-switch"></div>
      <span className="toggle-label">
        <img
          src={themeImage}
          alt="theme"
        />
      </span>
    </label>
  );
};

export default Switcher;
