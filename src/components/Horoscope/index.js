import React from 'react';
import PropTypes from 'prop-types';

const Horoscope = ({title, data}) => {              //title i data pobierane z App

    const {currentDate, months} = data;
    const renderZodiacs = () => {           //const to lepsza wersja funkcji niz function
        if (!months.length) {
            return null;
        }

        return months.map(singleMonth => {
            return (
                <div key={singleMonth.constellation} className={`singleMonth ${singleMonth.constellation}`}>            //key jest potrzebny gdy tagi pojawiaja sie w roznych funkcjach na tym samym poziomie
                    <h3>{singleMonth.constellation}</h3>
                </div>
            )
        })
    };

    const renderActive = () => {
        if (!months.length) {           //jesli nie ma dlugosci zadnego miesiaca, to funkcja nie jest wykonywana
            return null;
        }

        const activeMonth = months.find(singleMonth => singleMonth.headline);       //find

        return (
            <div>
                <h2>{activeMonth.constellation}</h2>
                <img />
            </div>
        )
    };

    return (
        <div className="horoscopeContainer active">     //to są realne elementy - w tym miejsca gdzie pojawia sie title i poszczegolne elementy. tutaj mozna nadac im jakis wygladwizualny - albo wyzej w funkcjach
            <h2>{title}</h2>
            {renderActive()}
            <div>
            {renderZodiacs()}
            </div>
        </div>
    );
};

//okresla co sie dzieje jak sie nie laduje - w tym przypadku pusty str
Horoscope.defaultProps = {
    title: ''
};

//okresla typ danych - by szybciej dzialalo
Horoscope.propTypes = {
    title: PropTypes.string
};

export default Horoscope;
