import React from 'react';
import './_movies.scss';

const Movies: React.FC = () => {
    return (
        <div className="movies-container container">
            <div className="content">
                <div className="content-inside">
                    <h1>Sticky Footer with Negative Margin 2</h1>
                    <p>
                        <button id="add">Add Content</button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Movies;
