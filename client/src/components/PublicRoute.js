import React from "react";
import { Route, Redirect } from "react-router-dom";

function PublicRoute(Component, restricted, ...rest) {
  const isLogged = localStorage.getItem("isLogged");
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged && restricted ? (
          <Redirect to="/trivia" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default PublicRoute;
