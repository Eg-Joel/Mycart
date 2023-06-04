import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
function CartItems({cart}) {
  return (
   
<div className='productList'>

       
{
  cart.map((product,index)=>{
    return(
      <Card sx={{ maxWidth: 170,maxHeight:270,minHeight:270, border: '1px solid', borderColor: '#3467cb',margin:1 }} key={index}>
  <CardActionArea>
    <CardMedia
      component="img"
      style={{ objectFit: 'cover', height:90 ,width:150,marginLeft:25}}
      image={product.image}
      alt="green iguana"
    />
    <CardContent>
      
      <Typography variant="body2" color="text.secondary">
        {product.title}
        
      </Typography>
    </CardContent>
  </CardActionArea>
  <hr style={{'color':'black'}}/>
  <CardActions>
    
  
  <Typography sx={{ mb: 1.5 ,marginLeft: 'auto',marginRight:'auto' }} color="text.secondary">
      {product.price}
    </Typography>
  

  </CardActions>

</Card>
    )

  })
}
 


</div>

  )
}

export default CartItems