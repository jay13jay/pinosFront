import React, { useState, useContext } from 'react';
import { MenuItemProps } from './types';
import { CartContext } from '../Cart/CartContext';

const MenuItem: React.FC<{ menuItem: MenuItemProps }> = ({ menuItem }) => {
	const { id, title, image, description, ingredients, price, section } = menuItem;
	const numericId = Number(id);
	const [showAll, setShowAll] = useState(false);
	const [showDetails, setShowDetails] = useState(false);
	const { addItem } = useContext(CartContext);

	const displayedIngredients = showAll ? ingredients : [];
	const ingredientsList = displayedIngredients.map((ingredient, index) => (
		<div key={index} className="bg-gray-200 p-2 text-center text-gray-700">
			{ingredient}
		</div>
	));

	return (
		<div className="flex bg-gray-900 flex-row md:flex-col rounded-2xl shadow-lg md:max-w-4xl min-w-[350px]">
			{showDetails && (
				<img className="h-60 w-full rounded-t-2xl md:rounded-t-none" src={image} alt="Cooked sliced pizza" />
			)}
			<div className="flex-grow p-4 rounded-b-2xl md:rounded-r-2xl md:rounded-b-none">
				<div className="flex flex-col md:flex-row">
					<div className="flex-col w-full space-y-1 mr-10 min-w-[200px]">
						<h2 className="text-xl font-semibold">
							{title}
						</h2>
						<p className="text-md text-red-500 italic ">
							{section}
						</p>
						<p className="text-md text-gray-900 bg-gray-300 rounded-b-full pb-5 px-5 line-clamp-2 mb-5 md:mb-0 font-bold">
							{description}
						</p>
					</div>
					<div className="flex items-center space-x-4">
						<button onClick={() => setShowDetails(!showDetails)} className="bg-green-500 cursor-pointer py-2 px-4 rounded-2xl">
							{showDetails ? 'Hide' : <a className='text-sm faPlus'>details</a>}
						</button>

						<div className="font-semibold py-2 px-4 rounded-2xl bg-gray-200 text-gray-900 flex items-center h-10">
							<span className='p-1'>$ </span>
							<span> {price}</span>
						</div>

						<button
							className="bg-red-500 text-white py-2 px-4 rounded-2xl cursor-pointer"
							onClick={() => addItem({ id: id, name: title, price: price })}
						>
							Add
						</button>
					</div>
				</div>
				{showDetails && (
					<div className="grid grid-cols-1 gap-2 mt-4">
						{ingredientsList}
						{ingredients.length > 0 && (
							<button onClick={() => setShowAll(!showAll)} className="text-blue-500 cursor-pointer">
								{showAll ? 'Show less' : '→ Show ingredients'}
							</button>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default MenuItem;
