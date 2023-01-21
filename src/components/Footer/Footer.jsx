import React from 'react';
// import { useLocation } from 'react-router-dom';
import Logo from '../../utility/images/logo2.png'
import Facebook from '../../utility/images/facebook.png'
import Twitter from '../../utility/images/twitter.png'
import Instagram from '../../utility/images/instagram.png'
import TikTok from '../../utility/images/tiktok.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import './Footer.scss'

const Footer = () => {
    // const location = useLocation();
    const currentYear = (new Date().getFullYear())

    const scrollTopHandler = () => {
        window.scrollTo(0, 0);
        // if (location.pathname === '/shop/collection') {
        //     const container = document.body.querySelector('.fashion-collection main .category-box main');
        //     container.scrollTo(0, 0);
        // }
    }

    return (
        <>
            <div className="footer__header">
                <div
                    className="footer__header__arrow"
                    onClick={scrollTopHandler}>
                    <FontAwesomeIcon icon={faChevronUp} />
                    <FontAwesomeIcon icon={faChevronUp} />
                </div>
            </div>
            <footer className='main-footer'>
                <img className='logo' src={Logo} alt='logo' />
                <section className='main-footer__address'>
                    <p>Fashion Factory</p>
                    <p>NIP: <b>123456789</b></p>
                    <p>Company address:</p>
                    <p><b>ul.Przemysłowa 33</b></p>
                    <p><b>12-123 Wąchock</b></p>
                </section>
                <section className='main-footer__contact'>
                    <p>Contact</p>
                    <p>Phone: <b>123-456-789</b></p>
                    <p>Email: <b>fashion@factory.pl</b></p>
                </section>
                <section className='main-footer__social'>
                    <h4>Social Media</h4>
                    <div className='main-footer__social-images'>
                        <img src={Facebook} alt='facebook' />
                        <img src={Twitter} alt='twitter' />
                        <img src={Instagram} alt='instagram' />
                        <img src={TikTok} alt='tiktok' />
                    </div>
                </section>
                <section className='main-footer__terms'>
                    <p>Terms of use website</p>
                    <p>Terms and conditions for returning products</p>
                </section>
                <p className='main-footer__copy'>{currentYear} &copy;</p>
            </footer>
        </>
    );
}

export default Footer;