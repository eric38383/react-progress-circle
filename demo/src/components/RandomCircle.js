import React, { useEffect, useState } from 'react';
import ProgressCircle from '../../../src';

const RandomCircle = () => {
	const [randomNumber, setRandomNumber] = useState(20);

	useEffect(() => {
		let interval = setInterval(() => {
			let random = Math.floor(Math.random() * 100);
			setRandomNumber(random);
		}, 2000);

		return () => {
			clearInterval(interval);
		}
	}, [])

  	return (
		<div className="circle-parent">
			<ProgressCircle
				size={250} 
				clockwise={false}
				color={'green'} 
				start={0}
				progress={randomNumber} 
				strokeWidth={50} 
				opacity={0.4} 
				time={0.4} 
				timingFunction={'linear'}
			/>
			<div className="circle-title">Random Circle</div>
		</div>
   	);
}

export default RandomCircle;