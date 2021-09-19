import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ Component, ...rest }) {
  const isLogged = localStorage.getItem("isLogged");
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default PrivateRoute;
