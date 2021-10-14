import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProductCard({product, index, handleAddToCart, handleDeleteFromCart, handleClick}) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  return (
    <Card sx={{ maxWidth: 250 }} style={{opacity:"0.9", borderRadius:"20px"}}>
      <CardMedia
        component="img"
        height="140"
        image={product.pic}
        alt="product-pic"
        style={{objectFit:"contain"}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        ₹ {product.pricePerHour} /Hour
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" color="secondary" onClick={() => {handleDeleteFromCart(index); setIsAddedToCart(false)}}>Delete</Button>
        <Button size="small" disabled={isAddedToCart} variant="outlined" color="secondary" onClick={() => {handleAddToCart(index); setIsAddedToCart(true); handleClick();}}>Add to cart</Button>
      </CardActions>
    </Card>
  );
}
