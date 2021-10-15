import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import React, { useState } from "react";
import ProductCard from "./Card";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function CardList({
  products,
  handleAddToCart,
  handleDeleteFromCart,
  search,
  setSearch,
}) {
  const [open, setOpen] = useState(false);

  //Handle button click for showing success snackbar/toastr
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
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        style={{ textAlign: "center", margin: "1rem" }}
      >
        <TextField
          id="outlined-basic"
          label="Search Products"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>
      <Box style={{ textAlign: "center", margin: "1rem" }}>
        <ButtonGroup
          variant="outlined"
          color="secondary"
          aria-label="outlined secondary button group"
        >
          <Button onClick={() => setSearch("")}>All</Button>
          <Button onClick={() => setSearch("camera")}>Camera</Button>
          <Button onClick={() => setSearch("lens")}>Lens</Button>
          <Button onClick={() => setSearch("accessory")}>Accessories</Button>
        </ButtonGroup>
      </Box>
      <div className="card-container">
        {search == ""
          ? products.map((product, index) => {
              return (
                <ProductCard
                  product={product}
                  key={index}
                  index={product.productId}
                  handleAddToCart={handleAddToCart}
                  handleDeleteFromCart={handleDeleteFromCart}
                  handleClick={handleClick}
                />
              );
            })
          : products
              .filter((product) => {
                if (
                  product.name.toLowerCase().includes(search.toLowerCase()) ==
                    true ||
                  product.type.toLowerCase().includes(search.toLowerCase()) ==
                    true ||
                  product.category
                    .toLowerCase()
                    .includes(search.toLowerCase()) == true
                ) {
                  return product;
                }
              })
              .map((product, index) => {
                return (
                  <ProductCard
                    product={product}
                    handleAddToCart={handleAddToCart}
                    handleDeleteFromCart={handleDeleteFromCart}
                    key={index}
                    index={product.productId}
                  />
                );
              })}
      </div>
      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Product added to Cart
        </Alert>
      </Snackbar>
    </>
  );
}

export default CardList;
