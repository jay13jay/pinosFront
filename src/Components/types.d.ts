import React from 'react';

declare const Navbar: React.FC;
export default Navbar;


declare const MainContent: React.FC<MainContentProps>;
export default MainContent;

export interface HeaderProps {
  title: string;
}
declare const Header: React.FC<HeaderProps>;
export default Header;

export interface NavButtonProps {
  label: string;
  icon: React.ReactNode;
  to: string;
  onClick: () => void;
}

declare const NavButton: React.FC<NavButtonProps>;
export default NavButton;