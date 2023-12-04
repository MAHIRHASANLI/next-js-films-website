import CategoriesLoading from '@/components/categories/loading'
import FeatueMovieLoading from '@/components/featured-movie/loading'
import MoviesSectionLoading from '@/components/movies-section/loading'
import React from 'react'

function loading() {
    return (
        <div>
            <FeatueMovieLoading />
            <CategoriesLoading />
            <MoviesSectionLoading />
            <MoviesSectionLoading />
            <MoviesSectionLoading />
        </div>
    )

}

export default loading