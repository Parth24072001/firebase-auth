import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

const withoutAuthentication = (ComposedComponent: () => JSX.Element) => {
  const Component: React.FC = (props) => {
    const { currentUser } = useAuth();

    if (currentUser) {
      return <Navigate to="/dashboard" />;
    }
    return <ComposedComponent {...props} />;
  };
  return <Component />;
};

export default withoutAuthentication;
