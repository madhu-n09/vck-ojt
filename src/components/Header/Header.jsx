import {Link} from 'react-router-dom';
import './Header.css';
const Header = () => {
    return(
    <div>
        <header class="navbar-1">
            <nav class="navbar">
                <h3 class="centered"to="/vck">Vivekanand College</h3>
                <div class="navbar">
                <Link class="left" to="/home">Home</Link>
                <Link class="left" to="/about">About</Link>
                <Link class="left" to="/courses">Courses</Link>
                <Link class="left" to="/contact">Contact</Link>
                <Link to="/addmission">
                <button class="btn-hm">Apply Now!</button>
                </Link>
                </div>
            </nav>
        </header>
    </div>
    )
}
export default Header;