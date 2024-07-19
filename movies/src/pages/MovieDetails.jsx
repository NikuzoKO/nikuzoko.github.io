import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieDetails() {
    const [movie, setMovie] = useState(null);
    const [images, setImages] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const getMovie = async () => {
            const response = await axios({
                url: `https://api.themoviedb.org/3/movie/${id}`,
                method: "GET",
                params: {
                    api_key: import.meta.env.VITE_TMDB_API_KEY,
                },
            });
            setMovie(response.data);
        };
        getMovie();
    }, [id]);

    useEffect(() => {
        const getImages = async () => {
            const response = await axios({
                url: `https://api.themoviedb.org/3/movie/${movie.id}/images`,
                method: "GET",
                params: {
                    language: "null",
                    api_key: import.meta.env.VITE_TMDB_API_KEY,
                },
            });
            setImages(response.data);
        };
        getImages();
    }, [movie]);

    useEffect(() => {
        const getTrailer = async () => {
            const response = await axios({
                url: `https://api.themoviedb.org/3/movie/${movie.id}/videos`,
                method: "GET",
                params: {
                    language: "en-US",
                    api_key: import.meta.env.VITE_TMDB_API_KEY,
                },
            });
            setTrailer(
                response.data.results.find((video) => video.type === "Trailer")
            );
        };
        getTrailer();
    }, [movie]);

    return (
        movie && (
            <>
                <div id="hero">
                    <div className="w-100 h-100 blur d-flex flex-column align-items-center justify-content-center">
                        {images && (
                            <img
                                src={`http://image.tmdb.org/t/p/original${images.backdrops[0].file_path}`}
                                alt={movie.title}
                                className="img-hero"
                            />
                        )}
                        <h1>{movie.title}</h1>
                        <p className="w-50 text-center"></p>
                    </div>
                </div>
                <div className="container py-5">
                    <p>{movie.overview}</p>
                    {trailer && (
                        <div className="video-responsive rounded my-5">
                            <iframe
                                width="1920"
                                height="1080"
                                src={`https://www.youtube.com/embed/${trailer.key}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                            />
                        </div>
                    )}
                    {images && (
                        <div className="row g-0">
                            {images.backdrops.map((image) => {
                                return (
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                        <img
                                            src={`http://image.tmdb.org/t/p/original${image.file_path}`}
                                            alt={movie.title}
                                            className="img-fluid w-100 object-fit-cover"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </>
        )
    );
}

export default MovieDetails;
