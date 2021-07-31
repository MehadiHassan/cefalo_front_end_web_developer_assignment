import { MoveDetailsData, MoviesData } from '../../data_model/movies/MoviesData';

export default interface MoviesServiceInterface {
    getData(genreID: number, pageNumber: number): Promise<MoviesData>;
    getMovieDetails(movieID: number): Promise<MoveDetailsData>;
}
