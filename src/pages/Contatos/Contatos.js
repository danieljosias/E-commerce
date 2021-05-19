import React from 'react';
import './Contatos.css';

export default function Contatos() {
 return (
   <div className="container-contatos">
       <h1 className="title-contatos">Contatos</h1>
       <div className="contatos">
           <div className="text-contatos">
                <p>☎Telefone: (xx) xxxx - xxxx</p>
                <p>✉E-mail: reactshoes@domínio.com.br</p>
                <p>✆Celular: (xx) x xxxx - xxxx</p>
           </div>
       </div>
   </div>
 );
}
