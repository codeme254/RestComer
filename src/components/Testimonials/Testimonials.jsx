import React from 'react';
import Testimonial from './Testimonial'
import user1 from '../../Assets/Images/user-3.jpg';
import user2 from '../../Assets/Images/user-2.jpg';
import user3 from '../../Assets/Images/user-1.jpg';
import user4 from '../../Assets/Images/user-4-4.jpg';
import user5 from '../../Assets/Images/user-4-5.jpg';
import TertiaryHeading from '../Typography/SecondaryHeading';

const Testimonials = () => {
    return(
        <section className="testimonials">
            <TertiaryHeading text='everyone loves our meals' className="u-marg-bottom-medium"/>
            <div className="testimonials__container">
                <Testimonial
                    imageLink={user1}
                    testimonialDate= '30th march 2021'
                    personName="ivy mbogo"
                    testimony="Bearing And Let Day Created Moving
                    Without Image One Heaven Third Hath
                    Firmament heaven yielding third years, also bearing moveth good also. Evening upon life darkness whales brought they're, for beginning said sea fifth, whales isn't. I darkness set. Two god seas."
                    testimonyDislikes='22'
                    testimonyLikes='300'
                />
                <Testimonial
                    imageLink={user2}
                    testimonialDate= '4th august 2021'
                    personName="dennis otwoma"
                    testimony="Bearing And Let Day Created Moving
                    Without Image One Heaven Third Hath
                    Firmament heaven yielding third years, also bearing moveth good also. Evening upon life darkness whales brought they're, for beginning said sea fifth, whales isn't. I darkness set. Two god seas."
                    testimonyDislikes='22'
                    testimonyLikes='300'
                />
                <Testimonial
                    imageLink={user3}
                    testimonialDate= '4th march 2020'
                    personName="samuel ochiel"
                    testimony="Bearing And Let Day Created Moving
                    Without Image One Heaven Third Hath
                    Firmament heaven yielding third years, also bearing moveth good also. Evening upon life darkness whales brought they're, for beginning said sea fifth, whales isn't. I darkness set. Two god seas."
                    testimonyDislikes='80'
                    testimonyLikes='329'
                />
                <Testimonial
                    imageLink={user4}
                    testimonialDate= '3rd july 2021'
                    personName="humphrey muriungi"
                    testimony="Bearing And Let Day Created Moving
                    Without Image One Heaven Third Hath
                    Firmament heaven yielding third years, also bearing moveth good also. Evening upon life darkness whales brought they're, for beginning said sea fifth, whales isn't. I darkness set. Two god seas."
                    testimonyDislikes='34'
                    testimonyLikes='420'
                />
                <Testimonial
                    imageLink={user5}
                    testimonialDate= '6th february 2021'
                    personName="nathan washiku"
                    testimony="Bearing And Let Day Created Moving
                    Without Image One Heaven Third Hath
                    Firmament heaven yielding third years, also bearing moveth good also. Evening upon life darkness whales brought they're, for beginning said sea fifth, whales isn't. I darkness set. Two god seas."
                    testimonyDislikes='40'
                    testimonyLikes='600'
                />
            </div>
        </section>
    )
}
export default Testimonials;