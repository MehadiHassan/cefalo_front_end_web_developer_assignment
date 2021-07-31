import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import GenreHeader from '../common/genre_header/GenreHeader';
import GenreMovies from '../common/genre_movies/GenreMovies';
// import { SetMoviesByGenreIdToStore } from '../../state/movies/MoviesAction';
// import { GenreItem } from '../../data_model/commonData/GenereItem';

const MovieListByGenres: React.FC = () => {
    // const dispatch = useDispatch();
    const genres = useSelector((state: RootState) => state.GenreList.genres);

    return (
        <>
            {/* {console.log('Genre Movies List:-', movies)} */}
            {genres.map(genreItem => {
                return (
                    <div key={genreItem.id} className="genre-content">
                        <GenreHeader id={genreItem.id} name={genreItem.name} />
                        <GenreMovies genreId={genreItem.id} />
                    </div>
                );
            })}
        </>
    );
};

export default MovieListByGenres;
