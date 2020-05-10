import React, { createContext, useReducer, useContext } from "react";
const UserContext = createContext();
const { Provider } = UserContext;


const reducer = (state, action) => {

    switch (action.type) {
        case "logged in":
            return {
                ...state,
                status: "logged in",
                username: action.username
            }
        case "logged out":
            return {
                ...state,
                status: "logged out",
                username: ""
            }
    }

}
const UserProvider = ({ value = 0, ...props }) => {
    const [state, dispatch] = useReducer(
        reducer, {
            status: "logged out", //default value
            username: ""

        });
    return <Provider value={[state, dispatch]} {...props} />;
};
const useUserContext = () => {
    return useContext(UserContext);
};


export { UserProvider, useUserContext };