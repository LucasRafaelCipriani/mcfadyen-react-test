import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import classes from './MegaMenu.module.css';

const MegaMenu = () => {
  const { categories } = useSelector((state: any) => state.globalSlice);

  return (
    <ul className={classes['mega-menu']}>
      {categories.map((category: any) => (
        <li key={category.id}>
          <NavLink
            to={category.url}
            className={({ isActive }) =>
              isActive
                ? `${classes['mega-menu-link']} ${classes['active']}`
                : classes['mega-menu-link']
            }
          >
            {category.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MegaMenu;
