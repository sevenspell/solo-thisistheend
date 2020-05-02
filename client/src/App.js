import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import GameOver from "./pages/GameOver";
import MyPeople from "./pages/MyPeople";
import Account from "./pages/Account";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper/Wrapper";
import "./App.css";
import UserLoginContext from "./utils/userLoginContext";

function App() {

  const [user, setUser] = useState(null);

  const handleFormSubmit = event => {
    event.preventDefault();
  };

  return (
    <UserLoginContext.Provider value={{user, setUser}} >
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/gameover" component={GameOver} />
          <Route exact path="/mypeople" component={MyPeople} />
          <Route exact path="/myaccount" component={Account} handleFormSubmit={handleFormSubmit}/>
          <Route exact path="/signup" component={Signup} handleFormSubmit={handleFormSubmit}/>
        </Wrapper>
        <Footer />
      </div>
    </Router>
    </UserLoginContext.Provider>
  );
}

export default App;
