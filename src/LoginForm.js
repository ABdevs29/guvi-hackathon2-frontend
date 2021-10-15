import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import { useHistory } from "react-router";

function LoginForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState("");
  const history = useHistory();

  function handleLogin() {
    setDisplay("Loading...");
    fetch("https://guvi-hackathon2-abhishek.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setToken(json.token);
        setUsername("");
        setPassword("");
        setDisplay("");
        if (json.message != "Invalid login credentials") {
          history.push("/addproduct");
        } else {
        setDisplay("Login failed. Please check your credentials");
        }
      })
      .catch((err) => {
        setDisplay("Login failed. Please check your credentials");
        console.log(err);
      });
  }

  return (
    <div className="signup-form">
      <h2>Admin Login Form</h2>
      <div className="signup-inputs">
        <TextField
          required
          id="outlined-required"
          label="Email"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<LoginIcon />}
        onClick={() => {
          if (username != "" && password != "") {
            handleLogin();
          }
        }}
      >
        Login
      </Button>
      <h3>{display}</h3>
    </div>
  );
}

export default LoginForm;
