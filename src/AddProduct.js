import React, { useEffect, useState } from "react";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import {
  Alert,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from "@mui/material";

function AddProduct({ token, setProducts }) {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [pic, setPic] = useState("");
  const [display, setDisplay] = useState("");

  const refreshProducts = () => {
    fetch("https://guvi-hackathon2-abhishek.herokuapp.com/products")
      .then((data) => data.json())
      .then((response) => setProducts(response));
  };

  const handleAddProduct = () => {
    setDisplay("");
    fetch("https://guvi-hackathon2-abhishek.herokuapp.com/products", {
      method: "POST",
      body: JSON.stringify({
        productId: productId,
        name: productName,
        pricePerHour: price,
        type: type,
        category: category,
        pic: pic,
      }),
      headers: {
        "Content-type": "application/json",
        "x-auth-token": token,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setProductId("");
        setProductName("");
        setType("");
        setPrice("");
        setCategory("");
        setPic("");
        console.log(json);
        if (json.err) {
          setDisplay(json.err);
        } else {
          setDisplay("Product Added Successfully!");
          refreshProducts();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="product-form">
      <h2>Add Products</h2>
      <div className="signup-inputs">
        <TextField
          required
          id="outlined-number"
          label="Product ID"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Product Name"
          autoComplete="off"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <TextField
          required
          id="outlined-number"
          label="Hourly rate"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            required
            id="demo-simple-select"
            label="Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <MenuItem value={"Sony"}>Sony</MenuItem>
            <MenuItem value={"Nikon"}>Nikon</MenuItem>
            <MenuItem value={"Canon"}>Canon</MenuItem>
            <MenuItem value={"accessory"}>Accessory</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            required
            id="demo-simple-select"
            label="Type"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value={"Camera"}>Camera</MenuItem>
            <MenuItem value={"Lens"}>Lens</MenuItem>
            <MenuItem value={"accessory"}>Accessory</MenuItem>
          </Select>
        </FormControl>
        <TextField
          required
          id="outlined-required"
          label="Product Pic URL"
          autoComplete="off"
          value={pic}
          onChange={(e) => setPic(e.target.value)}
        />
      </div>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<AddBusinessIcon />}
        onClick={() => {
          if (
            productId != "" &&
            productName != "" &&
            price != "" &&
            type != "" &&
            category != "" &&
            pic != ""
          ) {
            handleAddProduct();
          }
        }}
      >
        Add Product
      </Button>
      <h3>{display}</h3>
    </div>
  );
}

export default AddProduct;
