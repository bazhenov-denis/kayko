
import './Header.css';

export const Header = () => {

    return (
        <header className="header">
            <div className="logo">
                <img className="logo" src={"../src/assets/logo.jpg"} alt="KAYKO" />
            </div>
            <nav className={`nav`}>
                <ul>
                    <li><a href="#section1">О нас</a></li>
                    <li><a href="#section2">Услуги</a></li>
                    <li><a href="#section3">Контакты</a></li>
                </ul>
            </nav>
        </header>
    );
};

