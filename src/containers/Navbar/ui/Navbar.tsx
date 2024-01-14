import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../router/routesConfig';

import { Button, ButtonTypes } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { CircleButton, CircleButtonTypes } from '../../../components/CircleButton';

import './Nabvar.scss';

import listImg from '../../../assets/icons/burger-menu.svg';
import searchImg from '../../../assets/icons/search.svg';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
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
          btnChildren={'Add +'}
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
          buttonType={CircleButtonTypes.SECONDARY}
          btnChildren={
            <img
              src={listImg}
              alt={'menu'}
            />
          }
        />
      </div>
    </nav>
  );
};

export default Navbar;
