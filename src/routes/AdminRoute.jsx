import { Navigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import PropTypes from 'prop-types';

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  if (loading || isAdminLoading)
    return <progress className="progress w-56"></progress>;
  if (user && isAdmin) return children;
  return <Navigate to="/"></Navigate>;
};

export default AdminRoute;
AdminRoute.propTypes = {
    children: PropTypes.node
  }
