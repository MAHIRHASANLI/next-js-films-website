import Link from 'next/link'
import React from 'react'

import css from "./index.module.css"

const Footer = () => {
  return (
    <footer className={css.footer}>
      Made with @ by&nbsp;
      <Link href="/">Mahir Hasanli</Link>
    </footer>
  )
}

export default Footer