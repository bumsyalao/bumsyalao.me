import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Page from 'components/page';
import 'scss/style.scss';

const rootElement = document.querySelector('#main');

ReactDOM.render(<Page />, rootElement);

if (module.hot) {
	module.hot.accept(Page, () => {
		ReactDOM.render(<Page />, rootElement);
	});
}
