import React from "react";
import RatingMovie from "./ratingMovie";

const listmovies = props => {
  return (
    <div className="listmovie">
      {props.movies.filter(el =>el.title.toLowerCase().includes(props.searchTitle.toLowerCase().trim()) 
      && el.rating >= props.rating )
        .map((el, i) => (
          <div className="movie">
            <RatingMovie rate={el.rating} />
            <img src={el.poster} className="imgMovie" />
            <span>{el.title}</span>-<span>{el.year}</span>
          </div>
        ))}
    </div>
  );
};

export default listmovies;
