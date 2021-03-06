import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function LandingPageGrid({search, setSearch}) {
  const history = useHistory();
  return (
    <Grid container spacing={2} justifyContent="space-around">
      <Grid item sm={5} xs={10} md={3} >
      <Link to="/store" style={{ textDecoration: "none", color: "black", cursor:"pointer" }}>
        <Item className="grid-item" style={{ backgroundColor: "#F6F6F6" }} onClick={() => setSearch("camera")} >
          {" "}
          <img
            className="service-img"
            src="http://i1.adis.ws/i/canon/eos-r6-rf24-105mm-f4_7.1_is_stm_front-on_square_6412568cc0e7484b96bd55e43069a56c"
            alt="cam"
          />
          <span>Camera Rentals</span>
        </Item>
        </Link>
      </Grid>
      <Grid item sm={5} xs={10} md={3}>
      <Link to="/store" style={{ textDecoration: "none", color: "black", cursor:"pointer" }}>
        <Item className="grid-item" style={{ backgroundColor: "#F6F6F6" }} onClick={() => setSearch("lens")}>
          {" "}
          <img
            className="service-img"
            src="https://cdn.pixabay.com/photo/2013/07/13/11/41/lens-158471_960_720.png"
            alt="cam lens"
          />
          <span>Lens Rentals</span>
        </Item>
        </Link>
      </Grid>
      <Grid item sm={5} xs={10} md={3}>
      <Link to="/store" style={{ textDecoration: "none", color: "black", cursor:"pointer" }}>
        <Item className="grid-item" style={{ backgroundColor: "#F6F6F6" }} onClick={() => setSearch("accessory")}>
          {" "}
          <img
            className="service-img"
            src="https://i.pinimg.com/originals/80/d9/9e/80d99efaaad4f84ec72869fad713d821.jpg"
            alt="accessry"
          />
          <span>Camera Accessories Rentals</span>
        </Item>
        </Link>
      </Grid>
    </Grid>
  );
}

export default LandingPageGrid;
