import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Stack from '@mui/material/Stack';
import './MainProducts.css'




function MainProducts({products,addToCart}) {
  const [disabledButtons, setDisabledButtons] = useState([]);
  const handleAddToCart = (product) => {
    addToCart(product);
    setDisabledButtons([...disabledButtons, product.id]);
  };

  return (
   
        <div className='productList'>

       
    {
      products.map((product,index)=>{
        return(
          <Card sx={{ maxWidth: 170,maxHeight:250,minHeight:250, border: '1px solid', borderColor: '#3467cb',margin:1 }} key={index}>
      <CardActionArea>
        <CardMedia
        className='images'
          component="img"
          style={{ objectFit: 'contain', height:90 ,width:150,marginLeft:15,marginTop:5}}
          image={product.image}
          alt="no image"
        />
        <CardContent>
          
          <Typography variant="body2" color="text.secondary" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {product.title}
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <hr style={{'color':'black'}}/>
      <CardActions >
        
      <Stack direction="row" spacing={2} alignItems="center">
      <Typography sx={{ mb: 1.5 ,marginLeft: 'auto' }} color="text.secondary">
          {product.price}
        </Typography>
      <Button variant="contained" href="#contained-buttons"onClick={() => handleAddToCart(product)}     disabled={disabledButtons.includes(product.id)} >
        add
      </Button>
    </Stack>
      </CardActions>
   
    </Card>
        )

      })
    }
     
    

  </div>

     

     
   
    
  )
}

export default MainProducts

