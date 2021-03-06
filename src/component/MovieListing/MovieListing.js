import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/Movie/MovieSlice";
import Slider from "react-slick";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
import { Setting } from "../../common/setting";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderMovies,
    renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movie</h2>
        <div className="movie-container">
          <Slider {...Setting}>{renderMovies}</Slider>
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          <Slider {...Setting}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
