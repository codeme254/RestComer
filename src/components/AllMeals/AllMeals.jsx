import React from "react";
import TertiaryHeading from "../Typography/SecondaryHeading";
import Meal from "./Meal";
import hotdog from '../../Assets/Images/hotdog.png';
import pizza from '../../Assets/Images/pizza.png';
import hotdogg2 from '../../Assets/Images/hotdogg2.png';
import sandwich from '../../Assets/Images/sandwich.png';
// {imageLink, mealName, discount, price}
const AllMeals = () => {
    return(
        <section className="meals">
            <TertiaryHeading text = "this is what we have for you" />
            <div className="meals__container">
                <Meal
                    discount="15%"
                    imageLink={hotdog}
                    mealName="hamburger"
                    price='3'
                 />
                <Meal
                    discount="10%"
                    imageLink={pizza}
                    mealName="pepperoni pizza"
                    price='10'
                 />
                <Meal
                    discount="20%"
                    imageLink={sandwich}
                    mealName="sandwich"
                    price='2.5'
                 />
                <Meal
                    discount="25%"
                    imageLink={hotdogg2}
                    mealName="hotdogs"
                    price='3.5'
                 />
            </div>
            <div className="all-meals__button">
                <a href="/" className="all-meals__button--btn">discover all our meals</a>
            </div>
        </section>
    )
};
export default AllMeals;