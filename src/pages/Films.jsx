import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Films() {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('https://api-ghibli.herokuapp.com/films')
            .then(response => response.json())
            .then(data => setFilms(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {films.map(film => (
                    <div key={film.id} className="bg-white rounded-lg shadow-md overflow-hidden p-4">
                        <Link to={`/films/${film.id}`} className="text-lg font-semibold text-blue-500 hover:text-blue-700">
                            {film.title}
                        </Link>
                        {film.movie_banner && (
                            <img src={film.movie_banner} alt={`Banner of ${film.title}`} className="mt-4 w-full h-auto" />
                        )}
                        {/* Other brief film details can be added here */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Films;
