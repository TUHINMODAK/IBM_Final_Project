import React, { Component } from 'react'
import MovieCard from '../MovieCard'

export class MovieList extends Component {
    render() {
        const movielist = [
            {
                poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
                name: "The Shawshank Redemption",
                rating: "9.3"
            },
            {
                poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
                name: "The Godfather",
                rating: "9.2"
            },
            {
                poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
                name: "The Dark Knight",
                rating: "9.0"
            },
            {
                poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
                name: "Pulp Fiction",
                rating: "8.9"
            },
            {
                poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
                name: "Inception",
                rating: "8.8"
            },
            {
                poster: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
                name: "The Lord of the Rings: The Return of the King",
                rating: "8.9"
            },
            {
                poster: "https://image.tmdb.org/t/p/w500/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
                name: "Fight Club",
                rating: "8.8"
            },
            {
                poster: "https://image.tmdb.org/t/p/w500/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg",
                name: "Interstellar",
                rating: "8.7"
            },
            {
                poster: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
                name: "Forrest Gump",
                rating: "8.8"
            },
            {
                poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
                name: "Parasite",
                rating: "8.5"
            },
            {
                poster: "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
                name: "Joker",
                rating: "8.4"
            },
            {
                poster: "https://image.tmdb.org/t/p/w500/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg",
                name: "Avengers: Endgame",
                rating: "8.4"
            },
            {
                poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
                name: "Avengers: Infinity War",
                rating: "8.4"
            },
            {
                poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
                name: "The Martian",
                rating: "8.0"
            },
            {
                poster: "https://image.tmdb.org/t/p/w500/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
                name: "Gladiator",
                rating: "8.5"
            },
            {
                poster: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
                name: "The Matrix",
                rating: "8.7"
            },
            {
                poster: "https://image.tmdb.org/t/p/w500/8h58iVmQgP0M1W5EztPJC9jzQW.jpg",
                name: "Spider-Man: No Way Home",
                rating: "8.2"
            },
            {
                poster: "https://image.tmdb.org/t/p/w500/xfSAoBEm9MNBjmlNcDYLvLSMlnq.jpg",
                name: "Oppenheimer",
                rating: "8.4"
            },
            {
                poster: "https://image.tmdb.org/t/p/w500/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
                name: "Dune: Part Two",
                rating: "8.5"
            },
            {
                poster: "https://image.tmdb.org/t/p/w500/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
                name: "The Batman",
                rating: "7.8"
            }
        ];
        return (
            <div className='p-3 row row-cols-4'>
                {
                    movielist.map((data,ind) =>
                        <MovieCard key={ind} poster={data.poster} name={data.name} rating={data.rating} />
                    )
                }
            </div>
        )
    }
}

export default MovieList