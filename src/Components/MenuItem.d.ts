declare module '../Components/MenuItem' {
  import { FC } from 'react';

  interface MenuItemProps {
    title: string;
    description: string;
    ingredients: string[];
    price: string;
  }

  const MenuItem: FC<MenuItemProps>;
  export default MenuItem;
}
