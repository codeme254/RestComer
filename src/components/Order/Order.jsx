import React from 'react';
import Form from './Form';
import Side from './Side';

const Order = () => {
    return(
        <section className="order">
            <h5 className="title__small">order a meal today</h5>
            <div className="order__container">
                <Side />
                <Form />
            </div>
        </section>
    )
}
export default Order;