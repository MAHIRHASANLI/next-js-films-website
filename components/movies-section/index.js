import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import css from "./index.module.css"

const MoviesSection = ({ title, movies }) => {
    console.log(movies);
    return (
        <div className={css.moviesSection}>
            <h3 className={css.title}>{title}</h3>
            <div className={css.movies}>
                {
                    movies && movies.map((movie) => (
                        <div className={css.movie}>
                            <Link href={`/movie/${movie.id}`}>
                                <Image unoptimized fill src={movie.poster_path} alt={movie.title} />
                            </Link>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    )
}

export default MoviesSection