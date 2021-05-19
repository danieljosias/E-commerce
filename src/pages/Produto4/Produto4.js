import React from 'react';
import { withRouter } from 'react-router';
import './Produto4.css';

export default function Produto(props){

return (
   <div>
       <div className="container-comprar">
       <div className="main-card2">
            <div className="card2">
                <div className="card-inner2">
                    <img src={props.url4} alt={props.name4} id={4} />
                    
                    <div className="card-text">
                        <h3>Tênis Jordan X Masculino</h3>
                        <p>Ref: # D34-7654-003-34</p>
                        <p>Vendido e entregue por Reactshoes</p>
                        <p>Tamanho: 44</p>
                        <p>Cor: Vermelho</p>
                        <p>Total: R$800</p>
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
