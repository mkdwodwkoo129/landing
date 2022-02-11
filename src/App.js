import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
      </div>
    );
  }
}

export default App;
