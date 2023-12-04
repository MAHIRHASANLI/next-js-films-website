import Link from 'next/link'
import React from 'react'

import css from "./index.module.css"

const Categoies = ({ categories }) => {
    return (
        <div className={css.categories}>
            {
                categories.map((category) => (
                    <Link href={`/${category.id}`} key={category.id} className={css.category}>
                        <div className={css.name}>{category.name}</div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Categoies