import React from 'react';
import FooterHeader from './FooterHeader';

const FooterCompanyDescription = () => {
    return(
        <section className="footer__company-description">
            <FooterHeader text='our company'/>
            <p className="footer__company-description--description">
                Located in Kirinyaga, we are a meal company that is passionate in ensuring that
                our customers take quality healthy food at the cheapest price possible, our recipes
                are highly customizable which means that if you want a meal from us you can send us your
                own recipe, we also have other quality and appreciated services like free door
                to door delivery among others.
            </p>
        </section>
    )
}
export default FooterCompanyDescription;