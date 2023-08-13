import { Navigate } from "react-router";

const Index = ({ user, children }: any) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const User = ({ user, children }: any) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const Produto = ({ user, children }: any) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default { Index, User, Produto }