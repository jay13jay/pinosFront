import React from 'react';

// Navbar
declare const Navbar: React.FC;
export default Navbar;


declare const MainContent: React.FC<MainContentProps>;
export default MainContent;

// Header
export interface HeaderProps {
  title: string;
}
declare const Header: React.FC<HeaderProps>;
export default Header;
