import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

import { addClassNames } from '../../../utils/addClassNames/addClassNames';

import './Sidebar.scss';

const Sidebar: React.FC = () => {
  const isActive = useSelector((state: RootState) => state.sidebar.isActive);

  return <div className={addClassNames('sidebar', { collapsed: isActive })}>Sidebar</div>;
};

export default Sidebar;
