import React, { useEffect } from 'react';
import ProgressCircle from '../../../src';

const FullCircle = () => {
	const [number, setNumber] = useState(0);

	useEffect(() => {
		const timeout = setTimeout(() => {
			if(number === 100) {
				setNumber(0);
			} else {
				setNumber(100);
			}
		}, 2000)

		return () => {
			clearTimeout(timeout)
		}
	}, [number])

	return (
		<div className="circle-parent">
			<ProgressCircle
				color={'red'} //Color of the circle stroke
				progress={number} //Number between 0 and 100
				size={250} //Height and Width of the circle
				strokeWidth={50} //width of the circle strokes. Stroke width must be at least half of size
				opacity={0.4} //a number between 0 and 1.
				timingFunction={'linear'} //linear, ease in, ease-out, east-in-out, step-start, step-end
				time={0.8} //in seconds, for progress transition
			/>
			<div className="circle-title">Full Circle</div>
		</div>
   	);
}

export default FullCircle