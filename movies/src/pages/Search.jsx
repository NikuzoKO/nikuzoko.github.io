import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Movie from "../components/Movie";
import InfiniteScroll from "react-infinite-scroll-component";

function Search() {
    const [movies, setMovies] = useState(null);
    const [page, setPage] = useState(null);
    const [searchString, setSearchString] = useState("");

    useEffect(() => {
        const getMovies = async () => {
            const response = await axios({
                url: `https://api.themoviedb.org/3/search/movie`,
                method: "GET",
                params: {
                    query: searchString,
                    include_adult: false,
                    language: "en-US",
                    page: page,
                    api_key: import.meta.env.VITE_TMDB_API_KEY,
                },
            });
            page > 1
                ? setMovies([...movies, ...response.data.results])
                : setMovies(response.data.results);
        };
        getMovies();
    }, [page, searchString]);

    const changeValues = (searchStringValue) => {
        setSearchString(searchStringValue);
        setPage(1);
    };

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <NavLink to="/" className="text-decoration-none">
                        <Navbar.Brand>Hackflix</Navbar.Brand>
                    </NavLink>
                    <Form className="w-100">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            value={searchString}
                            onChange={(event) =>
                                changeValues(event.target.value)
                            }
                            className="mr-sm-2"
                            autoFocus
                        />
                    </Form>
                </Container>
            </Navbar>
            {movies && (
                <Container>
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
                                        <Movie id={movie.id} key={movie.id} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </InfiniteScroll>
                </Container>
            )}
        </>
    );
}

export default Search;
