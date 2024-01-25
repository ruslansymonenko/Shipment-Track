import React, { ReactNode } from 'react';

import { Navbar } from '../../containers/Navbar';
import { Sidebar } from '../../containers/Sidebar';

export enum LayoutType {
  WITH_AUTH,
  WITHOUT_AUTH,
}

interface I_LayoutProps {
  children: ReactNode;
  layoutType: LayoutType;
}

const Layout: React.FC<I_LayoutProps> = ({ children, layoutType }) => {
  const layoutWithoutAuth: JSX.Element = (
    <>
      <div className="content">
        <main className="main">{children}</main>
      </div>
    </>
  );

  const layoutWithAuth: JSX.Element = (
    <>
      <Navbar />
      <div className="content">
        <main className="main">{children}</main>
        <Sidebar />
      </div>
    </>
  );

  return layoutType === LayoutType.WITH_AUTH ? layoutWithAuth : layoutWithoutAuth;
};

export default Layout;
