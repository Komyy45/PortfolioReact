import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='flex'>
                <ul className="links flex">
                    <li className='link'><a href="">about</a></li>
                    <li className='link'><a href="">articles</a></li>
                    <li className='link'><a href="">projects</a></li>
                    <li className='link'><a href="">speaking</a></li>
                    <li className='link'><a href="">contact</a></li>
                </ul>
                <p className='right'>© 2024 Spencer Sharp. All rights reserved.</p>
        </footer>
    )
}

export default Footer