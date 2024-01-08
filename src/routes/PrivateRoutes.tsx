import { FC } from "react";
import {
  Route,
  Redirect,
  RouteComponentProps,
  useLocation,
} from "react-router-dom";
import { ASYNC_STORAGE_KEYS } from "../types/enums";

// interface PrivateRoutesProps extends RouteComponentProps {
//   isAuthenticated: boolean;
//   component: React.ElementType;
// }

interface PrivateRoutesProps {
  path: string;
  isAuthenticated: boolean;
  component: React.ElementType;
}

export const PrivateRoutes: FC<PrivateRoutesProps> = ({
  path,
  isAuthenticated,
  component: Component,
}) => {
  const location = useLocation();
  localStorage.setItem(ASYNC_STORAGE_KEYS.PATH_NAME, location.pathname);

  return (
    <Route
      path={path}
      component={(props: RouteComponentProps) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
