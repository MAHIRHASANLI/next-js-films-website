import React from 'react'

import css from "./index.module.css"
import LoadingComponent from '../loading'

const FeatueMovieLoading = () => {
    return (
        <div className={css.movieWrapper} style={{ height: 278 }}>
            <LoadingComponent />
        </div>
    )
}

export default FeatueMovieLoading