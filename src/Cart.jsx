import React from 'react';
import { PaystackButton } from 'react-paystack';

export default function Cart({ cart, setCart }) {
  const publicKey = "pk_test_bb374ace6721002e7c9d2408fb1d29ea1ea2a148"; // Replace with your key
  const email = "runsewemichael93@gmail.com"; // Optional: make dynamic

  // Group identical items
  const groupedCart = cart.reduce((acc, item) => {
    const key = `${item.name}-${item.price}`;
    if (!acc[key]) {
      acc[key] = { ...item, quantity: 1 };
    } else {
      acc[key].quantity += 1;
    }
    return acc;
  }, {});
  const groupedItems = Object.values(groupedCart);

  // Total price
  const totalPrice = groupedItems
    .reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0)
    .toFixed(2);

  // Add one more of the same item
  const handleIncrease = (itemToAdd) => {
    setCart([...cart, { name: itemToAdd.name, price: itemToAdd.price }]);
  };

  // Remove one instance
  const handleRemoveOne = (itemToRemove) => {
    const index = cart.findIndex(
      (item) =>
        item.name === itemToRemove.name &&
        item.price === itemToRemove.price
    );
    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setCart(updatedCart);
    }
  };

  // Remove all instances
  const handleRemoveAll = (itemToRemove) => {
    const updatedCart = cart.filter(
      (item) =>
        !(item.name === itemToRemove.name && item.price === itemToRemove.price)
    );
    setCart(updatedCart);
  };

  const componentProps = {
    email,
    amount: Math.round(totalPrice * 100),
    metadata: { cart },
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      alert("Thanks for your purchase!");
      setCart([]);
    },
    onClose: () => alert("Transaction canceled."),
  };

  return (
    <div className="cart-summary">
      <h3 className='cart-title'>🛒 Cart: {cart.length} item(s)</h3>
      <ul className="cart-items">
        {groupedItems.map((item, index) => (
          <li key={index} className="cart-item">
            <span>
              {item.name} : &#8358;{item.price} × {item.quantity} = &#8358;{(
                item.price * item.quantity
              ).toFixed(2)}
            </span>
            <div className="button-group">
              <button onClick={() => handleIncrease(item)}>+</button>
              <button onClick={() => handleRemoveOne(item)}>-</button>
              <button onClick={() => handleRemoveAll(item)}>Remove All</button>
            </div>
          </li>
        ))}
      </ul>
      <p><strong>Total:</strong> &#8358;{totalPrice}</p>
      {cart.length > 0 && <PaystackButton {...componentProps} />}
    </div>
  );
}
