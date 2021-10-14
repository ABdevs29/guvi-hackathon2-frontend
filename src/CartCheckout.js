import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { useHistory } from "react-router";

function CartCheckout({ price }) {
  const history = useHistory();

  // Route change after checkout button click
  function routeChange() {
    history.push("/checkout");
  }

  return (
    <Card style={{ maxHeight: "80%", margin: "2rem", opacity: "0.9" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Total Billing Amount = ₹ {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" variant="contained" onClick={() => routeChange()}>
          Checkout & Pay
        </Button>
      </CardActions>
    </Card>
  );
}

export default CartCheckout;
