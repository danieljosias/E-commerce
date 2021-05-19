import React from 'react';
import { withRouter } from 'react-router';
import './Produto3.css';

export default function Produto(props){

return (
   <div>
       <div className="container-comprar">
       <div className="main-card2">
            <div className="card2">
                <div className="card-inner2">
                    <img src={props.url3} alt={props.name3} id={3} />
                    
                    <div className="card-text">
                        <h3>Tênis Springblade X Masculino</h3>
                        <p>Ref: # D16-7554-003-43</p>
                        <p>Vendido e entregue por Reactshoes</p>
                        <p>Tamanho: 40</p>
                        <p>Cor: Verde</p>
                        <p>Total: R$1,000</p>
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
