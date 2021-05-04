import React, { useState, useEffect } from "react";
// import './App.css';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "./components/Table";
import API from "./utils/API";

export default function App() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    (async function () {
      const response = await API.getRandomEmployee();
      setUserData(response.data.results);
    })()
  }, [])
  return (
    <div>
      <Navbar />
      <div>Filter goes here</div>
      <div>
        <Table userData={userData} />
      </div>

      <Footer />
    </div>
  );
}

