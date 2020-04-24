import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import GameOver from "./pages/GameOver";
import MyPeople from "./pages/MyPeople";
import Account from "./pages/Account";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper/Wrapper";
import "./App.css";

function App() {

  const handleFormSubmit = event => {
    event.preventDefault();
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/gameover" component={GameOver} />
          <Route exact path="/mypeople" component={MyPeople} />
          <Route exact path="/account" component={Account} handleFormSubmit={handleFormSubmit}/>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
