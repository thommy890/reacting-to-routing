import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function FilmDetail() {
    const [film, setFilm] = useState(null);
    const { filmId } = useParams();

    useEffect(() => {
        fetch(`https://api-ghibli.herokuapp.com/films/${filmId}`)
            .then(response => response.json())
            .then(data => setFilm(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [filmId]);

    if (!film) return <div>Loading...</div>;

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">
                <h2 className="text-2xl font-bold text-gray-800">{film.title}</h2>
                <p className="text-gray-600 mt-2"><strong>Original Title:</strong> {film.original_title}</p>
                <p className="text-gray-600 mt-2"><strong>Romanised Title:</strong> {film.original_title_romanised}</p>
                <img src={film.image} alt={film.title} className="mt-4" />
                <p className="text-gray-600 mt-2"><strong>Description:</strong> {film.description}</p>
                <p className="text-gray-600 mt-2"><strong>Director:</strong> {film.director}</p>
                <p className="text-gray-600 mt-2"><strong>Producer:</strong> {film.producer}</p>
                <p className="text-gray-600 mt-2"><strong>Release Date:</strong> {film.release_date}</p>
                <p className="text-gray-600 mt-2"><strong>Running Time:</strong> {film.running_time} minutes</p>
                <p className="text-gray-600 mt-2"><strong>Rotten Tomatoes Score:</strong> {film.rt_score}%</p>
            </div>
        </div>
    );
}

export default FilmDetail;
