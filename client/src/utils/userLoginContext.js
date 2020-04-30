import React from "react";

const userLoginContext = React.createContext({
  loggedIn: false,
  loggedInUsername: null
});

export default userLoginContext;