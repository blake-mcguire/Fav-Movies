import React, { useState } from 'react';

const MoviesList = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "Spiderman 3",
            genre: "Action",
            description: "Venom Pulls up to spidermans hood and trys to mess up his funk, spiderman says 'nah'.",
            showDetails: false,
        },
        {
            id: 2,
            title: "Avengers: Infinity War",
            genre: "Action",
            description: "A Large Purple Man attempts to snap at a group of cosplayers but they dont really appreciate it and try to stop him",
            showDetails: false,
        },
        {
            id: 3,
            title: "Interstellar",
            genre: "Sci-Fi",
            description: "Absentee father literally goes through a wormhole to avoid raising his children.",
            showDetails: false,
        },
        {
            id: 4,
            title: "The Dark Knight",
            genre: "Action",
            description: "Moody trust fund kid still likes to play dress up and a mental patient decides to play as well.",
            showDetails: false,
        },
        {   
            id: 5,
            title: "The Lego Movie",
            genre: "Documentary",
            description: "The True story of a man named emmet rebelling against our corporate overlords and fighting against corporate monopolies (the Kragel) that threaten to hurt innovation.",
            showDetails: false,
        }
    ]);

    const [selectedGenre, setSelectedGenre] = useState('All');
    const [selectedMovie, setSelectedMovie] = useState(null);


    const toggleDetails = (id) => {
        const newMovies = movies.map(movie =>
            movie.id == id ? { ...movie, showDetails: !movie.showDetails} : movie
        );
        setMovies(newMovies);
    };

    const removeMovie = (id) => {
        const newMovies = movies.filter(movie => movie.id !== id);
        setMovies(newMovies);
    };
    const handleGenreChange = (event) => {
        setSelectedGenre(event.target.value);
    };

    const filteredMovies = selectedGenre === 'All' ? movies : movies.filter(movie => movie.genre === selectedGenre);

    // function to toggle details for a movie
    // function to remove a movie from a list when a button is clicked
    // const filtered list = movies.filter

    // function to toggle movie list 
    return ( 
        <>
            <div>
                <label htmlFor='genre'>Filter by genre: </label>
                <select id="genre" value={selectedGenre} onChange={handleGenreChange}>
                    <option value="All">All</option>
                    <option value="Action">Action</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="Documentary">Documentary</option>
                </select>
            </div>
                    <ul>
                        {movies
                            .filter(movie => selectedGenre === 'All' || movie.genre === selectedGenre)
                            .map(movie => (
                                <li key={movie.id}>
                                    <h3>{movie.title}</h3>
                                    <button onClick={() => toggleDetails(movie.id)}>
                                        {movie.showDetails ? 'Hide Details' : 'Show Details'}
                                    </button>
                                    <button onClick={() => removeMovie(movie.id)}>Remove</button>
                                    {movie.showDetails && <p>{movie.description}</p>}
                                </li>
                            ))}
                    </ul>
                    
            {/* {section for selected movie card - where you give extra details about the movie} */}
            <div className="card">
                {selectedMovie && (
                    <>
                        <h2>{selectedMovie.title}</h2>
                        <p>Genre: {selectedMovie.genre}</p>
                        <p>Description: {selectedMovie.description}</p>
                    </>
                )}
            </div>
        </>
    );
};

export default MoviesList;