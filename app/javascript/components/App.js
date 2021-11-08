import React, { Component } from "react";
import ApartmentIndex from "./pages/AppartmentIndex";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ApartmentShow from "./pages/AppartmentShow";
import Header from "./components/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <h1>Hello World</h1>
        <Router>
          <Header {...this.props} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/index" element={<ApartmentIndex />} />
            <Route path="/show" element={<ApartmentShow />} />
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}
export default App;
