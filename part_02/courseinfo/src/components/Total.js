import React from 'react'

const Total = ({ parts }) => {

	const total = (parts) => {
		const sum = parts.map(p => p.exercises).reduce((a, b) => a + b, 0);
		return sum;
	}
	return <strong>total of {total(parts)} exercises</strong>;
};

export default Total;
