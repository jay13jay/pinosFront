import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const { items, removeItem } = useContext(CartContext);

  const rawTotalPrice = items.reduce(
    (total, item) => {
      const price = item.price;
      const quantity = item.quantity;
      console.log(`Price: ${price}, Quantity: ${quantity}, Total: ${total}`);
      return total + price * quantity;
    },
    0
  );
  const totalPrice = parseFloat(rawTotalPrice.toFixed(2));

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <ul className="space-y-4 bg-gray-800 p-4 rounded">
        {items.map(item => (
          <li key={item.id} className="flex justify-between items-center border-b pb-2 bg-gray-900">
            <div className='text-sm ml-2 mt-1'>
              <p className="font-medium">{item.name} (x{item.quantity})</p>
              <p className="text-gray-50">Price: ${item.price}</p>
            </div>
            <button
              className="bg-red-500 text-white mt-1.5 mr-4 px-2 py-1 align-middle rounded hover:bg-red-700"
              onClick={() => removeItem(item.id)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Total: ${totalPrice}</h3>
      </div>
    </div>
  );
};

export default Cart;
