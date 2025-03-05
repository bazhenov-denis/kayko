import {FaInstagram, FaTelegram, FaVk} from 'react-icons/fa';

import "./Footer.css"

export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-socials">
                <a href="https://t.me/studio_kayko" className="social-icon"><FaTelegram /></a>
                <a href="https://www.instagram.com/kayko.beauty?igsh=MTNid2tvYWthdTloeg%3D%3D&utm_source=qr" className="social-icon"><FaInstagram /></a>
                <a href="https://vk.com/kaykomoscow" className="social-icon"><FaVk /></a>

            </div>
            <div className="footer-text">
                <p>
                    KAYKO - это гармония внутреннего и внешнего, умение сочетать в себе красоту и ум, нежность и силу.
                </p>
            </div>
            <div className="footer-logo">
                <img src={"../src/assets/logo.jpg"}/>
            </div>
            <div className="footer-country">
                <p>Moscow</p>
            </div>
        </footer>
    );
};
