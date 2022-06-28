import React from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

const HomePage = (props) => {
    const { data, error, isLoading, isError } = useQuery('discover', getMovies)//1-cache entry key, 2- to perform http req

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const movies = data.results;

   
    const favorites = movies.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))
    const addToFavorites = (movieId) => true

    return (
        <PageTemplate
            title='Discover Movies'
            movies={movies}
            selectFavorite={addToFavorites}
        />
    );
};
export default HomePage;