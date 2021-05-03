import React from "react";
// import './App.css';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "./components/Table";


export default function App() {
  return (
    <div>
      <Navbar />
      <div>Filter goes here</div>
      <div>
        <Table />
      </div>

      <Footer />
    </div>
  );
}

