import { injectable } from 'inversify-hooks';
import { cefaloMovieManiaAPI } from '../../api/index';
import { AxiosResponse, AxiosError } from 'axios';
import { GenreData } from '../../data_model/genre/GenereData';
import GenreServiceInterface from './GenreServiceInterface';

@injectable()
export default class GenreService implements GenreServiceInterface {
    async getData(): Promise<GenreData> {
        return cefaloMovieManiaAPI
            .get(`/genre/movie/list?api_key=${process.env.API_KEY}&language=en-US`)
            .then((response: AxiosResponse) => {
                const GenreData = this.transformResponseToData(response);
                return GenreData;
            })
            .catch((error: AxiosError) => {
                console.log(error);
                throw error;
            });
    }

    private transformResponseToData(response: AxiosResponse): GenreData {
        return response.data;
    }
}
