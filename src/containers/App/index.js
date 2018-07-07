import "../../theme/styles.scss";
import React from 'react';
import ReactDOM from 'react-dom';
import Horoscope from "../../components/Horoscope";
import data from "../../mockups/horoscope.js";			//w tym miejscu wybiera sie skad pobierane są dane

document.addEventListener('DOMContentLoaded', () => {
	class App extends React.Component {
		render() {
			return (
				<div>
					<h1>My components:</h1>
					<Horoscope title="tytul z App" data={data}/>			//tutaj wstawiane sa title i date okreslane w components
				</div>
		);
		}
	}

	ReactDOM.render(
	<App />,
		document.querySelector('#app'),
	);
});
