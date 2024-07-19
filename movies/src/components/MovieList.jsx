import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import InfiniteScroll from "react-infinite-scroll-component";

function MovieList({ rating, page, setPage }) {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        const getMovies = async () => {
            const response = await axios({
                url: `https://api.themoviedb.org/3/discover/movie`,
                method: "GET",
                params: {
                    include_adult: false,
                    include_video: false,
                    language: "en-US",
                    page: page,
                    sort_by: "popularity.desc",
                    "vote_average.gte": rating,
                    "vote_count.gte": 1000,
                    api_key: import.meta.env.VITE_TMDB_API_KEY,
                },
            });
            page > 1
                ? setMovies([...movies, ...response.data.results])
                : setMovies(response.data.results);
        };
        getMovies();
    }, [page, rating]);

    return (
        movies && (
            <InfiniteScroll
                dataLength={movies.length}
                next={() => setPage(page + 1)}
                hasMore={true}
                className="d-flex justify-content-center flex-wrap overflow-visible"
            >
                <div className="row g-0">
                    {movies.map((movie) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="d-flex justify-content-center m-2">
                                <Movie
                                    id={movie.id}
                                    rating={rating}
                                    key={movie.id}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
        )
    );
}

export default MovieList;
