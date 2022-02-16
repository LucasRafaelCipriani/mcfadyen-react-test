import React from 'react';
import { Link } from 'react-router-dom';

import cartSVG from '../../assets/Bag.svg';
import accountSVG from '../../assets/Account.svg';
import searchSVG from '../../assets/Search.svg';

import classes from './RightSideHeader.module.css';

const RightSideHeader = () => {
  return (
    <ul className={classes['icon-menu']}>
      <li>
        <button type="button" className="btn-link">
          <img src={searchSVG} alt="Search Product Button" />
        </button>
      </li>
      <li>
        <Link to="/cart">
          <img src={cartSVG} alt="Cart Link" />
        </Link>
      </li>
      <li>
        <Link to="/account">
          <img src={accountSVG} alt="Account Link" />
        </Link>
      </li>
    </ul>
  );
};

export default RightSideHeader;
