import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Award from "../components/Award";
import MovieList from "../utils/MovieList";

//animation
import { motion } from "framer-motion";
import { pageAnimation } from "../utils/animation";

const MovieDetails = () => {
  // using useLocation to get url
  console.log();
  const url = useLocation().pathname;

  //   state to store the movies
  const [movies, setMovies] = useState(MovieList);

  //   state to store requested movie details
  const [movie, setmovie] = useState(null);

  //   useEffect to setmovie as per url
  useEffect(() => {
    const currentMovie = movies.filter(
      (singleMovie) => singleMovie.url === url
    );
    setmovie(currentMovie);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <motion.div
          className="movie-details"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
          
        >
          <div className="headline">
            <h2>{movie[0].title}</h2>
            <img src={movie[0].mainImg} alt={movie[0].title} />
          </div>
          <div className="awards">
            {movie[0].awards.map((award) => (
              <Award title={award.title} description={award.description} />
            ))}
          </div>
          <div className="secondary-image">
            <img src={movie[0].secondaryImg} alt={movie[0].title} />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default MovieDetails;
