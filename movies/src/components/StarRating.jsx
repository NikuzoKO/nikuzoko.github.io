import ReactStars from "react-rating-stars-component";
import React from "react";

function StarRating({ setRating, setPage }) {
    const ratingChanged = (newRating) => {
        setRating(newRating * 2 - 2);
        setPage(1);
    };

    return (
        <ReactStars
            count={5}
            onChange={ratingChanged}
            size={35}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
        />
    );
}

export default StarRating;
