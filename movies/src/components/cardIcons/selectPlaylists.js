import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistIcon from "@mui/icons-material/PlaylistAdd";

const selectPlaylistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const selectPlaylists = (e) => {
    e.preventDefault();
    context.selectPlaylists(movie);
  };

  return (
    <IconButton aria-label="Select Playlist" onClick={selectPlaylists}>
      <PlaylistIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default selectPlaylistIcon;