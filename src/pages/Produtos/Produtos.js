import React from 'react';
import './Produtos.css';
import {Link} from "react-router-dom";
import card1 from '../../img/card1.png';
import card2 from '../../img/card2.png';
import card3 from '../../img/card3.png';
import card4 from '../../img/card4.png';

export default function Produtos(props) {
  
    return (
   <div className="container-principal">
       <h1 className="title-card">Tênis</h1>
       <div className="main-card">
            <div className="card">
                <div className="card-inner">
                    <img src={card1} alt={props.name1}/>
                    <p>{props.name1}</p>
                    <Link to="/comprar1"><button>Comprar</button></Link>  
                </div>
            </div>

            <div className="card">
                <div className="card-inner">
                    <img src={card2} alt={props.name2}/>
                    <p>{props.name2}</p>
                    <Link to="/comprar2"><button>Comprar</button></Link>  
                </div>
            </div>

            <div className="card">
                <div className="card-inner">
                    <img src={card3} alt={props.name3}/>
                    <p>{props.name3}</p>
                    <Link to="/comprar3"><button>Comprar</button></Link>  
                </div>
            </div>

            <div className="card">
                <div className="card-inner">
                    <img src={card4} alt={props.name4}/>
                    <p>{props.name4}</p>
                    <Link to="/comprar4"><button>Comprar</button></Link>  
                </div>
            </div>
       </div>
   </div>
 );
}

