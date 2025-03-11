import { FC } from "react";
import { Route, Redirect, RouteComponentProps } from "react-router-dom";

interface PublicRoutesProps {
  path: string;
  component: React.ElementType;
  isAuthenticated: boolean;
}

export const PublicRoutes: FC<PublicRoutesProps> = ({
  path,
  component: Component,
  isAuthenticated,
}) => (
  <Route
    exact
    path={path}
    component={(props: RouteComponentProps) =>
      !isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);
