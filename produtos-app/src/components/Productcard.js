import React, { useState } from "react";
import "./Productcard.css";

function Productcard({ name, price, description, image }) {
  const [itemQuantity, setItemQuantity] = useState(0);

  const handleAddItem = () => {
    setItemQuantity(itemQuantity + 1);
  };

  const handleRemoveItem = () => {
    if (itemQuantity > 0) {
      setItemQuantity(itemQuantity - 1);
    }
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