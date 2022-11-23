import Header from './Header';

import classes from '../styles/Layout.module.scss';

import type { FC, ReactNode } from 'react';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={classes.layout}>
      <Header />

      <main>{children}</main>
    </div>
  );
};

export default Layout;
