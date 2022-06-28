import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [favorites, setFavorites] = useState([])

    const addToFavorites = (movie) => {
        let newFavorites = [];
        if (!favorites.includes(movie.id)) {
            newFavorites = [...favorites, movie.id];
        }
        setFavorites(newFavorites)
    };

    // We will use this function in a later section
    const removeFromFavorites = (movie) => {
        setFavorites(favorites.filter(
            (mId) => mId !== movie.id
        ))
    };

    return (
        <MoviesContext.Provider //operates as a context provider
            value={{
                favorites,
                addToFavorites,
                removeFromFavorites
            }}
        >
            {props.children} //Container pattern  to compose it with other components
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;