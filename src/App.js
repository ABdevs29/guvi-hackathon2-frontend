import "./App.css";
import CardList from "./CardList";
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Cart from "./Cart";
import Contact from "./Contact";



// const INITIAL_PRODUCTS = [
//   {
//     productId: 1,
//     name: "Canon 5D Mark IV Body",
//     pricePerHour: 100,
//     type: "Canon",
//     category: "Camera",
//     pic: "https://www.bhphotovideo.com/images/images2000x2000/canon_eos_5d_mark_iv_1274705.jpg",
//   },
//   {
//     productId: 2,
//     name: "Nikon D750 Body",
//     pricePerHour: 75,
//     type: "Nikon",
//     category: "Camera",
//     pic: "https://www.bhphotovideo.com/images/images2500x2500/nikon_d750_dslr_camera_body_1082599.jpg",
//   },
//   {
//     productId: 3,
//     name: "Sony A7R Mark IV Body",
//     pricePerHour: 125,
//     type: "Sony",
//     category: "Camera",
//     pic: "https://www.bhphotovideo.com/images/images2500x2500/sony_ilce7rm4_b_alpha_a7r_iv_mirrorless_1494679.jpg",
//   },
//   {
//     productId: 4,
//     name: "Sony FE 24-70MM F/2.8GM Lens",
//     pricePerHour: 60,
//     type: "Sony",
//     category: "Lens",
//     pic: "https://www.bhphotovideo.com/images/images2500x2500/sony_sel2470gm_fe_24_70mm_f_2_8_gm_1222774.jpg",
//   },
//   {
//     productId: 5,
//     name: "Canon EF 70-200MM F/2.8L IS II USM Lens",
//     pricePerHour: 45,
//     type: "Canon",
//     category: "Lens",
//     pic: "https://www.bhphotovideo.com/images/images2000x2000/canon_3044c002_ef_70_200mm_f_2_8l_is_1414599.jpg",
//   },
//   {
//     productId: 6,
//     name: "Nikon AF-S NIKKOR 50MM F/1.8G Lens",
//     pricePerHour: 45,
//     type: "Nikon",
//     category: "Lens",
//     pic: "https://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-fTYlSZPBjlMhlFa1VHARsAMjUXbUr5JX4ZJ8Y32HQTZsKizrNE58ePuoiXQo09jc=/Views/2199_AF-S-NIKKOR-50mm-f18G_front.png",
//   },
//   {
//     productId: 7,
//     name: "Continous Video Light",
//     pricePerHour: 20,
//     type: "accessory",
//     category: "accessory",
//     pic: "https://m.media-amazon.com/images/I/71zNZfvXhwL._AC_SL1500_.jpg",
//   },
//   {
//     productId: 8,
//     name: "E-Image Tripod kit",
//     pricePerHour: 40,
//     type: "accessory",
//     category: "accessory",
//     pic: "https://m.media-amazon.com/images/I/51NlCVcr9vL._SY355_.jpg",
//   },
//   {
//     productId: 9,
//     name: "Sandisk Extreme Pro V30 64GB Memory Card",
//     pricePerHour: 5,
//     type: "accessory",
//     category: "accessory",
//     pic: "https://m.media-amazon.com/images/I/71HmWV-p9ZL._SY450_.jpg",
//   },
// ];


function App() {  
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    fetch('https://guvi-hackathon2-abhishek.herokuapp.com/products')
    .then(data => data.json())
    .then(response => setProducts(response))
  }, []);

  function handleAddToCart(id) {
    const tempCart = cart;
    const newItem = products.find((el) => el.productId == id);
    setCart([...tempCart, newItem]);
    setPrice(price + newItem.pricePerHour);
  }
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
