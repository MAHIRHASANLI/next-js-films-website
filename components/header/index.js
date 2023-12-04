import Link from 'next/link'
import React from 'react'
import { FaPlayCircle } from 'react-icons/fa'

import css from "./index.module.css"

const Header = () => {
    return (
        <header className={`${css.header} container fluid`}>
            <div className={css.headerWrapper}>
                <Link href="/" className={css.logo}>
                    <FaPlayCircle />NETFILMS
                </Link>
                <nav className={css.navigationMenu}>
                    <Link href="/">Movies</Link>
                    <Link href="/">Services</Link>
                    <Link href="/">Kids</Link>

                </nav>
            </div>
        </header>
    )
}

export default Header