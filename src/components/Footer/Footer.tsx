import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP } from 'react-icons/fa';

import "./Footer.css"

export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-socials">
                <a href="#" className="social-icon"><FaFacebookF /></a>
                <a href="#" className="social-icon"><FaTwitter /></a>
                <a href="#" className="social-icon"><FaInstagram /></a>
                <a href="#" className="social-icon"><FaYoutube /></a>
                <a href="#" className="social-icon"><FaPinterestP /></a>
            </div>
            <div className="footer-text">
                <p>
                    H&M's business concept is to offer fashion and quality at the best price in a sustainable way. H&M has since it was founded in 1947 grown into one of the world's leading fashion companies. The content of this site is copyright-protected and is the property of H&M Hennes & Mauritz AB.
                </p>
            </div>
            <div className="footer-logo">
                <h2>H&M</h2>
            </div>
            <div className="footer-country">
                <p>United Kingdom | £</p>
            </div>
        </footer>
    );
};
