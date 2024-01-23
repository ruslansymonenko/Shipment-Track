import React, { useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../store';

import { addClassNames } from '../../../utils/addClassNames/addClassNames';
import { hideSidebar } from '../../../store/slices/appSlices/sidebarSlice';

import './Sidebar.scss';

import cancelImg from '../../../assets/icons/delete.svg';

import sidebarImgPrimary from '../../../assets/icons/delivery-primary.svg';
import sidebarImgSecondary from '../../../assets/icons/delivery-secondary.svg';
import { ThemeContext } from '../../../providers/ThemeProvider/ui/ThemeProvider';

const Sidebar: React.FC = () => {
  const isActive = useSelector((state: RootState) => state.sidebar.isActive);
  const [sidebarImg, setSidebarImg] = useState(sidebarImgPrimary);
  const { theme } = useContext(ThemeContext);
  const dispatch: AppDispatch = useDispatch();

  const handleHideSidebar = () => {
    dispatch(hideSidebar());
  };

  useEffect(() => {
    if (theme === 'normal') {
      setSidebarImg(sidebarImgSecondary);
    } else {
      setSidebarImg(sidebarImgPrimary);
    }
  }, [theme]);

  return (
    <div className={addClassNames('sidebar', { 'sidebar-collapsed': !isActive })}>
      <img
        className="sidebar-img"
        src={sidebarImg}
        alt="truck"
      />

      <div
        className={addClassNames('sidebar-close', { 'sidebar-close--visible ': isActive }, [])}
        onClick={handleHideSidebar}
      >
        <img
          className="sidebar-close__img"
          src={cancelImg}
          alt="close sidebar"
        />
      </div>
    </div>
  );
};

export default Sidebar;
