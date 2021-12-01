import React from 'react';
import FooterCompanyDescription from './FooterCompanyDescription';
import FooterLinks from './FooterLinks';
import FooterContact from './FooterContact';
import FooterSocial from './FooterSocial';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__container">
                <FooterCompanyDescription />
                <FooterLinks />
                <FooterContact />
                <FooterSocial />
            </div>
        </footer>
    )
};
export default Footer;