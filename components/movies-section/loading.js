import React from 'react'

import css from "./index.module.css"
import Skeleton from '../sceleton'

const MoviesSectionLoading = () => {
    return (
        <div className={css.moviesSection}>
            <Skeleton width={128} height={36} />
            <div className={css.movies}>
                {
                    Array(5).fill(null).map((item, i) => <Skeleton key={i} />)
                }
            </div>
        </div>
    )
}

export default MoviesSectionLoading