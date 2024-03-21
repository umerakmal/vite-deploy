import {Link} from 'react-router-dom';
import './Header.css';

function Header() {
    return <div className="Header">
        <div className="logo">
            <h2>Umer</h2>
        </div>
        <div className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/History">History</Link></li>
                <li><Link to="/Career">Career</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </div>
    </div>
}

export default Header;