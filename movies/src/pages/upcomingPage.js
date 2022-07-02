import React from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import AddToPL from '../components/cardIcons/addToPL'

const UpcomingPage = (props) => {

    const { data, isLoading, isError, error } = useQuery('upcoming', getUpcomingMovies);

    if (isLoading) {
        return <Spinner/>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    const movies = data.results;

    const favorites = movies.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))

    return (
        <PageTemplate
            title='Soon'
            movies={movies}
            action={(movie) => {
                return <AddToPL movie={movie} /> //the render prop
            }}
        />
    );
};
export default UpcomingPage;
