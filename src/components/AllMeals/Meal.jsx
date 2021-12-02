import React from 'react';

const Meal = ({imageLink, mealName, discount, price}) => {
    return(
        <div className="meal-card">
            <div className="meal-card__discount">
                <span className="meal-card__discount--value">{discount}</span> <span>off</span>
            </div>
            <div className="meal-card__details">
                <div className="meal-card__image">
                    <img src={imageLink} alt={mealName} className="meal-card__image--img" />
                </div>
                <h3 className="meal-card__details--name">{mealName}</h3>
                <p className="meal-card__details--description">eat today for only ${price}</p>
                <div className="meal-card__button">
                    <a href="/" className="meal-card__details--btn">order now for ${price}</a>
                </div>
            </div>
        </div>
    )
}
export default Meal;