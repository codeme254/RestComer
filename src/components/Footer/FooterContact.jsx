import React from 'react';
import FooterHeader from './FooterHeader';

const FooterContact = () => {
    return(
        <section className="footer__contact">
            <FooterHeader text='reach us' />
            <ol className="footer__contact--list">
                <li className="footer__contact--item"><a href="/" className="footer__contact--link">0718762377</a></li>
                <li className="footer__contact--item"><a href="/" className="footer__contact--link">www.restcomer.com/contact</a></li>
                <li className="footer__contact--item"><a href="/" className="footer__contact--link">restcomermeals@gmail.com</a></li>
                <li className="footer__contact--item"><a href="/" className="footer__contact--link">+254719342675</a></li>
            </ol>
        </section>
    )
}
export default FooterContact;