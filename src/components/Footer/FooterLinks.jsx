import React from 'react';
import FooterHeader from './FooterHeader';

const FooterLinks = () => {
    return(
        <section className="footer-links">
            <FooterHeader text='important links'/>
            <ol className="footer__nav">
                <li className="footer__item"><a href="/" className="footer__item--link">license</a></li>
                <li className="footer__item"><a href="/" className="footer__item--link">privacy policy</a></li>
                <li className="footer__item"><a href="/" className="footer__item--link">location</a></li>
                <li className="footer__item"><a href="/" className="footer__item--link">future projects</a></li>
                <li className="footer__item"><a href="/" className="footer__item--link">about us</a></li>
            </ol>
        </section>
    )
}
export default FooterLinks;