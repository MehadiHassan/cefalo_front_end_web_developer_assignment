import React, { useEffect, useState } from 'react';
import { useInject, cid } from 'inversify-hooks';
import { useDispatch } from 'react-redux';
import MovieListByGenres from '../../componenets/movie_list_by_genres/MovieListByGenres';
import GenreService from '../../services/genre/GenreService';
import MoviesService from '../../services/movies/MoviesService';
import { GenreData } from '../../data_model/genre/GenereData';
import { MoviesData } from '../../data_model/movies/MoviesData';
import { GenreItem } from '../../data_model/commonData/GenereItem';
import './_movies.scss';
import { SetGenreListToStore } from '../../state/genre/GenreAction';
import { SetMoviesByGenreIdToStore } from '../../state/movies/MoviesAction';

const Movies: React.FC = () => {
    const dispatch = useDispatch();
    // const [isRetrieveCompleteMovieData, SetIsRetrieveCompleteMovieData] = useState<boolean>(false);
    // const [genreList, SetGenreList] = useState<GenreItem[]>([]);
    const [genreMovieList, SetGenreMovieList] = useState<MoviesData[]>([]);
    const [genreService] = useInject<GenreService>(cid.GenreService);
    const [moviesService] = useInject<MoviesService>(cid.MoviesService);

    const FetchGenreInfoAsync = (): Promise<GenreData> => {
        return genreService.getData();
    };

    const FetchMovieInfoAsync = (genreID: number, pageNumber: number): Promise<MoviesData> => {
        return moviesService.getData(genreID, pageNumber);
    };

    useEffect(() => {
        FetchGenreInfoAsync().then((genreResponse: GenreData) => {
            console.log('Genre Data:-', genreResponse);
            // SetGenreList(genreResponse.genres);
            dispatch(SetGenreListToStore(genreResponse.genres));
            genreResponse.genres.map((genreItem: GenreItem, index) => {
                console.log('Index:-', index, genreResponse.genres.length - 1);
                // moviesData.push(
                FetchMovieInfoAsync(genreItem.id, 1).then((moviesResponse: MoviesData) => {
                    // SetGenreMovieList([...genreMovieList, moviesResponse]);
                    SetGenreMovieList(genreMovieList => [...genreMovieList, moviesResponse]);
                    console.log('Movies Data:-', moviesResponse);
                    // moviesData.push(moviesResponse);
                });
                // );
                // console.log('adsafasf:-', moviesData);
            });
            // console.log('adsafasf:-', moviesData);
            // if (moviesData && moviesData.length > 0) dispatch(SetMoviesByGenreIdToStore(moviesData));
        });
    }, []);

    useEffect(() => {
        dispatch(SetMoviesByGenreIdToStore(genreMovieList));
    }, [genreMovieList]);

    return (
        <div className="movies-container container">
            <div className="content">
                <div className="content-inside">
                    <MovieListByGenres />
                </div>
            </div>
        </div>
    );
};

export default Movies;
