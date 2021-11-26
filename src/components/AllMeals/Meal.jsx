import React from 'react';

const Meal = ({imageLink, mealName, mealDescription, discount}) => {
    return(
        <div className="meal-card">
            <div className="meal-card__discount">
                <span className="meal-card__discount--value">{discount}</span>
                <span className="meal-card__discount--disc">off</span>
            </div>
            <div className="meal-card__image">
                <img src={imageLink} alt="" className="meal-card__image--img" />
            </div>
            <div className="meal-card__description">
                <h4 className="meal-card__description--title">{mealName}</h4>
                <p className="meal-card__description--description">
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quibusdam minus, itaque architecto voluptatem modi eligendi suscipit eum possimus repudiandae! */}
                    {mealDescription}
                </p>
            </div>
            <div className="meal-card__button">
                <a href="/" className="meal-card__button--btn">eat {mealName} today</a>
            </div>
        </div>
    )
}
export default Meal;