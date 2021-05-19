import React from 'react';
import './Main.css';
import chinelo1 from '../../img/chinelo1.png';
import chinelo2 from '../../img/chinelo2.png';
import chinelo3 from '../../img/chinelo3.png';
import chinelo4 from '../../img/chinelo4.png';
import chinelo5 from '../../img/chinelo5.png';
import chinelo6 from '../../img/chinelo6.png';
import chinelo7 from '../../img/chinelo7.png';
import chinelo8 from '../../img/chinelo8.png';
import chinelo9 from '../../img/chinelo9.png';
import chinelo10 from '../../img/chinelo10.png';

import marca1 from '../../img/marca1.png'
import marca2 from '../../img/marca2.png'
import marca3 from '../../img/marca3.png'
import marca4 from '../../img/marca4.png'
import marca5 from '../../img/marca5.png'

export default function Main() {
 return (
   <main className="container-principal">
       <div className="text-principal">
           <h1>React shoes o maior site de calçados do Brasil.</h1>
           <p>Venha conferir as nossas ofertas.</p>
       </div>
       <div className="card-principal">
            <div className="card3">
                <div className="card-inner3">
                    <img src={chinelo1} alt="" />
                    <h2>Jordan</h2>
                    <p>R$ 150</p>
                    <p><strike>R$ 250</strike></p>
                    <button>Comprar</button>
                </div>
            </div>
            <div className="card3">
                <div className="card-inner3">
                    <img src={chinelo2} alt="" />
                    <h2>Nike Air</h2>
                    <p>R$ 150</p>
                    <p><strike>R$ 200</strike></p>
                    <button>Comprar</button>
                </div>
            </div>
            <div className="card3">
                <div className="card-inner3">
                    <img src={chinelo3} alt="" />
                    <h2>Nike Air</h2>
                    <p>R$ 150</p>
                    <p><strike>R$ 200</strike></p>
                    <button>Comprar</button>
                </div>
            </div>
            <div className="card3">
                <div className="card-inner3">
                    <img src={chinelo4} alt="" />
                    <h2>Nike Rosa</h2>
                    <p>R$ 100</p>
                    <p><strike>R$ 120</strike></p>
                    <button>Comprar</button>
                </div>
            </div>
            <div className="card3">
                <div className="card-inner3">
                    <img src={chinelo5} alt="" />
                    <h2>Nike Floral</h2>
                    <p>R$ 200</p>
                    <p><strike>R$ 250</strike></p>
                    <button>Comprar</button>
                </div>
            </div>
       </div>
       <div className="card-principal">
            <div className="card3">
                <div className="card-inner3">
                    <img src={chinelo6} alt="" />
                    <h2>Jordan</h2>
                    <p>R$ 150</p>
                    <p><strike>R$ 250</strike></p>
                    <button>Comprar</button>
                </div>
            </div>
            <div className="card3">
                <div className="card-inner3">
                    <img src={chinelo7} alt="" />
                    <h2>Nike Verde</h2>
                    <p>R$ 100</p>
                    <p><strike>R$ 150</strike></p>
                    <button>Comprar</button>
                </div>
            </div>
            <div className="card3">
                <div className="card-inner3">
                    <img src={chinelo8} alt="" />
                    <h2>Nike Air</h2>
                    <p>R$ 150</p>
                    <p><strike>R$ 200</strike></p>
                    <button>Comprar</button>
                </div>
            </div>
            <div className="card3">
                <div className="card-inner3">
                    <img src={chinelo9} alt="" />
                    <h2>Nike Rosa</h2>
                    <p>R$ 100</p>
                    <p><strike>R$ 120</strike></p>
                    <button>Comprar</button>
                </div>
            </div>
            <div className="card3">
                <div className="card-inner3">
                    <img src={chinelo10} alt="" />
                    <h2>Nike Floral</h2>
                    <p>R$ 200</p>
                    <p><strike>R$ 250</strike></p>
                    <button>Comprar</button>
                </div>
            </div>
       </div>
       
        <h1 className="title-marcas">Marcas</h1>
        <div className="container-marcas">
            <div className="marcas">
                <div className="marcas-inner">
                    <img src={marca1} alt="" />
                </div>
            </div>
            <div className="marcas">
                <div className="marcas-inner">
                    <img src={marca2} alt="" />
                </div>
            </div>
            <div className="marcas">
                <div className="marcas-inner">
                    <img src={marca3} alt="" />
                </div>
            </div>
            <div className="marcas">
                <div className="marcas-inner">
                    <img src={marca4} alt="" />
                </div>
            </div>
            <div className="marcas">
                <div className="marcas-inner">
                    <img src={marca5} alt="" />
                </div>
            </div>
        </div>

   </main>  
 );
}