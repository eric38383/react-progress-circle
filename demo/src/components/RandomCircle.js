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
				size={250} //Height and Width of the circle
				clockwise={false}
				color={'green'} //Color of the circle stroke
				start={0}
				progress={randomNumber} //Number between 0 and 100
				strokeWidth={50} //width of the circle strokes. Stroke width must be at least half of size
				opacity={0.4} //a number between 0 and 1.
				time={0.4} //in seconds, for progress transition
				timingFunction={'linear'} //linear, ease in, ease-out, east-in-out, step-start, step-end
			/>
			<div className="circle-title">Random Circle</div>
		</div>
   	);
}

export default RandomCircle;