import React from "react";
import "./Productcard.css";

function Productcard({name, price, description}) {
    return (
        <div className="product-card">
            <h3>{name}</h3>
            <p className="price">R$ {price.toFixed(2)}</p>
            <p className="description">{description}</p>
            <button className="buy-button">Comprar</button>
        </div>
    );
}

export default Productcard;