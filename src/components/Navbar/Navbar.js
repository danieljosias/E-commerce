import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar() {
 return (
   <nav className="container-navbar">
       <ul>
           <li><Link to="/principal" className="active">Principal</Link></li>
           <li><Link to="/tenis">Tênis</Link></li>
           <li><Link to="/contatos">Contatos</Link></li>
       </ul>
            <div className="carrinho">
                <Link to="/cart"><i className="fas fa-cart-plus"></i></Link>
            </div>
   </nav>
 );
}