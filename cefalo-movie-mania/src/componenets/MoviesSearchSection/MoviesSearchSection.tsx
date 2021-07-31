import React from 'react';
import './_moviesSeacrhSection.scss';
const MoviesSearchSection: React.FC = () => {
    return (
        <div className="search-section-container conatiner">
            <h1 className="display-3">Welcome</h1>
            <p className="lead">Millions of movies, TV shows and people to discover. Explore now.</p>
            <div className="search-box">
                <form id="inner_search_form" action="/search" method="get" acceptCharset="utf-8">
                    <label>
                        <input
                            dir="auto"
                            id="inner_search_v4"
                            name="query"
                            type="text"
                            tab-index="1"
                            autoCorrect="off"
                            auto-fill="off"
                            autoComplete="off"
                            spellCheck
                            placeholder="Search for a movie, tv show, person......"
                        />
                    </label>
                    <input type="submit" value="Search" />
                </form>
            </div>
        </div>
    );
};

export default MoviesSearchSection;
