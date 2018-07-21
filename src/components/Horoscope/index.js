import React from 'react';
import PropTypes from 'prop-types';

const Horoscope = ({title, data}) => {              //title i data pobierane z App

    const {currentDate, months} = data;
    const renderZodiacs = () => {           //const => to lepsza wersja funkcji niz function
        if (!months.length) {
            return null;
        }

        return months.map(singleMonth => {
            return (
                <li key={singleMonth.constellation} className={`singleMonth ${singleMonth.constellation}`}>
                    <img src={singleMonth.image} className="horoscopeContainer single_month_images"  />
                    <h3>{singleMonth.constellation}</h3>
                    <span className="horoscopeContainer days">{singleMonth.dateRange}</span>
                    <p>{singleMonth.description}</p>
                </li>
            )
        })
    }; /* key jest potrzebny gdy tagi pojawiaja sie w roznych funkcjach na tym samym poziomie */

    const renderActive = () => {
        if (!months.length) {           //jesli nie ma dlugosci zadnego miesiaca, to funkcja nie jest wykonywana
            return null;
        }

        const activeMonth = months.find(singleMonth => singleMonth.headline);       //find

        return (
            <div key={activeMonth.constellation} className={`activeMonth ${activeMonth.constellation}`}>
                <div className="horoscopeContainer active image">
                    <img src={activeMonth.image} className="horoscopeContainer active" />
                </div>
                <div className="horoscopeContainer active month">
                    <h2>{activeMonth.constellation}</h2>
                    <span className="horoscopeContainer days">{activeMonth.dateRange}</span>
                    <p>{activeMonth.description}</p>
                </div>
                <div className="horoscopeContainer separator"> </div>
            </div>
        )
    };

    return (
        <div className="horoscopeContainer active">
            <h2>{title}</h2>
            {renderActive()}
            <ul className="horoscopeContainer all_months_list">
            {renderZodiacs()}
            </ul>
        </div>
    ); //wygląd można nadać tutaj albo w funkcjach wyżej
};

//okresla co sie dzieje jak sie nie laduje - w tym przypadku pusty str
Horoscope.defaultProps = {
    title: ''
};

//okresla typ danych - by szybciej dzialalo
Horoscope.propTypes = {
};

export default Horoscope;
