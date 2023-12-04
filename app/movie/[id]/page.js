import React from 'react'
import MovieContainer from '@/containers/movie'

import Movies from "@/server/movies.json"
import { notFound } from 'next/navigation';

const delay = async (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

const MovidePage = async ({ params, searchParams }) => {
    await delay(2000)
    const movieDetail = Movies.results.find(movie => movie.id.toString() === params.id);
    if (!movieDetail) notFound();

    if (searchParams.error === "true") throw new Error("Error happened!")

    return <MovieContainer movie={movieDetail} />
}

export default MovidePage