import React from 'react';
import { render } from 'react-dom';
import { RandomCircle, FullCircle } from './components';
import './styles.css';

const Demo = () => {
	return (
		<div className="demo-parent">
			<div className="demo-child">
				<RandomCircle />
			</div>
			<div className="demo-child">
				<FullCircle />
			</div>
		</div>
	)
};

render(<Demo />, document.querySelector('#demo'));
