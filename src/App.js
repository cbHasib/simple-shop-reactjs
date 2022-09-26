import { useState } from 'react';
import './App.css';
import Error from './components/Error/Error';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import OrderReview from './components/OrderReview/OrderReview';

import Shop from './components/Shop/Shop';
import SignUp from './components/SignUp/SignUp';


function App() {
  const [cart, setCart] = useState([]);
  const [menu, setMenu] = useState('Home');
  return (
    <div className="App">
      <Header setMenu={setMenu}></Header>
      {
        menu==='Home' && <Home setMenu={setMenu}></Home>
      }
      {
        menu==='Shop' && <Shop cart={cart} setCart={setCart} setMenu={setMenu}></Shop>
      }
      
      {
        menu==='OrderReview' && <OrderReview cart={cart} setCart={setCart}></OrderReview>
      }
      {
        menu==='Login' && <Login></Login>
      }
      {
        menu==='SignUp' && <SignUp></SignUp>
      }
      {
        menu==='OrderReview' && <OrderReview cart={cart} setCart={setCart}></OrderReview>
      }

      {
        menu==='ManageInventory' && <Error></Error>
      }
      {
        menu==='Order' && <Error></Error>
      }
      
    </div>
  );
}

export default App;
