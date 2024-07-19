import { useState } from "react";
import StarRating from "../components/StarRating";
import MovieList from "../components/MovieList";

function Home() {
    const [rating, setRating] = useState(6);
    const [page, setPage] = useState(1);

    return (
        <>
            <div id="hero">
                <div className="w-100 h-100 blur d-flex flex-column align-items-center justify-content-center">
                    <img
                        src="https://w.wallhaven.cc/full/vq/wallhaven-vqlxv8.png"
                        alt="rain in the forest"
                        className="img-hero"
                    />
                    <h1>Welcome to Hackflix!</h1>
                    <p className="w-50 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Asperiores eius fuga harum nulla a ut repellat
                        dolorum incidunt inventore numquam repellendus, unde
                        perspiciatis quia ullam, necessitatibus dolorem pariatur
                        assumenda alias!
                    </p>
                </div>
            </div>
            <div className="container d-flex justify-content-center">
                <StarRating setRating={setRating} setPage={setPage} />
            </div>
            <div className="container">
                <MovieList rating={rating} page={page} setPage={setPage} />
            </div>
        </>
    );
}

export default Home;
