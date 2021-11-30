import React from 'react';
import bgVideo from '../../Assets/Vids/cookingVid1.mp4'

const Side = () => {
    return(
        <div className="side">
            <video autoPlay loop muted playsInline className="side__video">
                <source src={bgVideo} type="video/mp4" />
            </video>
            <div className="side__overlay"></div>
            <h2 className="side__text">chew something quality today.</h2>
        </div>
    )
}
export default Side;