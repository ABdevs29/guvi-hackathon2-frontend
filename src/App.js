import "./App.css";
import CardList from "./CardList";
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Cart from "./Cart";
import Contact from "./Contact";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  // Fetch products from Mongo DB using Backend
  useEffect(() => {
    fetch("https://guvi-hackathon2-abhishek.herokuapp.com/products")
      .then((data) => data.json())
      .then((response) => setProducts(response));
  }, []);

  //Handle Add to Cart
  function handleAddToCart(id) {
    const tempCart = cart;
    const newItem = products.find((el) => el.productId == id);
    setCart([...tempCart, newItem]);
    setPrice(price + newItem.pricePerHour);
  }

  //Handle Delete from cart
  function handleDeleteFromCart(id) {
    const newCart = cart.filter((item) => item.productId !== id);
    const newItem = products.find((el) => el.productId == id);
    console.log(newCart, id);
    setCart([...newCart]);
    setPrice(price - newItem.pricePerHour);
  }

  return (
    <div className="App">
      <Navbar cart={cart} />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/store">
          <CardList
            products={products}
            cart={cart}
            handleAddToCart={handleAddToCart}
            handleDeleteFromCart={handleDeleteFromCart}
          />
        </Route>
        <Route exact path="/cart">
          <Cart
            cart={cart}
            price={price}
            setPrice={setPrice}
            handleDeleteFromCart={handleDeleteFromCart}
          />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/checkout">
          <h1>Payment done!</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
