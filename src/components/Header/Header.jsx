import {Link} from 'react-router-dom';
import "./Header.css";
import { useState } from 'react';
const Header =() => {
    
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="navbar-1">
            <nav className="navbar">
                <Link to="/vck">
                    <h1 className="centered">Vivekanand College</h1>
                </Link>

                <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                   {isOpen ?'x': '☰'}
                </button>

                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <Link className="left" to="/home">Home</Link>
                    <Link className="left" to="/about">About</Link>
                    <Link className="left" to="/courses">Courses</Link>
                    <Link className="left" to="/contact">Contact</Link>
                    <Link to="/admission">
                        <button className="btn-hm">Apply Now!</button>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;

