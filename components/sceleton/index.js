import React from 'react'

import css from "./index.module.css"

const Skeleton = ({ width, height }) => {
    return (
        <div className={css.skeleton} style={{ width, height }}></div>
    )
}

export default Skeleton