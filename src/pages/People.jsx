import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function People() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://api-ghibli.herokuapp.com/people')
            .then(response => response.json())
            .then(data => setPeople(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {people.map(person => (
                    <div key={person.id} className="bg-white rounded-lg shadow-md overflow-hidden p-4">
                        <Link to={`/people/${person.id}`} className="text-lg font-semibold text-blue-500 hover:text-blue-700">
                            {person.name}
                        </Link>
                        {/* You can add brief details here */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default People;