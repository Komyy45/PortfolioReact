import { useState } from 'react'
import './Header.css'
import '/Protofolio/public/style.css'

const Header = () => {
    const [Nav , setNav] = useState(false);
    const [mode , setMode] = useState(localStorage.getItem('mode'));
    document.body.className = mode;
    const changeMode = () => {
        const newTheme = mode == "light" ? "Dark" : "light";
        localStorage.setItem('mode' , newTheme);
        setMode(newTheme);
        document.body.className = newTheme;
    }

    const handleNav = () => {
        setNav(!Nav);
    }
    return (
        <header className='header flex'>
            <div><button className='icon-menu menu' onClick={handleNav}></button></div>
            <nav className='mainNav'>
                <ul className="links flex">
                    <li className='link'><a href="#about">about</a></li>
                    <li className='link'><a href="">articles</a></li>
                    <li className='link'><a href="#projects">projects</a></li>
                    <li className='link'><a href="">speaking</a></li>
                    <li className='link'><a href="#contact">contact</a></li>
                </ul>
            </nav>
            <button className={mode == "Dark" ? "icon-moon-o toggle" : "icon-sun toggle"} onClick={changeMode}>
                
            </button>




        {
            Nav &&    <div className="popUp">
            <nav className='modal'>
                <div className='closeButton flex'>
                    <h4 className='navTitle'>
                        Navigation
                    </h4>
                    <button className='close icon-close' onClick={handleNav}>
                        
                    </button>
                </div>
                <ul className="links flex">
                    <li className='link'><a href="">about</a></li>
                    <li className='link'><a href="">articles</a></li>
                    <li className='link'><a href="">projects</a></li>
                    <li className='link'><a href="">speaking</a></li>
                    <li className='link'><a href="">contact</a></li>
                </ul>
            </nav>
        </div>
        }
        </header>
    )
}

export default Header