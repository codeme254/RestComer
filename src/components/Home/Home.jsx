import React from 'react';

const Home = () => {
    return(
        <section className="home">
            <h1 className="home__title">
                <span className="home__title--main">RestComer restaurant</span>
                <span className="home__title--sub">Quality, healthy food for you</span>
            </h1>
            <p className="home__hunger--text">
                Hungry Already? <a href="/" className="home__hunger--button">grab some food</a>
            </p>
        </section>
    )
}
export default Home;