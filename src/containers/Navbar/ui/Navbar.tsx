import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../router/routesConfig';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { useTranslation } from 'react-i18next';

import { hideSidebar, showSidebar } from '../../../store/slices/appSlices/sidebarSlice';

import { Button, ButtonTypes } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { CircleButton, CircleButtonTypes } from '../../../components/CircleButton';

import './Nabvar.scss';

import listImg from '../../../assets/icons/burger-menu.svg';
import searchImg from '../../../assets/icons/search.svg';
import { Switcher } from '../../../components/Switcher';
import { ThemeContext } from '../../../providers/ThemeProvider/ui/ThemeProvider';

enum Languages {
  UA = 'ua',
  EN = 'en',
}

const Navbar: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const isSidebarActive = useSelector((state: RootState) => state.sidebar.isActive);
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [switcherStatus, setSwitcherStatus] = useState(false);
  const [activeLangBtn, setActiveLangBtn] = useState<Languages | ''>('');

  const handleNavbarVisibility = () => {
    isSidebarActive ? dispatch(hideSidebar()) : dispatch(showSidebar());
  };

  const handleAppTheme = () => {
    toggleTheme();
  };

  const switchLanguage = (lang: Languages) => {
    i18n.changeLanguage(lang);
    setActiveLangBtn(lang);
  };

  useEffect(() => {
    if (theme === 'normal') {
      setSwitcherStatus(false);
    } else {
      setSwitcherStatus(true);
    }
  }, [theme]);

  useEffect(() => {
    if (localStorage.getItem('i18nextLng')) {
      const savedLanguage = localStorage.getItem('i18nextLng') as Languages;
      setActiveLangBtn(savedLanguage);
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <h1 className="navbar-title">
            <Link
              className="navbar-link"
              to={AppRoutes.MAIN}
            >
              Shipment Track
            </Link>
          </h1>
          <div className="navbar-controllers">
            <Button
              buttonType={ButtonTypes.PRIMARY}
              btnChildren={t('Add +')}
              addClasses={['navbar-button']}
            />
            <Input addClasses={['navbar-input']} />
            <CircleButton
              buttonType={CircleButtonTypes.SECONDARY}
              btnChildren={
                <img
                  src={searchImg}
                  alt={'menu'}
                />
              }
              addClasses={['navbar-circle-btn']}
            />
            <CircleButton
              buttonType={isSidebarActive ? CircleButtonTypes.PRIMARY : CircleButtonTypes.SECONDARY}
              btnChildren={
                <img
                  src={listImg}
                  alt={'menu'}
                />
              }
              addClasses={['navbar-circle-btn']}
              onClick={handleNavbarVisibility}
            />
            <Switcher
              action={handleAppTheme}
              isChecked={switcherStatus}
              addClasses={['navbar-switcher']}
            />
            <CircleButton
              buttonType={
                activeLangBtn === 'en' ? CircleButtonTypes.PRIMARY : CircleButtonTypes.SECONDARY
              }
              btnChildren={'en'}
              addClasses={['navbar-circle-btn']}
              onClick={() => switchLanguage(Languages.EN)}
            />
            <CircleButton
              buttonType={
                activeLangBtn === 'ua' ? CircleButtonTypes.PRIMARY : CircleButtonTypes.SECONDARY
              }
              btnChildren={'ua'}
              addClasses={['navbar-circle-btn']}
              onClick={() => switchLanguage(Languages.UA)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
