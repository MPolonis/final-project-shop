import React from 'react';
import './Contact.scss';
import MediaQuery from "react-responsive";
import icon2 from '../../images/place-icon02.png';
import icon3 from '../../images/cellphone-icon03.png';
import icon4 from '../../images/at-icon04.png';
import { Button } from 'reactstrap';

const Contact = props => {
    return (
        <div>
            <MediaQuery query="(max-width: 760px)">
                <div className="contact-header">
                    <h1>Napisz do nas!</h1>
                </div>
                <form className="contact-form-mobile">
                    <div className="contact-short-line-mobile contact-input-first">
                        <input type="text" name="name" placeholder="Imię"></input>
                    </div>
                    <div className="contact-short-line-mobile">
                        <input type="text" name="email" placeholder="Twój email"></input>
                    </div>
                    <div className="contact-long-line-mobile">
                        <input type="text" name="subject" placeholder="Tytuł"></input>
                    </div>
                    <div className="contact-long-line-mobile">
                        <textarea rows="3" cols="86" name="comment" form="usrform" placeholder="Twoja wiadomość..."></textarea>
                    </div>
                    <Button class="btn">Wyślij</Button>
                </form>
                <div className="info-place">
                    <div className="info-more-mobile">
                        <div className="info-particular">
                            <div className="info-icon-btn">
                                <img src={icon2} alt="place"></img>
                            </div>
                            <p className="info-paragraph">Sklepowa 114, Gdańsk 12-345 Polska</p>
                        </div>
                        <div className="info-particular">
                            <div className="info-icon-btn">
                                <img src={icon3} alt="cellphone"></img>
                            </div>
                            <p className="info-paragraph">+48 123 456 789</p>
                        </div>
                        <div className="info-particular">
                            <div className="info-icon-btn">
                                <img src={icon4} alt="at"></img>
                            </div>
                            <p className="info-paragraph">daroots@gmail.com</p>
                        </div>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery query="(min-width: 761px)">
                <div className="contact-header">
                    <h1>Napisz do nas!</h1>
                </div>
                <form className="contact-form">
                    <div className="contact-short-line contact-input-first">
                        <input type="text" name="name" placeholder="Imię"></input>
                    </div>
                    <div className="contact-short-line">
                        <input type="text" name="email" placeholder="Twój email"></input>
                    </div>
                    <div className="contact-long-line">
                        <input type="text" name="subject" placeholder="Tytuł"></input>
                    </div>
                    <div className="contact-long-line">
                        <textarea rows="3" cols="86" name="comment" form="usrform" placeholder="Twoja wiadomość..."></textarea>
                    </div>
                    <Button class="btn">Wyślij</Button>
                </form>
                <div className="info-place">
                    <div className="info-more">
                        <div className="info-particular">
                            <div className="info-icon-btn">
                                <img src={icon2} alt="place"></img>
                            </div>
                            <p className="info-paragraph">Sklepowa 114, Gdańsk 12-345 Polska</p>
                        </div>
                        <div className="info-particular">
                            <div className="info-icon-btn">
                                <img src={icon3} alt="cellphone"></img>
                            </div>
                            <p className="info-paragraph">+48 123 456 789</p>
                        </div>
                        <div className="info-particular">
                            <div className="info-icon-btn">
                                <img src={icon4} alt="at"></img>
                            </div>
                            <p className="info-paragraph">daroots@gmail.com</p>
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </div>
    )
}

export default Contact;