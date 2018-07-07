import "../../theme/styles.scss";
import React from 'react';
import ReactDOM from 'react-dom';
import Horoscope from "../../components/Horoscope";
import data from "../../mockups/horoscope.js";

document.addEventListener('DOMContentLoaded', () => {
	class App extends React.Component {
		render() {
			return (
				<div>
					<h1>My components:</h1>
					<Horoscope title="tytul z App" data={data}/>
				</div>
		);
		}
	}

	ReactDOM.render(
	<App />,
		document.querySelector('#app'),
	);
});
