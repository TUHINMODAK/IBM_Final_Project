import { useParams, useNavigate } from "react-router-dom";
import Add from "../../AddMovie/Add";
import AdminDashboard from "../../AdminDashboard";

export default function DashboardWrapper() {
  const params = useParams();
  const navigate = useNavigate();

  return <AdminDashboard params={params} navigate={navigate} />;
}