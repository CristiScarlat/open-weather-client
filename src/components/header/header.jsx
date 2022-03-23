import { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/globalContext';
import './header.css'

const Header = ({ brand, links }) => {

    const inputCityRef = useRef();

    const { city, setCity } = useContext(GlobalContext);

    const handleGetCity = () => {
        inputCityRef.current.value && setCity(inputCityRef.current.value)
    }

    return (
        <div className="header-container">
            <div className="header-links-container">
                <div className="header-brand">{brand}</div>
                <ul className="header-links">{links.map(link => (
                    <li key={link.label}><Link to={link.path}>{link.label}</Link></li>
                ))}</ul>
            </div>
            <div className="header-get-weather-container">
                <input type="text" placeholder='Type City to get weather' ref={inputCityRef}/>
                <button onClick={handleGetCity}>Get weather</button>
            </div>
        </div>
    )
}

export default Header;