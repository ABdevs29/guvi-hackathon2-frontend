import { Button, TextField, Typography } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import React, { useState } from "react";

function Contact() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleClick = () => {
    setOpen(true);
    console.log(name, email, msg);
    setName("");
    setEmail("");
    setMsg("");
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <div className="contact">
      <h2>About the App:</h2>
      <p>
        This app was built to help customers hire/rent photograpy equipment as
        per their needs.{" "}
        <span>
          <b>Have fun renting!</b>
        </span>
      </p>
      <p>
        App developed by Mr. Abhishek Sateesh Gaonkar aka ABdevs29, an aspiring
        Full Stack developer.
      </p>
      <h4>Tech Stack:</h4>
      <ul>
        <li>React JS</li>
        <li>Material UI</li>
        <li>MongoDB</li>
        <li>Node JS</li>
      </ul>
      <h4>Socials</h4>
      <ul>
        <li>
          <a
            href="https://twitter.com/ABdevs29"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/abdevs29/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            LinkedIn
          </a>
        </li>
      </ul>
      <div className="contact-form">
        <div>
          <h2>Contact Us</h2>
          <p className="contact-para">
            Feel free to walk into our store or contact us via a phone
            call/e-mail. We’ll be happy to connect and do everything possible to
            create a fully-personalized experience for you.
          </p>
        </div>

        <div className="contact-area">
          <TextField
            required
            id="filled-basic"
            label="Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <TextField
            required
            id="filled-basic"
            label="Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <TextField
            required
            id="filled-multiline-static"
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            style={{ height: "100px" }}
            onChange={(e) => setMsg(e.target.value)}
            value={msg}
          />
        </div>
      </div>
      <div className="submit-form">
        <Button
          variant="contained"
          onClick={() => {
            if (name != "" && email != "" && msg != "") {
              handleClick();
            } else {
              alert(
                "One or more fields have an error. Please check and try again"
              );
            }
          }}
        >
          Submit Now
        </Button>
      </div>
      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Message Sent!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Contact;
