import React from 'react';

const ItemListContainer = ({ message }) => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>{message}</h2>
    </div>
  );
};

export default ItemListContainer;
