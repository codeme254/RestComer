import React from 'react';

const SvgElement = (props) => {
    return(
        <svg className="social__svg--icon">
            <use xlinkHref={props.svgLink}></use>
        </svg>
    )
}
export default SvgElement;