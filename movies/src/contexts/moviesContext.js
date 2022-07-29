import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [favorites, setFavorites] = useState([])
    const [mustW, setMustW] = useState([])
    const [myReviews, setMyReviews] = useState({})

    const addToFavorites = (movie) => {
        let newFavorites = [];
        if (!favorites.includes(movie.id)) {
            newFavorites = [...favorites, movie.id];
        }
        setFavorites(newFavorites)
    };

    const removeFromFavorites = (movie) => {
        setFavorites(favorites.filter(
            (mId) => mId !== movie.id
        ))
    };

    const addToPL = (movie) => {
        let newMustW = [];
        if (!mustW.includes(movie.id)) {
            newMustW = [...mustW, movie.id]
        }
        setMustW(newMustW)

    };

    const addReview = (movie, review) => {
        setMyReviews({ ...myReviews, [movie.id]: review })
    };

    return (
        <MoviesContext.Provider //operates as a context provider
            value={{
                favorites,
                addToFavorites,
                removeFromFavorites,
                addToPL,
                mustW,
                addReview,
            }}
        >
            {props.children} //Container pattern  to compose it with other components
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;