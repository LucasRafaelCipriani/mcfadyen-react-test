import React from 'react';
import MegaMenu from './MegaMenu';
import RightSideHeader from './RightSideHeader';

import classes from '../../styles/Common/Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>
        <Link to="/">MY COMPANY.COM</Link>
      </h1>
      <nav>
        <MegaMenu />
      </nav>
      <RightSideHeader />
    </header>
  );
};

export default Header;
