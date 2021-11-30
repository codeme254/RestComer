import React from 'react';

const Testimonial = ({imageLink, testimonialDate, personName, testimony, testimonyLikes, testimonyDislikes}) => {
    return(
        <div className="testimonial">
            <div className="testimonial__image-floated">
                <img src={imageLink} alt={personName} className="testimonial__image--floated" />
            </div>
            <div className="testimonial__image">
                <img src={imageLink} alt={personName} className="testimonial__image--img" />
            </div>
            <div className="testimonial__main">
                <h5 className="testimonial__name">{personName}</h5>
                <p className="testimonial__main--text">{testimony}</p>
                <div className="testimonial__details">
                    <span className="testimonial__details--date">{testimonialDate}</span>
                    <span className="testimonial__details--likes">{testimonyLikes} Likes</span>
                    <span className="testimonial__details--likes">{testimonyDislikes} DisLikes</span>
                </div>
            </div>
        </div>
    )
}
export default Testimonial;