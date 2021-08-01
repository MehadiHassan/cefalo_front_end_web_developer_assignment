import { injectable } from 'inversify-hooks';
import { cefaloMovieManiaAPI } from '../../api/index';
import { AxiosResponse, AxiosError } from 'axios';
import { MoveDetailsData, MovieCastCrewData, MoviesData } from '../../data_model/movies/MoviesData';
import MoviesServiceInterface from './MoviesServiceInterface';

@injectable()
export default class MoviesService implements MoviesServiceInterface {
    async getData(genreID: number, pageNumber: number): Promise<MoviesData> {
        console.log('Page:-', pageNumber);
        return cefaloMovieManiaAPI
            .get(`/discover/movie?api_key=${process.env.API_KEY}&with_genres=${genreID}`)
            .then((response: AxiosResponse) => {
                const MoviesData = this.transformResponseToData(response);

                return MoviesData;
            })
            .catch((error: AxiosError) => {
                console.log(error);
                throw error;
            });
    }

    async getMovieDetails(movieID: number): Promise<MoveDetailsData> {
        return cefaloMovieManiaAPI
            .get(`/movie/${movieID}?api_key=${process.env.API_KEY}&append_to_response=videos`)
            .then((response: AxiosResponse) => {
                const MovieDetailsData = this.transformResponseToDetailsData(response);
                return MovieDetailsData;
            })
            .catch((error: AxiosError) => {
                console.log(error);
                throw error;
            });
    }

    async getRelatedMovies(movieID: number): Promise<MoviesData> {
        return cefaloMovieManiaAPI
            .get(`/movie/${movieID}/similar?api_key=${process.env.API_KEY}`)
            .then((response: AxiosResponse) => {
                const RelatedMoviesData = this.transformResponseToRelatedMoviesData(response);

                return RelatedMoviesData;
            })
            .catch((error: AxiosError) => {
                console.log(error);
                throw error;
            });
    }

    async getMovieCastCrewData(movieID: number): Promise<MovieCastCrewData> {
        return cefaloMovieManiaAPI
            .get(`/movie/${movieID}/credits?api_key=${process.env.API_KEY}`)
            .then((response: AxiosResponse) => {
                const MovieCastCrewData = this.transformResponseToMovieCastCrewData(response);

                return MovieCastCrewData;
            })
            .catch((error: AxiosError) => {
                console.log(error);
                throw error;
            });
    }

    private transformResponseToData(response: AxiosResponse): MoviesData {
        return response.data;
    }

    private transformResponseToDetailsData(response: AxiosResponse): MoveDetailsData {
        return response.data;
    }

    private transformResponseToRelatedMoviesData(response: AxiosResponse): MoviesData {
        return response.data;
    }

    private transformResponseToMovieCastCrewData(response: AxiosResponse): MovieCastCrewData {
        return response.data;
    }
}
