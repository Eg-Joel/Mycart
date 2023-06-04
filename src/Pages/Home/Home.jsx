import React, { useEffect, useState } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import MainProducts from '../../components/MainProducts/MainProducts'
import Cart from '../../components/Cart/Cart'
import axios from 'axios'
import CartItems from '../CartItems/CartItems'




function Home() {
  
  
  const [products,setProducts] = useState([])
  const [category, setCategory] = useState([])
  const [cart, setCart] = useState([]);
  const [viewItems, setViewItems] = useState(false);
 

  useEffect(() => {
   

    const getProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products")
       
       
        setProducts(response.data);
        setCategory(response.data)
        
      } catch (error) {
        console.error(error);
      }
    };

    getProducts();
 
   
  }, []);

  const productCategory = (category)=>{
    const NewCategroy = products.filter((product)=>product.category === category);
    setCategory(NewCategroy)
  }
  const addToCart = (product) => {
    const itemIndex = cart.findIndex(item => item.id === product.id);
    if (itemIndex === -1) {
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += 1;
      setCart(updatedCart);
    }
  }
  const removeItem = (productId) => {
 
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  }
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  const changeQuantity = (productId, quantity) => {
    const itemIndex = cart.findIndex(item => item.id === productId);
    const updatedCart = [...cart];
    updatedCart[itemIndex].quantity = quantity;
    setCart(updatedCart);
  }

  return (
    <div className='home'>

   
    <Navbar/>
    <div className='MainComponent'>
      <div className='SubComponent'>
        <Sidebar products={products}productCategory={productCategory} setCategory={setCategory}/>
        {viewItems ? <CartItems cart={cart}/>: <MainProducts products={category} addToCart={addToCart} />}
        <Cart cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} getCartTotal={getCartTotal} setViewItems={setViewItems}/>
      </div>
    </div>
    </div>
  )
}

export default Home