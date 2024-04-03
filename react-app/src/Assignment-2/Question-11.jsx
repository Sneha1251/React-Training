// Build a shopping cart application using the useContext hook.
// Set up a context to manage the state of the shopping cart.
// Create components to display products and a shopping cart.
// Use the useContext hook to access the cart state and update it.
// Allow users to add and remove items from the cart.
// Display the total price of items in the cart.

import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };
  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      <div className="Cart">
        <ProductList />
        <Cart />
        <p>Total Price : ${getTotalPrice().toFixed(2)}</p>
      </div>
    </CartContext.Provider>
  );
};
const ProductList = () => {
  const products = [
    { id: 1, name: "Laptop", price: 70000 },
    { id: 2, name: "Ear-Podes", price: 5000 },
    { id: 3, name: "HeadPhone", price: 7000 },
    { id: 4, name: "Phone", price: 25000 },
    { id: 5, name: "Watch", price: 3000 },
  ];
  const { addToCart } = useContext(CartContext);
  return (
    <div className="product-list">
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - <strong>${product.price}</strong>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  return (
    <div className="cart">
        <h2>Shopping Cart</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>
            {product.name} - <strong>${product.price}</strong>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ShoppingCart;
