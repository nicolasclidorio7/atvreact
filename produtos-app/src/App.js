import React from "react";
import Header from "./components/Header";
import Productcard from "./components/Productcard";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import TaskList from "./components/TaskList";
import "./App.css";
import { CartProvider } from "./components/CartContext";

function App() {
  const products = [
    { id: 1, name: "Notebook", price: 3500, description: "Notebook com 16GB de RAM" },
    { id: 2, name: "Celular", price: 2000, description: "Celular com 128GB de armazenamento" },
    { id: 3, name: "Fone de ouvido", price: 300, description: "Fone de ouvido com cancelamento de ruido" },
    { id: 4, name: "Teclado Mecanico", price: 450, description: "Teclado mecanico com switchs azuis" },
  ];


  return (
    <CartProvider>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="content-area">
            {products.map((product) => (
              <Productcard
                key={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
                id={product.id}
              />
            ))}
            {/* Componente interativo de lista */}
            <TaskList />
          </div>
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
          
