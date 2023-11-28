import logo from './logo.svg';
import './App.css';
import { Routes, Route} from "react-router-dom"
import { Cart } from './components/Cart';
import { ProductsPage } from './components/ProductsPage';
import { Home } from './components/Home';
import { Rating } from './components/Rating';
// import Rating from './src/components/Rating';
// import  {CreatePriceCard}  from './components/CreatePriceCard';

function App() {


  return (

    
    <div className="App"> 
        <Routes>   
        <Route path="/" element={<ProductsPage/>}/> 
          <Route path="/home" element={<Home />} />             
          <Route path="/cart" element={<Cart/>}/>
       {<Route path="/Rating" element={<Rating/>}/> }
        </Routes>
    </div>

  );
}

export default App;