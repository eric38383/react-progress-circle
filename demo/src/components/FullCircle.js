import React, { useEffect, useState } from 'react';
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
				color={'blue'} 
				clockwise={true}
				progress={number} 
				size={200}
				strokeWidth={30}
				start={270}
				opacity={.7}
				timingFunction={'ease-in'}
				time={1.5}
			/>
			<div className="circle-title">Full Circle</div>
		</div>
   	);
}

export default FullCircle