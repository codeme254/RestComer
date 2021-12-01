import React from "react";
import FooterHeader from "./FooterHeader";

const FooterSocial = () => {
    return(
        <section className="footer__social">
            <FooterHeader text="our social links" />
            <ol className="footer__social--list">
                <li className="footer__social--item"><a href="/" className="footer__social--link">facebook</a></li>
                <li className="footer__social--item"><a href="/" className="footer__social--link">twitter</a></li>
                <li className="footer__social--item"><a href="/" className="footer__social--link">instagram</a></li>
                <li className="footer__social--item"><a href="/" className="footer__social--link">pinterest</a></li>
            </ol>
        </section>
    )
}
export default FooterSocial;