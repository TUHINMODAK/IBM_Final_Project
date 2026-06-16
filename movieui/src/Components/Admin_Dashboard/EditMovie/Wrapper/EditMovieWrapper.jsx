import { useParams, useNavigate } from "react-router-dom";
import { Edit } from "../Edit";

export default function EditMovieWrapper() {
  const params = useParams();
  const navigate = useNavigate();

  return <Edit params={params} navigate={navigate} />;
}