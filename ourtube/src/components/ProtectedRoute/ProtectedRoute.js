import React, { Children } from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {() =>
        props.loggedIn === 1 ? props.children : <Redirect to="/signin" />
      }
    </Route>
  );
};

export default ProtectedRoute; 