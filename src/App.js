import React, { useState, useEffect } from "react";
// import './App.css';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "./components/Table";
import API from "./utils/API";

export default function App() {

  return (
    <div>
      <Table />
      <Footer />
    </div>
  );
}

