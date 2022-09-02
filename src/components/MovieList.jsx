import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return (
      <div>
        <h2>MovieList</h2>
        <div>
          {
            movies
              .map((movie) => (
                <MovieCard
                  key={ movie.title }
                  movie={ movie }
                />
              ))
          }
        </div>
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number,
    imagePath: PropTypes.string.isRequired,
  })).isRequired,
};

export default MovieList;
