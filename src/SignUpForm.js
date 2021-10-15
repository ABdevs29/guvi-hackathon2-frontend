import { Alert, Button, Snackbar, TextField } from "@mui/material";
import React, { useState } from "react";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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

  function handleSignUp() {
    fetch("https://guvi-hackathon2-abhishek.herokuapp.com/admins/signup", {
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
      .then((json) => console.log(json));
    handleClick();
    setUsername("");
    setPassword("");
  }

  return (
    <div className="signup-form">
      <h2>Admin Sign Up Form</h2>
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
        startIcon={<AssignmentTurnedInIcon />}
        onClick={() => {
          if (username != "" && password != "") {
            handleSignUp();
          }
        }}
      >
        Sign Up
      </Button>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Sign Up Successful!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default SignUpForm;
