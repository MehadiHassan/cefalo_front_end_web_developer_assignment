import React from 'react';

interface GenreHeaderProps {
    id: number;
    name: string;
}

const GenreHeader: React.FC<GenreHeaderProps> = (genreHeaderProps: GenreHeaderProps) => {
    return (
        <div>
            <h1> {genreHeaderProps.name}</h1>
        </div>
    );
};

export default GenreHeader;
