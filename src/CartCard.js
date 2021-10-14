import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";

function CartCard({ product, price, setPrice, index, handleDeleteFromCart, handleClick }) {
  const [count, setCount] = useState(0);
  // const [startTime, setStartTime] = useState("");
  // const [endTime, setEndTime] = useState("");
  // const [hours, setHours] = useState(1);



  return (
    <Card
      sx={{ maxWidth: 350 }}
      style={{ opacity: "0.9", borderRadius: "20px" }}
    >
      <CardMedia
        component="img"
        height="140"
        image={product.pic}
        alt="product-pic"
        style={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ₹ {product.pricePerHour} /Hour
        </Typography>
      </CardContent>
      {/* <CardActions>
        <label htmlFor="startTime">Start Time: </label>
        <input
          type="datetime-local"
          name="startTime"
          id="startTime"
          onChange={(e) => {
            setStartTime(e.target.value);
          }}
        />
      </CardActions>
      <CardActions>
        <label htmlFor="endTime">End Time: </label>
        <input
          type="datetime-local"
          name="endTime"
          id="endTime"
          onChange={(e) => {
            setEndTime(e.target.value);
            setHours(Math.floor((Date.parse(endTime) - Date.parse(startTime))/ 1000 / 60 / 60));
          }}
        />
      </CardActions>
      <CardActions>
        <div>Total Hours: {hours}</div>
      </CardActions> */}
      <CardActions>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button
            onClick={() => {
              if (count > 0) {
                setCount(count - 1);
                setPrice(price - (product.pricePerHour));
                // setIsAdded(false);
              }
            }}
          >
            -
          </Button>
          <Button>{count + 1}</Button>
          <Button
            onClick={() => {
              if (count < 10) {
                setCount(count + 1);
                setPrice(price + (product.pricePerHour));
              }
            }}
          >
            ﹢
          </Button>
          <Button variant="contained"
          onClick={() => {
            handleDeleteFromCart(index);
            handleClick();
          }}
        >
          Delete Item
        </Button>
        </ButtonGroup>

      </CardActions>
    </Card>
  );
}

export default CartCard;
