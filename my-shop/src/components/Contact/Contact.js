import React from 'react';
import './Contact.scss';

const Contact = props => {
    return (
        <div>
            <div class="contact-header">
                    <h1>Napisz do nas!</h1>
                    <p>Our agency is located in Melbourne, Australia</p>
            </div>
            <form class="contact-form">
                <div class="contact-short-line contact-input-first">
                    <input type="text" name="name" placeholder="name"></input> 
                </div>
                <div class="contact-short-line">
                    <input type="text" name="email" placeholder="email"></input>
                </div>
                <div class="contact-long-line">
                    <input type="text" name="subject" placeholder="subject"></input>
                </div>
                <div class="contact-long-line">
                    <input type="text" placeholder="message"></input>
                </div>
                <button class="btn contact-btn">Send message</button>
            </form>
            <div class="info-place">
                <div class="info-map">
                    <div class="info-particular">
                        <button class="map-icon-btn envelop-icon">
                            <img src="../../images/postal-icon01.png" alt="postal"></img>
                        </button>
                        <p class="map-paragraph map-paragraph-first">PO Box 16122 Collins Street West Victoria 8007 Australia</p>
                        </div>
                    <div class="info-particular">
                        <button class="map-icon-btn">
                            <img src="images/place-icon02.png" alt="place"></img>
                        </button>
                        <p class="map-paragraph">121 King Street Malbourne Victioria 3000 Australia</p>
                    </div>
                    <div class="info-particular">
                        <button class="map-icon-btn">
                            <img src="cellphone-icon03.png" alt="cellphone"></img>
                        </button>
                        <p class="map-paragraph">+00 0 1234 5678</p>
                    </div>
                    <div class="info-particular">
                        <button class="map-icon-btn">
                            <img src="images/at-icon04.png" alt="at"></img>
                        </button>
                        <p class="map-paragraph">bukindesign@gmail.com</p>
                    </div>
                    <div class="info-particular">
                        <button class="map-icon-btn web-icon">
                            <img src="images/web-icon05.png" alt="web"></img>
                        </button>
                        <p class="map-paragraph">www.envato.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;