import React from "react";
import "./App.css";
import { Routes } from "./Routes";
import { withRouter } from "react-router-dom";

// components
import Navbar from "./components/Navigation/Navbar";
import Snackbar from "./components/Snackbar/CustomSnackbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
      <Snackbar />
    </div>
  );
}

export default withRouter(App);
