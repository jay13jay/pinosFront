import React from 'react';
import { useLocation } from 'react-router-dom';
import NavbarDefault from './Navigation/Navbar2';
import Footer from './Footer';
import ChatBox from './Chat/ChatBox';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  let pageTitle = 'Pinos rVA';

  return (
    <>
      <NavbarDefault title={pageTitle} />
      <main>{children}</main>
      <Footer />
      <ChatBox />
    </>
  );
};

export default Layout;