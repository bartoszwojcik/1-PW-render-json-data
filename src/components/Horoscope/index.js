import React from 'react';
import PropTypes from 'prop-types';

const Horoscope = ({title, data}) => {

    const {currentDate, months} = data;
    const renderZodiacs = () => {
        if (!months.length) {
            return null;
        }

        return months.map(singleMonth => {
            return (
                <div key={singleMonth.constellation} className={`singleMonth ${singleMonth.constellation}`}>
                    <h3>{singleMonth.constellation}</h3>
                </div>
            )
        })
    };

    const renderActive = () => {
        if (!months.length) {
            return null;
        }

        const activeMonth = months.find(singleMonth => singleMonth.headline);

        return (
            <div>
                <h2>{activeMonth.constellation}</h2>
                <img />
            </div>
        )
    };

    return (
        <div className="horoscopeContainer active">
            <h2>{title}</h2>
            {renderActive()}
            <div>
            {renderZodiacs()}
            </div>
        </div>
    );
};

Horoscope.defaultProps = {
    title: ''
};

Horoscope.propTypes = {
    title: PropTypes.string
};

export default Horoscope;
