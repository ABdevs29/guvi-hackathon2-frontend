import React, { useState } from "react";
import CartCard from "./CartCard";
import CartCheckout from "./CartCheckout";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function Cart({ cart, price, setPrice, handleDeleteFromCart }) {
  const [open, setOpen] = useState(false);

  //Handle button click for showing error snackbar/toastr
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <div className="cart-container">
      <div className="cart-products">
        {cart.map((product, index) => {
          return (
            <CartCard
              product={product}
              price={price}
              setPrice={setPrice}
              index={product.productId}
              handleDeleteFromCart={handleDeleteFromCart}
              handleClick={handleClick}
            />
          );
        })}
      </div>
      <div className="cart-amount" price={price}>
        <CartCheckout price={price} />
      </div>
      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Product Deleted from Cart
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Cart;
