import React from 'react';

const CartWidget = () => {
  return (
    <div className="cart-widget" style={{ position: 'relative' }}>
      <span style={{ fontSize: '1.5rem', cursor: 'pointer' }}>🛒</span>
      <span style={{ position: 'absolute', top: '-10px', right: '-10px', background: 'red', borderRadius: '50%', padding: '0.25rem 0.5rem', color: 'white' }}>3</span>
    </div>
  );
};

export default CartWidget;
