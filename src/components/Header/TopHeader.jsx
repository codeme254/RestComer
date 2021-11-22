import React from 'react';
const TopHeader = () => {
    return(
        <div className="top-header-container">
            <h1 className="title">RestComer</h1>
            <div className="join">
                <a href="/" className="join__button--btn">Join the chefs</a>
                <a href="/" className="join__button--btn">Join community</a>
            </div>
        </div>
    )
}
export default TopHeader;