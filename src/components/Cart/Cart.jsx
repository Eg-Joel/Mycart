import React from 'react'
import './Cart.css'
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

function Cart({ cart, changeQuantity, removeItem ,getCartTotal,setViewItems}) {



  return (
    <div style={{ background: "#7ea4f0" }}>

      <div className='mainCont'>

        <div className="header">

          <span style={{ marginLeft: "2rem", marginRight: "7rem", fontWeight: 'bold' }}>Your Cart</span>
          <span style={{ marginRight: "2rem", }}>{cart.length} items</span>
          {cart.length === 0 ? '': <span style={{ marginRight: "2rem", }} onClick={()=>setViewItems(true)}>view items</span>}
          
        </div>

        <div className="productTable">
          {cart.map((product, index) => (
            <div key={index} className="productRow">
              <div className="productName">{product.title}</div>
              <div className="price">{product.price}</div>
              <input type="number" className="quantityInput"value={product.quantity} onChange={(e) => changeQuantity(product.id, e.target.value)} />
              <Stack direction="row" spacing={1}>

                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" width={30} alt="" onClick={() => removeItem(product.id)}  />

              </Stack>
            </div>
          ))}
        </div>
        <hr style={{ 'color': 'black' }} />
        <div>
          <span style={{ fontWeight: "bold" }}>Total:{getCartTotal()}</span>
        </div>
      </div>
    </div>
  )
}

export default Cart