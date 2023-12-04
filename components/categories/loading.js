import React from 'react'

import css from "./index.module.css"
import Skeleton from '../sceleton'

const CategoriesLoading = () => {
    return (
        <div className={css.categories}>
            {
                Array(5).fill(null).map((item, i) => <Skeleton key={i} height={72} />)
            }
        </div>
    )
}

export default CategoriesLoading