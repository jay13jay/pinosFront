import React, { useState } from 'react';
import MenuItem from '../Components/Menu/MenuItem';
import MainContent from '../Components/MainContent';
import MenuContainer from '../Components/Menu/MenuContainer';

const base = import.meta.env.BASE_URL;

const menuItems = [
  {
    id: 0,
    title: "Pizza Margherita",
    description: "Classic pizza with tomatoes, mozzarella cheese, and fresh basil.",
    ingredients: ["Tomatoes", "Mozzarella Cheese", "Fresh Basil"],
    section: "New York Style Pizza",
    price: 12.99,
    image: `${base}menu_items/Cooked_sliced_pizza_on_peel-CPO.jpg`
  },
  {
    id: 1,
    title: "Spaghetti Carbonara",
    description: "Traditional Italian pasta with eggs, cheese, pancetta, and pepper.",
    section: "Italian Pasta",
    ingredients: ["Spaghetti", "Eggs", "Cheese", "Pancetta", "Pepper"],
    price: 14.99,
    image: `${base}menu_items/spaghetti-carbonara.jpg`
  },
  {
    id: 2,
    title: "Tiramisu",
    description: "Popular coffee-flavored Italian dessert.",
    section: "Desserts",
    ingredients: ["Coffee", "Mascarpone Cheese", "Ladyfingers", "Cocoa Powder"],
    price: 6.99,
    image: `${base}menu_items/tiramisu.jpg`
  }
];

const menuSections = [
  "All",
  "Specials",
  "Salads",
  "Appetizers",
  "New York Style Pizza",
  "Calzone & Strombolis",
  "Pino's Specialties",
  "Italian Pasta",
  "Pino's Subs",
  "Cold Cut Subs",
  "Seafood",
  "Desserts",
  "Kids Menu",
  "Beverages"
];

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
            <h2 className="hover:text-green-500 text-red-600 bg-white rounded-full px-2 py-1" key={index} onClick={() => handleSectionClick(section)}>
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
