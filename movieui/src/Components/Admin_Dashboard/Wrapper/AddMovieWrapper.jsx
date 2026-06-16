import { useParams, useNavigate } from "react-router-dom";
import Add from "../AddMovie/Add";

export default function AddMovieWrapper() {
  const params = useParams();
  const navigate = useNavigate();

  return <Add params={params} navigate={navigate} />;
}