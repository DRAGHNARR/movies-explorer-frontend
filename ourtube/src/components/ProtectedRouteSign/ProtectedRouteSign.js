import React, { Children } from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRouteSign = ({ component: Component, ...props }) => {
  return (
    <Route>
      {() =>
        props.loggedIn === 2 ? props.children : <Redirect to="/" />
      }
    </Route>
  );
};

export default ProtectedRouteSign; 