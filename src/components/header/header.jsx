import { Link } from 'react-router-dom';
import './header.css'

const Header = ({ brand, links }) => {
    return(
        <div className="header-container">
            <div className="header-brand">{brand}</div>
            <ul className="header-links">{links.map(link => (
                <li key={link.label}><Link to={link.path}>{link.label}</Link></li>
            ))}</ul>
        </div>
    )
}

export default Header;