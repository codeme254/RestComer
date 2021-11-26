import React from "react";
import TertiaryHeading from "../Typography/SecondaryHeading";
import Meal from "./Meal";
import hotdog from '../../Assets/Images/hotdog.png';
import pizza from '../../Assets/Images/pizza.png';
import hotdogg2 from '../../Assets/Images/hotdogg2.png';
import sandwich from '../../Assets/Images/sandwich.png';

const AllMeals = () => {
    return(
        <section className="meals">
            <TertiaryHeading text = "this is what we have for you" />
            <div className="meals__container">
                <Meal
                    discount="15%"
                    imageLink={hotdog}
                    mealName="hamburger"
                    mealDescription="Bearing And Let Day Created Moving
                    Without Image One Heaven Third Hath
                    Firmament heaven yielding third years, also bearing moveth good also. Evening upon life darkness whales brought they're, for beginning said sea fifth, whales isn't. I darkness set. Two god seas."
                 />
                <Meal
                    discount="15%"
                    imageLink={pizza}
                    mealName="pepperoni pizza"
                    mealDescription="Bearing And Let Day Created Moving
                    Without Image One Heaven Third Hath
                    Firmament heaven yielding third years, also bearing moveth good also. Evening upon life darkness whales brought they're, for beginning said sea fifth, whales isn't. I darkness set. Two god seas."
                 />
                <Meal
                    discount="15%"
                    imageLink={sandwich}
                    mealName="sandwich"
                    mealDescription="Bearing And Let Day Created Moving
                    Without Image One Heaven Third Hath
                    Firmament heaven yielding third years, also bearing moveth good also. Evening upon life darkness whales brought they're, for beginning said sea fifth, whales isn't. I darkness set. Two god seas."
                 />
                <Meal
                    discount="15%"
                    imageLink={hotdogg2}
                    mealName="hotdogs"
                    mealDescription="Bearing And Let Day Created Moving
                    Without Image One Heaven Third Hath
                    Firmament heaven yielding third years, also bearing moveth good also. Evening upon life darkness whales brought they're, for beginning said sea fifth, whales isn't. I darkness set. Two god seas."
                 />
            </div>
            <div className="all-meals__button">
                <a href="/" className="all-meals__button--btn">discover all our meals</a>
            </div>
        </section>
    )
};
export default AllMeals;