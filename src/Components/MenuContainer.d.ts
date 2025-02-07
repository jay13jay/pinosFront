import * as React from 'react';
interface MenuContainerProps {
    children: React.ReactNode;
}
declare const MenuContainer: React.FC<MenuContainerProps>;
export default MenuContainer;

declare module '../Components/MenuContainer' {
  import { FC, ReactNode } from 'react';

  interface MenuContainerProps {
    children: ReactNode;
  }

  const MenuContainer: FC<MenuContainerProps>;
  export default MenuContainer;
}
