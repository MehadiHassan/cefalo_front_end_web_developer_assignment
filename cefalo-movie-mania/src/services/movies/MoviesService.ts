import { injectable } from 'inversify-hooks';
import { cefaloMovieManiaAPI } from '../../api/index';
import { AxiosResponse, AxiosError } from 'axios';
import { MoviesData } from '../../data_model/movies/MoviesData';
import MoviesServiceInterface from './MoviesServiceInterface';

@injectable()
export default class MoviesService implements MoviesServiceInterface {
    async getData(genreID: number, pageNumber: number): Promise<MoviesData> {
        return cefaloMovieManiaAPI
            .get(`/movie/${genreID}/lists?api_key=${process.env.API_KEY}&language=en-US&page=${pageNumber}`)
            .then((response: AxiosResponse) => {
                const MoviesData = this.transformResponseToData(response);

                return MoviesData;
            })
            .catch((error: AxiosError) => {
                console.log(error);
                throw error;
            });
    }

    private transformResponseToData(response: AxiosResponse): MoviesData {
        return response.data;
    }
}
