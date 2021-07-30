import React from 'react';
import { useParams } from 'react-router-dom';
import Movies from '../../../pages/movies/Movies';
import Footer from '../footer/Footer';
import NavMenubar from '../nav_manu_bar/NavMenbar';
import './_pageLayoutController.scss';

const PageLayoutController: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    return (
        <div className="page-layout-container">
            <NavMenubar />
            {id == 'movies' ? <Movies /> : null}
            {id == undefined ? <Movies /> : null}
            <Footer />
        </div>
    );
};

export default PageLayoutController;
