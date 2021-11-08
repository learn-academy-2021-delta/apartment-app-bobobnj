import React, { Component } from "react";
import casitas from "../assets/casitas.png";

class Home extends Component {
  render() {
    return (
      <>
        <img src={casitas} 
        alt="series of houses" 
        className="casitas" />
      </>
    );
  }
}
export default Home;
