import React from 'react';
import { withRouter } from 'react-router';
import './Produto1.css';

export default function Produto(props){

return (
    <div className="container-comprar" >
       <div className="main-card2" >
            <div className="card2" >
                <div className="card-inner2">
                    <img src={props.url1} alt={props.name1} id={1}/>
                    
                    <div className="card-text">
                        <h3>Tênis Mizuno Wave Prophecy X Masculino</h3>
                        <p>Ref: # D16-7532-008-42</p>
                        <p>Vendido e entregue por Reactshoes</p>
                        <p>Tamanho: 42</p>
                        <p>Cor: Azul</p>
                        <p>Total: R$1,500</p>
                        <button className="btn2">Finalizar</button>
                    </div> 
                </div>
            </div>
       </div>
   </div>
 );

}  
 withRouter(Produto);
