import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PersonDetail() {
    const [person, setPerson] = useState(null);
    const { personId } = useParams();

    useEffect(() => {
        fetch(`https://api-ghibli.herokuapp.com/people/${personId}`)
            .then(response => response.json())
            .then(data => setPerson(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [personId]);

    if (!person) return <div>Loading...</div>;

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">
                <h2 className="text-2xl font-bold text-gray-800">{person.name}</h2>
                <p className="text-gray-600 mt-2"><strong>Gender:</strong> {person.gender}</p>
                <p className="text-gray-600 mt-2"><strong>Age:</strong> {person.age}</p>
                <p className="text-gray-600 mt-2"><strong>Eye Color:</strong> {person.eye_color}</p>
                <p className="text-gray-600 mt-2"><strong>Hair Color:</strong> {person.hair_color}</p>
            </div>
        </div>
    );
}

export default PersonDetail;
