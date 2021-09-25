import React, { Children } from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRouteSign = ({ component: Component, ...props }) => {
  console.log(props.loggedIn);
  return (
    <Route>
      {() =>
        props.loggedIn === 1 ? <Redirect to="/"/> : props.children
      }
    </Route>
  );
};

export default ProtectedRouteSign; 