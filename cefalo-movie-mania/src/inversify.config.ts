import 'reflect-metadata';
import { container } from 'inversify-hooks';
import MoviesService from './services/movies/MoviesService';
import MoviesServiceInterface from './services/movies/MoviesServiceInterface';

import GenreService from './services/genre/GenreService';
import GenreServiceInterface from './services/genre/GenreServiceInterface';

container.addSingleton<MoviesServiceInterface>(MoviesService);
container.addSingleton<GenreServiceInterface>(GenreService);

export default container;
