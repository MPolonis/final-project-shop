import React from 'react';
import './Policy.scss';

const policy = props => {
    return (
        <div className="policy-container">
            <h1 className="policy-title">Regulamin</h1>
            <h2 className="policy-point">Informacje ogólne</h2>
            <ol className="policy-inter-points">
                <li>
                    Sprzedawca w najszerszym dopuszczalnym przez prawo zakresie nie ponosi
                    odpowiedzialności za zakłócenia w tym przerwy w funkcjonowaniu Sklepu
                    spowodowane siłą wyższą, niedozwolonym działaniem osób trzecich lub
                    niekompatybilnością Sklepu internetowego z infrastrukturą techniczną Klienta.
                </li>
                <li>
                    Przeglądanie asortymentu Sklepu nie wymaga zakładania Konta. Składanie
                    zamówień przez Klienta na Produkty znajdujące się w asortymencie Sklepu możliwe
                    jest albo po założeniu Konta zgodnie z postanowieniami § 6 Regulaminu albo przez
                    podanie niezbędnych danych osobowych i adresowych umożliwiających realizację
                    Zamówienia bez zakładania Konta.
                </li>
            </ol>
            <h2 className="policy-point">Zakładanie Konta w Sklepie</h2>
            <ol className="policy-inter-points">
                <li>Aby założyć Konto w Sklepie, należy wypełnić Formularz rejestracji.</li>
                <li>Założenie Konta w Sklepie jest darmowe.</li>
                <li>
                    Logowanie się na Konto odbywa się poprzez podanie loginu i hasła ustanowionych w
                    Formularzu rejestracji.
                </li>
                <li>
                    Klient ma możliwość w każdej chwili, bez podania przyczyny i bez ponoszenia z tego
                    tytułu jakichkolwiek opłat usunąć Konto poprzez wysłanie stosownego żądania do
                    Sprzedawcy, w szczególności za pośrednictwem poczty elektronicznej lub pisemnie
                    na adresy podane w § 3.
                </li>
            </ol>
            <h2 className="policy-point">Zasady składania zamówienia</h2>
            <h3 className="policy-inter-points">W celu złożenia Zamówienia należy:</h3>
            <ol className="policy-inter-points">
                <li>zalogować się do Sklepu (opcjonalnie),</li>
                <li>
                    wybrać Produkt będący przedmiotem Zamówienia, a następnie kliknąć przycisk „Do
                    koszyka” (lub równoznaczny),
                </li>
                <li>zalogować się lub skorzystać z możliwości złożenia Zamówienia bez rejestracji.</li>
                <li>
                    jeżeli wybrano możliwość złożenia Zamówienia bez rejestracji - wypełnić Formularz
                    zamówienia poprzez wpisanie danych odbiorcy Zamówienia oraz adresu, na który
                    ma nastąpić dostawa Produktu, wybrać rodzaj przesyłki (sposób dostarczenia
                    Produktu), wpisać dane do faktury, jeśli są inne niż dane odbiorcy Zamówienia,
                </li>
                <li>
                    kliknąć przycisk “Zamawiam i płacę”/kliknąć przycisk “Zamawiam i płacę” oraz
                    potwierdzić zamówienie, klikając w link przesłany w wiadomości e-mail,
                </li>
                <li>
                    wybrać jeden z dostępnych sposobów płatności i w zależności od sposobu płatności,
                    opłacić zamówienie w określonym terminie.
                </li>
            </ol>
            <h2 className="policy-point">Wykonanie umowy sprzedaży</h2>
            <ol className="policy-inter-points">
                <li>
                    Zawarcie Umowy Sprzedaży między Klientem a Sprzedawcą następuje po
                    uprzednim złożeniu przez Klienta Zamówienia za pomocą Formularza zamówienia w
                    Sklepie internetowym.
                </li>
                <li>
                    Po złożeniu Zamówienia Sprzedawca niezwłocznie potwierdza jego otrzymanie oraz
                    jednocześnie przyjmuje Zamówienie do realizacji. Potwierdzenie otrzymania
                    Zamówienia i jego przyjęcie do realizacji następuje poprzez przesłanie przez
                    Sprzedawcę Klientowi stosownej wiadomości e-mail na podany w trakcie składania
                    Zamówienia adres poczty elektronicznej Klienta, która zawiera co najmniej
                    oświadczenia Sprzedawcy o otrzymaniu Zamówienia i o jego przyjęciu do realizacji
                    oraz potwierdzenie zawarcia Umowy Sprzedaży. Z chwilą otrzymania przez Klienta
                    powyższej wiadomości e-mail zostaje zawarta Umowa Sprzedaży między Klientem a
                    Sprzedawcą.
                </li>
                <li>W przypadku wyboru przez Klienta:</li>
                <ul>
                    <li>
                        płatności przelewem, płatności elektronicznych albo płatności kartą płatniczą, Klient
                        zobowiązany jest do dokonania płatności w terminie 2 dni kalendarzowych od dnia
                        zawarcia Umowy Sprzedaży - w przeciwnym razie zamówienie zostanie anulowane.
                    </li>
                    <li>
                        płatności za pobraniem przy odbiorze przesyłki, Klient obowiązany jest do dokonania
                        płatności przy odbiorze przesyłki.
                    </li>
                    <li>
                        płatności gotówką przy odbiorze osobistym przesyłki, Klient obowiązany jest dokonać
                        płatności przy odbiorze przesyłki w terminie 2 dni od dnia otrzymania informacji o
                        gotowości przesyłki do odbioru.
                    </li>
                </ul>
                <li>
                    Jeżeli Klient wybrał sposób dostawy inny niż odbiór osobisty, Produkt zostanie
                    wysłany przez Sprzedawcę w terminie wskazanym w jego opisie, w sposób wybrany przez Klienta podczas składania
                    Zamówienia.
                </li>
            </ol>
            <h2 className="policy-point">Prawo odstąpienia od umowy</h2>
            <ol className="policy-inter-points">
                <li>
                    Konsument może w terminie 14 dni odstąpić od Umowy Sprzedaży bez podania
                    jakiejkolwiek przyczyny.
                </li>
                <li>
                    Bieg terminu określonego w ust. 1 rozpoczyna się od dostarczenia Produktu
                    Konsumentowi lub wskazanej przez niego osobie innej niż przewoźnik
                </li>
                <li>
                    W przypadku Umowy, która obejmuje wiele Produktów, które są dostarczane
                    osobno, partiami lub w częściach, termin wskazany w ust. 1 biegnie od dostawy
                    ostatniej rzeczy, partii lub części.
                </li>
                <li>
                    W przypadku Umowy, która polega na regularnym dostarczaniu Produktów przez
                    czas oznaczony (prenumerata), termin wskazany w ust. 1 biegnie od objęcia w
                    posiadanie pierwszej z rzeczy.
                </li>
                <li>
                    Konsument może odstąpić od Umowy, składając Sprzedawcy oświadczenie o
                    odstąpieniu od Umowy. Do zachowania terminu odstąpienia od Umowy wystarczy
                    wysłanie przez Konsumenta oświadczenia przed upływem tego terminu.
                </li>
            </ol>
            <h2 className="policy-point">Reklamacja</h2>
            <ol className="policy-inter-points">
                <li>
                    W przypadku wystąpienia wady zakupionego u Sprzedawcy towaru Klient ma prawo
                    do reklamacji w oparciu o przepisy dotyczące rękojmi w kodeksie cywilnym. Jeżeli
                    Klientem jest Przedsiębiorca, strony wyłączają odpowiedzialność z tytułu rękojmi.
                </li>
                <li>
                    Reklamację należy zgłosić pisemnie lub drogą elektroniczną na podane w niniejszym
                    Regulaminie adresy Sprzedawcy.
                </li>
                <li>
                    Sprzedawca ustosunkuje się do żądania reklamacyjnego niezwłocznie, nie później
                    niż w terminie 14 dni, a jeśli nie zrobi tego w tym terminie, uważa się, że żądanie
                    Klienta uznał za uzasadnione.
                </li>
            </ol>
        </div>
    )
}

export default policy;