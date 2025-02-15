import React, { createContext, useState, ReactNode } from 'react';

export interface CartItem {
	id: number;
	name: string;
	price: number;
	quantity: number;
}

interface CartContextType {
	items: CartItem[];
	addItem: (item: Omit<CartItem, 'quantity'>) => void;
	removeItem: (id: number) => void;
	getTotal: () => number;
}

export const CartContext = createContext<CartContextType>({
	items: [],
	addItem: () => {},
	removeItem: () => {},
	getTotal: () => 0,
});

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [items, setItems] = useState<CartItem[]>([]);

	const addItem = (newItem: Omit<CartItem, 'quantity'>) => {
		setItems(prevItems => {
			const existing = prevItems.find(item => item.id === newItem.id);
			if (existing) {
				return prevItems.map(item =>
					item.id === newItem.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			}
			return [...prevItems, { ...newItem, quantity: 1 }];
		});
	};

	const removeItem = (id: number) => {
		setItems(prevItems => {
			const existing = prevItems.find(item => item.id === id);
			if (existing) {
				if (existing.quantity > 1) {
					return prevItems.map(item =>
						item.id === id
							? { ...item, quantity: item.quantity - 1 }
							: item
					);
				}
				return prevItems.filter(item => item.id !== id);
			}
			return prevItems;
		});
	};

	const getTotal = () =>
		items.reduce((acc, item) => acc + item.price * item.quantity, 0);

	return (
		<CartContext.Provider value={{ items, addItem, removeItem, getTotal }}>
			{children}
		</CartContext.Provider>
	);
};
