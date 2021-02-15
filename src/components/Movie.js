import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ title, summary, poster, year }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year.slice(0, 4)}</h5>
                <p className="movie__summary">{summary.slice(0, 200)}...</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
}

export default Movie;