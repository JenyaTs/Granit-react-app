import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Menu from './Menu';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {

	render() {
		return(
				<div>
					<Header />
					<Menu />
					<Main />
				</div>
			)
	}
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
