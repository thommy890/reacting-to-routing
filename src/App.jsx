import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Films from './pages/Films';
import FilmDetail from './pages/FilmDetail';
import People from './pages/People';
import PersonDetail from './pages/PersonDetail';


function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/films" element={<Films />} />
                <Route path="/films/:filmId" element={<FilmDetail />} />
                <Route path="/people" element={<People />} />
                <Route path="/people/:personId" element={<PersonDetail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;