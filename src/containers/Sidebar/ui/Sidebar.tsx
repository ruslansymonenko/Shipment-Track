import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

import { addClassNames } from '../../../utils/addClassNames/addClassNames';

import './Sidebar.scss';

import sidebarImgPrimary from '../../../assets/icons/delivery-primary.svg';
import sidebarImgSecondary from '../../../assets/icons/delivery-secondary.svg';
import { ThemeContext } from '../../../providers/ThemeProvider/ui/ThemeProvider';

const Sidebar: React.FC = () => {
  const isActive = useSelector((state: RootState) => state.sidebar.isActive);
  const [sidebarImg, setSidebarImg] = useState(sidebarImgPrimary);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === 'normal') {
      setSidebarImg(sidebarImgSecondary);
    } else {
      setSidebarImg(sidebarImgPrimary);
    }
  }, [theme]);

  return (
    <div className={addClassNames('sidebar', { collapsed: !isActive })}>
      <img
        className="sidebar-img"
        src={sidebarImg}
        alt="truck"
      />
    </div>
  );
};

export default Sidebar;
