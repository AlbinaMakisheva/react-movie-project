import React, { useContext } from 'react';
import { getMovie } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQueries } from 'react-query';
import Spinner from '../components/spinner';
import AddToPL from '../components/cardIcons/addToPL';
import { MoviesContext } from "../contexts/moviesContext";
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";


const MustWatchPage = () => {
    const { mustW: movieIds } = useContext( MoviesContext);

    const mustWMoviesQ = useQueries(
        movieIds.map((movieId) => {
            return {
                queryKey: [ 'movie', { id: movieId }],
                queryFn: getMovie
            }
        })
    )

    const isLoading = mustWMoviesQ.find((m) => m.isLoading === true);
    if (isLoading) {
       return <Spinner/>
    }

    const movies = mustWMoviesQ.map((q) => {
        q.data.genre_ids = q.data.genres.map(g => g.id)
        return q.data
    });

    return (
        <PageTemplate 
            title="Must Watch"
            movies={movies}
            action={(movie) => {
                return (
                    <>
                        <RemoveFromFavorites movie={movie} />
                        <AddToPL movies={movie} />
                    </>)
            }}


         />

        )

}

export default MustWatchPage;