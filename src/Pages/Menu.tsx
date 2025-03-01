import React, { useState } from 'react';
import MenuItem from '../Components/Menu/MenuItem';
import MainContent from '../Components/MainContent';
import MenuContainer from '../Components/Menu/MenuContainer';
import menuItemsData from './menu_items.json';
import menuSections from './menu_sections.json';

const base = import.meta.env.BASE_URL;

const menuItems = menuItemsData.map(item => ({
  ...item,
  image: `${base}${item.image}`
}));

const Menu: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const handleSectionClick = (section: string) => {
    setSelectedSection(section === "All" ? null : section);
  };

  const filteredMenuItems = selectedSection
    ? menuItems.filter(item => item.section === selectedSection)
    : menuItems;

  return (
    <>
      <MainContent>
        <div className="flex flex-wrap gap-2 justify-center mb-5">
          {menuSections.map((section, index) => (
            <h2 className="hover:text-green-500 text-gray-900 bg-white rounded-full px-2 py-1 font-bold" key={index} onClick={() => handleSectionClick(section)}>
              {section}
            </h2>
          ))}
        </div>
        <MenuContainer>
          {filteredMenuItems.map((item, index) => (
            <MenuItem key={index} menuItem={item} />
          ))}
        </MenuContainer>
      </MainContent>
    </>
  );
};

export default Menu;
