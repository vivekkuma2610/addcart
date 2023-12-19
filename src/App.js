import './App.css';
import NavComponent from './Components/NavComponent';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ShopCart from './Components/ShopCart';
import { useState } from 'react';

const data=[{
  id:1,
  product_image:"1.png",
  product_name:"Joker & Witch Nebula Women's Watch",
  actual_price:"835",
  price:"760"
},
{ 
id:2,
product_image:"2.png",
product_name:"LOUIS DEVIN LD-L144-BLU-CH Mesh Steel ",
actual_price:"800",
price:"750"
},
{
id:3,
product_image:"3.png",
product_name:"Fossil Analog Rose Gold Dial Women's Watch-BQ3181",
actual_price:"7197",
price:"7122"
},
{
id:4,
product_image:"4.png",
product_name:"Joker & Witch Octa Women's Watch",
actual_price:"1322",
price:"1247"
},
{ 
id:5,
product_image:"5.png",
product_name:"IMPERIOUS - THE ROYAL WAY Analogue Women's Watch ",
actual_price:"799",
price:"724"
},
{ 
id:6,
product_image:"6.png",
product_name:"LOUIS DEVIN Rose Gold Plated Mesh Chain ",
actual_price:"358",
price:"283"
},
{
id:7,
product_image:"7.png",
product_name:"TIMEX Analog Women's Watch",
actual_price:"2264",
price:"2189"
},
{ 
id:8,
product_image:"8.png",
product_name:"NIBOSI Women Watches Analogue Wrist Watches Watches",
actual_price:"2199",
price:"2124"
}]

function App() {
  const[cart,setCart]=useState([]);
  const handleClick=(data)=>{
    if(!cart.find((item)=>item.id===data.id)){
      
      setCart([...cart,data]);
    }
    else{
      const updatedCart=cart.filter((item)=>item.id!==data.id);
      setCart(updatedCart);
    }
    

  }
  return (
    <div className="App">
      <NavComponent cart={cart}/>
      <Header/>
      <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                 {data.map((d,i)=>(
                  < ShopCart keys={`${i}`} data={d} handleClick={handleClick} cart={cart}/>
                 ))}
                  
                </div>
            </div>
        </section>
    
      
    <Footer/>
    </div>
  );
}

export default App;
