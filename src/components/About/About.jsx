import React from 'react';
import TertiaryHeading from '../Typography/SecondaryHeading';
import hotdog from '../../Assets/Images/hotdog.png'

const About = () => {
    return(
        <section className="about">
            <TertiaryHeading text="we are all about eating..." />
            <div className="about__container">
                <div className="about__image">
                    <img src={hotdog} alt="hotdog pic" className="about__image--img" />
                </div>
                <div className="about__text">
                    <p className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum et iusto tenetur tempore dignissimos animi quidem quos quisquam deserunt qui.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni laboriosam ad, incidunt laborum iste, rem, libero officiis nam voluptates eum quos facilis? Eligendi magnam eius repellat voluptate, repellendus totam qui quos provident temporibus. Commodi dolorem vel ea autem dolorum facere odit, ex, rerum quam id laborum voluptas qui. Sint, natus doloribus quas dolore tempora debitis consequatur laboriosam suscipit at impedit aperiam maxime quae obcaecati illum eligendi nemo cupiditate vel nisi cum! Vero odio praesentium error alias natus illum sapiente quibusdam?
                    </p>
                </div>
            </div>
        </section>
    )
}
export default About;