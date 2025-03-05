import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {

    return (
        <header className="header">
            <div className="logo">
                <Link to="/"> <img className="logo-img" src={"../src/assets/logo.jpg"} alt="KAYKO"/></Link>

            </div>
            <div className="dropdown">
                <button className="dropbtn">Услуги</button>
                <div className="dropdown-content">
                    <ul>
                        <li><Link to="/service/наращивание ресниц">Наращивание ресниц</Link></li>
                        <li><Link to="/service/косметология">Косметология</Link></li>
                        <li><Link to="/service/макияж и прически">Макияж и прически</Link></li>
                        <li><Link to="/service/оформление бровей">Оформление бровей</Link></li>
                        <li><Link to="/service/ламинирование и окрашивание ресниц">Ламинирование и окрашивание
                            ресниц</Link></li>
                        <li><Link to="/service/перманентный макияж">Перманентный макияж</Link></li>
                    </ul>
                </div>
            </div>


            {/*            <div className="dpopdown">
                <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/service/наращивание ресниц">Наращивание ресниц</Link></li>
                        <li><Link to="/service/косметология">Косметология</Link></li>
                        <li><Link to="/service/макияж и прически">Макияж и прически</Link></li>
                        <li><Link to="/service/оформление бровей">Оформление бровей</Link></li>
                        <li><Link to="/service/ламинирование и окрашивание ресниц">Ламинирование и окрашивание
                            ресниц</Link></li>
                        <li><Link to="/service/перманентный макияж">Перманентный макияж</Link></li>
                    </ul>
                </nav>
            </div>*/}


        </header>
    );
};
