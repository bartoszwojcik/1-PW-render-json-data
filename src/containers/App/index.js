import "../../theme/styles.scss";
import React from 'react';
import ReactDOM from 'react-dom';
import Horoscope from "../../components/Horoscope";
import data from "../../mockups/horoscope.js";			//w tym miejscu wybiera sie skad pobierane są dane

document.addEventListener('DOMContentLoaded', () => {
	class App extends React.Component {
		render() {
			return (
				<div className="greatDiv">
                    <p className="dateAdded">21-07-2018</p>
					<h1 className="horoscopeTitle">Horoscope</h1>
					<div className="horoscopeTitle under"> </div>
                    <p className="dateToday">Today</p>
					<Horoscope data={data}/>
				</div>
			);
		}
	}

	ReactDOM.render(
	<App />,
		document.querySelector('#app'),
	);
});
