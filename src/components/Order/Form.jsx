import React from 'react';

const Form = () => {
    return(
        <div className="form-container">
            <form action="#" className="form">
                <div className="form__group">
                    <label htmlFor="email" className="form__group--label">email address</label>
                    <input type="email" className="form__group--input" />
                </div>
                <div className="form__group">
                    <label htmlFor="location" className="form__group--label">your current location</label>
                    <input type="text" className="form__group--input" />
                </div>
                <div className="form__group">
                    <label htmlFor="food" className="form__group--label">select meal</label>
                    <select name="" id="food" className="form__group--input">
                        <option value="pizza">pizza</option>
                        <option value="hotdog">hotdog</option>
                        <option value="hamburger">hamburger</option>
                        <option value="Huevos">Huevos Rancheros</option>
                        <option value="cabrito">cabrito</option>
                        <option value="aguachile">aguachile</option>
                        <option value="tacos">tacos al pastor</option>
                        <option value="sausages">sausages</option>
                        <option value="buritto">buritto</option>
                        <option value="enchilada">enchilada</option>
                    </select>
                </div>
                <div className="form__group">
                    <a href="/" className="form__group--btn">place order</a>
                </div>
            </form>
        </div>
    )
}
export default Form;