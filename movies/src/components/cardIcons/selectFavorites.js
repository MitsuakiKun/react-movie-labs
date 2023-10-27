import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const selectFavoritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const selectFavorites = (e) => {
    e.preventDefault();
    context.selectFavorites(movie);
  };

  return (
    <IconButton aria-label="Select favorites" onClick={selectFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default selectFavoritesIcon;