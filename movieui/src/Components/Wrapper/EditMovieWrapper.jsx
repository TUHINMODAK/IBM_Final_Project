import { useParams } from "react-router-dom";
import { Edit } from "../EditMovie/Edit";

export default function EditMovieWrapper() {
  const params = useParams();

  return <Edit params={params} />;
}