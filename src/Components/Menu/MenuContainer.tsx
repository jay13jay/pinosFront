import * as React from 'react';
import type { MenuContainerProps } from './types';

const MenuContainer: React.FC<MenuContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-grow justify-center">
      <div className="grid grid-cols-1 gap-1 bg-gray-700 rounded-2xl p-2 w-full md:max-w-4xl min-w-[350px]">
        {React.Children.map(children, (child) => (
          <div className="mt-2 border hover:border-red-500 rounded-2xl w-full ">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuContainer;
