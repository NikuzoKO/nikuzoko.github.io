import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Movie({ id }) {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const getMovie = async () => {
            const response = await axios({
                url: `https://api.themoviedb.org/3/movie/${id}
                }`,
                method: "GET",
                params: {
                    api_key: import.meta.env.VITE_TMDB_API_KEY,
                },
            });
            setMovie(response.data);
        };
        getMovie();
    }, []);

    return (
        movie && (
            <Link to={`/movie/${movie.id}`}>
                <img
                    src={`http://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={`Afiche promocional de ${movie.title} ${movie.release_date}`}
                    className="rounded img-fluid object-fit-cover w-100 moviePoster"
                />
            </Link>
        )
    );
}

export default Movie;
