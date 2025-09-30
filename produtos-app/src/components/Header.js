import React from 'react';
import './Header.css';
import { useCart } from './CartContext';

function Header() {
  const { total } = useCart();
  return (
    <header className="header">
      <h1>Minha Loja</h1>
      <div className="cart-total">
        Total do Carrinho: <strong>R$ {total.toFixed(2)}</strong>
      </div>
    </header>
  );
}

export default Header;
