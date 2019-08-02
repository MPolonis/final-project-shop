import React from 'react';
import './Contact.scss';
import icon2 from '../../images/place-icon02.png';
import icon3 from '../../images/cellphone-icon03.png';
import icon4 from '../../images/at-icon04.png';
import { Button } from 'reactstrap';

const Contact = props => {
    return (
        <div>
            <div class="contact-header">
                    <h1>Napisz do nas!</h1>
            </div>
            <form class="contact-form">
                <div class="contact-short-line contact-input-first">
                    <input type="text" name="name" placeholder="Imię"></input> 
                </div>
                <div class="contact-short-line">
                    <input type="text" name="email" placeholder="Twój email"></input>
                </div>
                <div class="contact-long-line">
                    <input type="text" name="subject" placeholder="Tytuł"></input>
                </div>
                <div class="contact-long-line">
                    <textarea rows="3" cols="86" name="comment" form="usrform" placeholder="Twoja wiadomość..."></textarea>
                </div>
                <Button class="btn">Wyślij</Button>
            </form>
            <div class="info-place">
                <div class="info-more">
                    <div class="info-particular">
                        <div class="info-icon-btn">
                            <img src={icon2} alt="place"></img>
                        </div>
                        <p class="info-paragraph">Sklepowa 114, Gdańsk 12-345 Polska</p>
                    </div>
                    <div class="info-particular">
                        <div class="info-icon-btn">
                            <img src={icon3} alt="cellphone"></img>
                        </div>
                        <p class="info-paragraph">+48 123 456 789</p>
                    </div>
                    <div class="info-particular">
                        <div class="info-icon-btn">
                            <img src={icon4} alt="at"></img>
                        </div>
                        <p class="info-paragraph">daroots@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;