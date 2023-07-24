import { Navigate } from "react-router";

const Index = ({ user, children }:any) => {
    if (!user) {
      return <Navigate to="/login" replace />;
    }
    return children;
};

export default{ Index}