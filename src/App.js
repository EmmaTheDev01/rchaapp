import React from "react";
import NavBar from "./Components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./Components/Banner";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Cards />
      <Footer/>
    </>
  );
}

export default App;
