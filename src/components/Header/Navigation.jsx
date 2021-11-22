// import { useRef } from "react";
import React, {useRef} from 'react';
const Navigation = () => {
    const navBar = useRef(null);
    const handleNavigation = () => {
        navBar.current.classList.toggle('hidden')
    }
    return(
        <div className="nav-container">
        <nav className="nav" ref={navBar}>
           <ol className="nav__list">
                <li className="nav__item"><a href="/" className="nav__item--link">home</a></li>
                <li className="nav__item"><a href="/" className="nav__item--link">about us</a></li>
                <li className="nav__item"><a href="/" className="nav__item--link">our meals</a></li>
                <li className="nav__item"><a href="/" className="nav__item--link">testimonials</a></li>
                <li className="nav__item"><a href="/" className="nav__item--link">order a meal</a></li>
            </ol> 
        </nav>
        <button className="navigation-button" onClick={handleNavigation}>
            <span className="navigation-button__button"></span>
        </button>
        </div>
    )
}
export default Navigation;