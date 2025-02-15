import React from 'react';

// MenuItem
export interface MenuItemProps {
    id: number;
    title: string;
    image: string;
    description: string;
    ingredients: string[];
    price: number;
  }
  
  // MenuContainer
  export interface MenuContainerProps {
    children: React.ReactNode;
  }
  declare const MenuContainer: React.FC<MenuContainerProps>;
  export default MenuContainer;
  
  // MainContent
  export interface MainContentProps {
    children: React.ReactNode;
  }