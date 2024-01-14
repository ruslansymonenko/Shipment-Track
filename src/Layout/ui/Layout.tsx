import React from 'react';
import { Outlet } from 'react-router-dom';

import { Navbar } from '../../containers/Navbar';
import { Sidebar } from '../../containers/Sidebar';

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <main className="main">
          <Outlet />
        </main>
        <Sidebar />
      </div>
    </>
  );
};

export default Layout;
