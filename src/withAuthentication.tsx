import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

const withAuthentication = (ComposedComponent: () => JSX.Element) => {
  const Component: React.FC = (props) => {
    const { currentUser } = useAuth();
    if (currentUser) {
      return <ComposedComponent {...props} />;
    }
    return <Navigate to="/login" />;
  };
  return <Component />;
};

export default withAuthentication;
