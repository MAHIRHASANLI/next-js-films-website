import React from 'react'

import css from "./index.module.css"

const LoadingComponent = () => {
    return (
        <div className={css.loadingWrapper}>
            <div className={css.ldsRing}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default LoadingComponent