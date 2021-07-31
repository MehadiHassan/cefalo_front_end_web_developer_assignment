import { MoviesData } from '../../data_model/movies/MoviesData';

export default interface MoviesServiceInterface {
    getData(genreID: string, pageNumber: string): Promise<MoviesData>;
}
