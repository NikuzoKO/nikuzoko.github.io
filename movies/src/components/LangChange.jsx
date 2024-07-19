import { useParams, Navigate } from "react-router-dom";

function LangChange() {
    const { id } = useParams();

    return id && <Navigate replace to={`/movie/${id}`} />;
}

export default LangChange;
