import { MovieDetailsData } from '../data_model/movies/MoviesData';
import { db } from '../index_db_helper/index';

export async function AddSingleMovieItem(movieDetailsData: MovieDetailsData): Promise<void> {
    (await db).add('watchList', { ...movieDetailsData, dateTime: new Date() });
}

export async function GetWatchListMovies(): Promise<MovieDetailsData[] | undefined> {
    return (await db)
        .getAllFromIndex('watchList', 'id')
        .then(result => {
            return result;
        })
        .catch(error => {
            console.log('There is an issue with GetAllCartProducts', error);
            return undefined;
        });
}

export async function RemoveMovieFromWatchList(movieId: number): Promise<void> {
    const tx = (await db).transaction('watchList', 'readwrite');
    const index = tx.store.index('id');

    for await (const cursor of index.iterate(movieId)) {
        cursor.delete();
    }

    await tx.done;
}

export async function GetTotalAddedWatchedListFromIndexDB(): Promise<number | undefined> {
    return GetWatchListMovies()
        .then(result => {
            return result?.length;
        })
        .catch(error => {
            console.log('Compare:-', error);
            return undefined;
        });
}
