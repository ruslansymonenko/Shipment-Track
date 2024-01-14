import React, { InputHTMLAttributes } from 'react';

import './Switcher.scss';

import themeImage from '../../../assets/icons/theme.svg';

interface I_SwitcherProps {
  action: () => void;
  isChecked?: boolean;
}

const Switcher: React.FC<I_SwitcherProps> = ({ action, isChecked }) => {
  return (
    <label className="toggle">
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
