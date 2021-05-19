import React from 'react';
import { withRouter } from 'react-router';
import './Produto2.css';

export default function Produto(props){

return (
   <div>
       <div className="container-comprar">
       <div className="main-card2">
            <div className="card2">
                <div className="card-inner2">
                    <img src={props.url2} alt={props.name2} id={2} />
                    
                    <div className="card-text">
                        <h3>Tênis Nike Air Max X Feminino</h3>
                        <p>Ref: # D13-3495-001-42</p>
                        <p>Vendido e entregue por Reactshoes</p>
                        <p>Tamanho: 36</p>
                        <p>Cor: Rosa</p>
                        <p>Total: R$ 700</p>
                        <button className="btn2">Finalizar</button>
                    </div> 
                </div>
            </div>
       </div>
   </div>
   </div>
 );

}  
 withRouter(Produto);
