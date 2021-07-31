import { MovieItem } from '../commonData/MovieItem';

export interface MoviesData {
    id: number;
    page: number;
    list: MovieItem[];
    total_pages: number;
    total_results: number;
}
