import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className= 'footer'>
            <div className= 'footer-container'>
                <h3>Join the Adventure newsletter to receive our best vacation deals</h3>
                <h5>You can subscribe at any time</h5>
                <div>
                    <form className= 'form'>
                        <input type= 'text' placeholder='Your Email' />
                        <button>Subscribe</button>
                    </form>
                    <div className= 'footer-grid'>
                        <div>
                            <h3>About Us</h3>
                            <p>How it works</p>
                            <p>Testimonials</p>
                            <p>Careers</p>
                            <p>Investors</p>
                        </div>
                        <div>
                            <h3>Contact Us</h3>
                            <p>Support</p>
                            <p>Contact</p>
                            <p>Sponsorship</p>
                            <p>Destinations</p>
                        </div>
                        <div>
                            <h3>Videos</h3>
                            <p>Submit videos</p>
                            <p>Ambassadors</p>
                            <p>Agency</p>
                            <p>Influencer</p>
                        </div>
                        <div>
                            <h3>Social Media</h3>
                            <p>Facebook</p>
                            <p>Whatsapp</p>
                            <p>Twitter</p>
                            <p>LinkedIn</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;