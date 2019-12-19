import React, { Component } from "react";

import Listmovies from "./listmovies";

import PopupMovie from "./PopupMovie.js";

import RatingMovie from "./ratingMovie";

import "../App.css";

class MovieApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          title: "Blade Runner",
          year: "2017",
          poster:
            "https://img8.cdn.cinoche.com/images/d07bfa065dc93a6a53111bbdca8cce33.jpg",
          rating: 4
        },
        {
          title: "Man of Steel",
          year: "2013",
          poster:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp-N5J623Hx85FOAbI8ZMPWtCPKtycgH17y68aKu5Ls0ZcgVJN&s",
          rating: 3
        },
        {
          title: "Inception",
          year: "2010",
          poster:
            "https://images-na.ssl-images-amazon.com/images/I/51TfUWh5N9L._SY445_.jpg",
          rating: 5
        },
        {
          title: "Joker",
          year: "2019",
          poster:
            "https://i0.wp.com/alarencontreduseptiemeart.com/wp-content/uploads/2019/10/Joker.jpg?fit=945%2C496&ssl=1",
          rating: 4
        }
      ],

      searchedTitle: "",
      rating: 0
    };
  }
//ajouter un nouveau film au tableau movies
  addmovie = (title, year, poster, rating) => {
    const movies = [
      ...this.state.movies,
      { title: title, year: year, poster: poster, rating: rating }
    ];
    this.setState({
      movies: movies
    });
  };

  searchedMovies = event => {
    this.setState({
      searchedTitle: event.target.value
    });
  };
  ChangeRating = rate => {
    this.setState({
      rating: rate
    });
  };

  SearchedListMovies = event => {
    this.setState({
      searchedTitle: event.target.value
    });
  };

  render() {
    return (
      <div className="appmovie">
        <header className="searchbar">
          <div className="inputbar">
            <input
              placeholder="Type movie name to search..."
              type="text"
              value={this.state.searchedTitle}
              onChange={this.SearchedListMovies}
            />
          </div>

          <div className="raitingmin">
            <p>
              <strong> Minimum rating </strong>
            </p>
            <RatingMovie
              rate={this.state.rating}
              ChangeRating={this.ChangeRating}
            />
          </div>
        </header>

        <main>
          <Listmovies
            movies={this.state.movies}
            searchTitle={this.state.searchedTitle}
            rating={this.state.rating}
          />
          <PopupMovie add={this.addmovie} />
        </main>
      </div>
    );
  }
}

export default MovieApp;
