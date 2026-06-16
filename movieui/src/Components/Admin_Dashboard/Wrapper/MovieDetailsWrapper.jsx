import { useParams, useNavigate } from "react-router-dom";
import { Edit } from "../EditMovie/Edit";
import MovieDetails from "../../MovieDetails";

export default function MovieDatailsWrapper() {
  const params = useParams();
  const navigate = useNavigate();

  return <MovieDetails params={params} navigate={navigate} />;
}