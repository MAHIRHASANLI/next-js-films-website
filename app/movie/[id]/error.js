"use client";
import Link from 'next/link';
import React from 'react'

const Error = () => {
    return (
        <div style={{
            textAlign: "center", padding: "50px"
        }}>
            <h2 style={{
                color: "white"
            }}>An error has occurred. Sorry for fhat!</h2>
            <Link href="/" style={{
                textDecoration: "underline", fontSize: "20px", color: "white", marginTop: "50px"
            }}>Go home</Link>
        </div>
    )
}

export default Error