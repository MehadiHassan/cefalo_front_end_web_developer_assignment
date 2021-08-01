import { MoveDetailsData, MovieCastCrewData, MoviesData } from '../../data_model/movies/MoviesData';

export default interface MoviesServiceInterface {
    getData(genreID: number, pageNumber: number): Promise<MoviesData>;
    getMovieDetails(movieID: number): Promise<MoveDetailsData>;
    getRelatedMovies(movieID: number): Promise<MoviesData>;
    getMovieCastCrewData(movieID: number): Promise<MovieCastCrewData>;
}
