import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Movies from '../../../pages/movies/Movies';
import GenreDetails from '../../../pages/genre_details/GenreDetails';
import Footer from '../footer/Footer';
import NavMenubar from '../nav_manu_bar/NavMenbar';
import './_pageLayoutController.scss';
import PageNotFound from '../../common/page_not_found/PageNotFound';
import MovieDetails from '../../../pages/movie_details/MovieDetails';

const PageLayoutController: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { genreId } = useParams<{ genreId: string }>();
    const { movieId } = useParams<{ movieId: string }>();
    const location = useLocation();
    return (
        <div className="page-layout-container">
            {console.log('ID SEARCH PARAM:-', id, location.pathname, genreId)}
            {id == 'movies' || genreId || movieId ? (
                <>
                    <NavMenubar />
                    {id == 'movies' && <Movies />} {genreId && <GenreDetails />} {movieId && <MovieDetails />}
                    <Footer />
                </>
            ) : id == undefined && genreId == undefined && movieId == undefined ? (
                <>
                    <NavMenubar />
                    <Movies />
                    <Footer />
                </>
            ) : (
                <PageNotFound />
            )}
        </div>
    );
};

export default PageLayoutController;
