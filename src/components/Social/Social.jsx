import React from 'react';
// import { ReactSVG } from 'react';
import SvgElement from './SvgElement';
import mainbg from '../../Assets/Images/mainbg.jpg';      //this image was imported successfully
import sprite from '../../Assets/svg/sprite.svg'


const Social = () => {
    return(
        <section className="social">
            {/* <ReactSVG src="../Assets/svg/sprite.svg#icon-amazon" /> */}
            <img src={mainbg} alt="someimg that could not be displayed" />
            <SvgElement svgLink="../sprite.svg#icon-amazon" />
            <svg className="social__svg--icon">
                <use xlinkHref={sprite}></use>
            </svg>
        </section>
    )
};
export default Social;