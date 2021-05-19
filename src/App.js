import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import Produtos from './pages/Produtos/Produtos';
import Produto1 from './pages/Produto1/Produto1';
import Produto2 from './pages/Produto2/Produto2';
import Produto3 from './pages/Produto3/Produto3';
import Produto4 from './pages/Produto4/Produto4';
import Cart from './pages/Cart/Cart';
import Contatos from './pages/Contatos/Contatos';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar />
       
        <Switch>
          <Route path="/tenis"> <Produtos name1="Mizzuno" name2="Nike Air Max" name3="Adidas" name4="Jordan"/> </Route> 
          <Route path="/cart"> <Cart /> </Route> 
         
          <Route path="/comprar1"> <Produto1
          name1="Mizzuno"
          url1="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-prophecy-x-masculino/08/D16-7532-008/D16-7532-008_zoom1.jpg?ts=1606762437&ims=420x"
          id="1"
          /> </Route>

          <Route path="/comprar2"> <Produto2
           name2="Nike Air Max"
           url2="https://www.ocarafashion.com/wp-content/uploads/2021/01/nike-air-max-90-valentines-day-dd8029-100-brasil-1.jpg"
           id="2"
          /> </Route>

          <Route path="/comprar3"> <Produto3
           name3="Adidas"
           url3="https://i.pinimg.com/originals/1b/ae/8f/1bae8faf8a44cfadd32440abd95262f7.jpg"
           id="3"
          /> </Route>

          <Route path="/comprar4"> <Produto4
           name4="Jordan"
           url4="https://artwalk.vteximg.com.br/arquivos/ids/216529-380-380/Tenis-Jordan-Mars-270-PSG-Masculino-Vermelho.jpg?v=637039954221230000"
           id="4"
          /> </Route>
        
          <Route path="/contatos"> <Contatos /> </Route>
          <Route path="/principal"> <Main /> </Route>

        </Switch>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
