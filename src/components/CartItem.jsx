import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity } from '../store/CartSlice';
import './CartItem.css';

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  const totalAmount = calculateTotalAmount();

  const handleIncrease = (id) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      dispatch(updateQuantity({ id, quantity: item.quantity + 1 }));
    }
  };

  const handleDecrease = (id) => {
    const item = cartItems.find(item => item.id === id);
    if (item && item.quantity > 1) {
      dispatch(updateQuantity({ id, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert('Checkout feature coming soon!');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-container">
          <h1 className="cart-title">Shopping Cart</h1>
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <Link to="/plants" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1 className="cart-title">Shopping Cart</h1>
        
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-image-container">
                <img src={item.image} alt={item.name} className="item-image" />
              </div>
              
              <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-unit-price">Unit Price: ${item.price.toFixed(2)}</p>
              </div>
              
              <div className="item-quantity">
                <button 
                  className="quantity-btn decrease"
                  onClick={() => handleDecrease(item.id)}
                >
                  -
                </button>
                <span className="quantity-value">{item.quantity}</span>
                <button 
                  className="quantity-btn increase"
                  onClick={() => handleIncrease(item.id)}
                >
                  +
                </button>
              </div>
              
              <div className="item-total">
                <span className="total-label">Total:</span>
                <span className="total-price">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
              
              <button 
                className="delete-btn"
                onClick={() => handleRemove(item.id)}
                aria-label="Remove item"
              >
                🗑️
              </button>
            </div>
          ))}
        </div>
        
        <div className="cart-summary">
          <div className="summary-row">
            <span className="summary-label">Total Amount:</span>
            <span className="summary-value">${totalAmount.toFixed(2)}</span>
          </div>
          
          <div className="cart-actions">
            <Link to="/plants" className="continue-shopping-btn">
              Continue Shopping
            </Link>
            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout (Coming Soon)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
