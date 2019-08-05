import React from 'react';
import './Faq.scss';

const Faq = props => {
    return (
        <div className="faq-container">
            <h1 className="faq-title">Faq</h1>
            <h2 className="faq-ask">Czy można złożyć zamówienie bez konieczności zakładania konta ?</h2>
            <p className="faq-answer">
                Tak, zamówienie w sklepie DaRoots.pl można złożyć bez rejestrowania się i zakładania konta. Zostanie ono standardowo zrealizowane, zostaniesz jedynie poproszony o wypełnienie danych koniecznych do realizacji wysyłki.
            </p>
            <h2 className="faq-ask">Czy kurier skontaktuje się ze mną przed dostawą ?</h2>
            <p className="faq-answer">
                Kurierzy nie mają obowiązku kontaktowania się z odbiorcą przesyłki przed jej dostawą, dlatego też nie jesteśmy w stanie tego zagwarantować.
            </p>
            <h2 className="faq-ask">Czy produkty firmy DaRoots są objęte gwarancją, jeśli tak to ile ona trwa ?</h2>
            <p className="faq-answer">Tak, wszystkie produkty marki DaRoots objęte są dwuletnią rękojmią.</p>
            <h2 className="faq-ask">Ile czasu ma sklep DaRoots.pl na rozpatrzenie reklamacji lub zwrotu ?</h2>
            <p className="faq-answer">Na rozpatrzenie reklamacji / zwrotu i powiadomienie Klienta sklep DaRoots.pl ma 14 dni.</p>
            <h2 className="faq-ask">W jaki sposób mogę się skontaktować z biurem obsługi klienta ?</h2>
            <p className="faq-answer">
                Z Biurem Obsługi Klienta skontaktujesz się, dzwoniąc pod numer naszej infolinii. Możesz także wysłać wiadomość na adres e-mail. Nasi konsultanci odpowiedzą na wszystkie pytania, doradzą w wyborze produktu oraz pomogą w złożeniu zamówienia.
            </p>
            <h2 className="faq-ask">W jakich godzinach mogę skontaktować się z biurem obsługi klienta ?</h2>
            <p className="faq-answer">
                Nasi konsultanci Biura Obsługi Klienta są do dyspozycji w dni robocze, od poniedziałku do piątku w godzinach 8.00-16.00. 
            </p>
            <h2 className="faq-general-ask">NIE ZNALAZŁEŚ ODPOWIEDZI NA SWOJE PYTANIE ? - SKONTAKTUJ SIĘ Z NAMI</h2>
        </div>
    )
}

export default Faq;