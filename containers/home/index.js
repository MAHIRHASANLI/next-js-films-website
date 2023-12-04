import React from 'react'
import FeaturedMovie from '@/components/featured-movie'
import Categoies from '@/components/categories';
import MoviesSection from '@/components/movies-section';

import Movies from "@/server/movies.json";
import Genres from "@/server/genres.json";

const HomeContainer = () => {
    return (
        <div>
            <FeaturedMovie movie={Movies.results[0]} />
            <Categoies categories={Genres.genres.slice(0, 5)} />
            <MoviesSection movies={Movies.results.slice(0, 4)} title="Popular Films" />
            <MoviesSection movies={Movies.results.slice(2, 10)} title="Your Fovorites" />
        </div>
    )
}

export default HomeContainer