import Link from 'next/link'
import React from 'react'

const MovieNotFound = () => {
    return (
        <div style={{
            textAlign: "center", padding: "50px"
        }}>
            <h2 style={{
                color: "white"
            }}>We couldn`t find the movie you looking for!</h2>
            <Link href="/" style={{
                textDecoration: "underline", fontSize: "20px", color: "white", marginTop: "50px"
            }}>Go home</Link>
        </div>
    )
}

export default MovieNotFound