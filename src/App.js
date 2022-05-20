import { Routes } from 'react-router-dom';
import './App.css';
import {Route} from "react-router-dom"
import {ProductDetails} from "./component/ProductDetails"
import {Products} from "./component/Products"
import { Navbar } from "./component/Navbar"
import {Home} from "./component/Home"
import {Cart} from "./component/Cart"

import {NotFound} from "./component/NotFound"
import Out from './component/Out';




function App() {
  return (
    <>
    <Navbar/>
    <Routes>

<Route exact path="/" element={<Home/>}/>
<Route exact path="/products" element={<Products/>}/>
<Route exact path="/productsDetails/:id" element={<ProductDetails/>}/>
<Route exact path="/cart" element={<Cart/>}/>
<Route exact path='/checkout' element = {<Out/>}/>
<Route exact path="/*" element={<NotFound/>}/>

  
    </Routes>
    
    </>
  );
}

export default App;
