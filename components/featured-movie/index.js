import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaPlus } from 'react-icons/fa'

import css from "./index.module.css"

const FeaturedMovie = ({ movie, isCompact = true }) => {
    const { poster_path, title, overview } = movie
    return (
        <div className={css.movieWrapper}>
            <h1>{title}</h1>
            <p>{overview}</p>
            <div className={css.buttons}>
                <Link href={`/movie/${movie.id}`}>Play</Link>
                <button><FaPlus /></button>
            </div>
            <div className={css.moviePoster}>
                <div className={css.moviePosterOverlay}></div>
                <Image src={poster_path} alt={title} fill />
            </div>
        </div>
    )
}

export default FeaturedMovie