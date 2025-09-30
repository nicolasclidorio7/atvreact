import React from "react";
import "./Productcard.css";

import { useCart } from "./CartContext";

function Productcard({ id, name, price, description, image }) {
  const { cart, addToCart, removeFromCart } = useCart();
  const item = cart.find((item) => item.id === id);
  const itemQuantity = item ? item.quantity : 0;

  const handleAddItem = () => {
    addToCart({ id, name, price, description, image });
  };

  const handleRemoveItem = () => {
    removeFromCart(id);
  };

  return (
    <div className="product-card">
      {image && <img src={image} alt={name} />}
      <h3>{name}</h3>
      <p className="price">R$ {price.toFixed(2)}</p>
      <p className="description">{description}</p>
      <button className="buy-button" onClick={handleAddItem}>Adicionar ao Carrinho</button>
      {itemQuantity > 0 && (
        <div className="cart-controls">
          <button onClick={handleRemoveItem}>Remover Item Carrinho</button>
          <p>Quantidade de Itens no Carrinho: {itemQuantity}</p>
        </div>
      )}
    </div>
  );
}

export default Productcard;