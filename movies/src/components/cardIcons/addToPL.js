import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';


const AddToPL = ({ movie }) => {
    const context = useContext(MoviesContext);

    const handleAddToPL = (e) => {
        e.preventDefault()
        context.addToPL(movie)
    }

    return (
        <IconButton aria-label="watch later" onClick={handleAddToPL}>
            <PlaylistAddIcon color="primary" fontSize="large" />
        </IconButton>
        )
}

export default AddToPL;