import react from 'react';
import "./Sidebar.css";

function Sidebar(){
    return(
        <aside className="sidebar">
            <h2>Categorias</h2>
            <ul>
                <li>Eletrônicos</li>
                <li>Roupas</li>
                <li>Livros</li>
                <li>Casa</li>
            </ul>
        </aside>
    );
}

export default Sidebar;