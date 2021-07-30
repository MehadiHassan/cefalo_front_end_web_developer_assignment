import React from 'react';
import { useParams } from 'react-router-dom';
import Movies from '../../../pages/movies/Movies';
import Navbar from '../navbar/Navbar';
import './_pageLayoutController.scss';

const PageLayoutController: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    return (
        <div className="page-layout-container">
            <Navbar />
            {id == 'movies' ? <Movies /> : null}
            {id == undefined ? <Movies /> : null}
        </div>
    );
};

export default PageLayoutController;
