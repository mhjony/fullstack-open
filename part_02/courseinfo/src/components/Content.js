import React from 'react'
import Part from "./Part"
import Total from "./Total";

const Content = ({ parts }) => {
	return (
		<>
			{parts &&
				parts.map((part) => {
					return (
						<Part key={part.id} part={part.name} exercise={part.exercises} />
						);
					})}
			<Total parts={parts}/>
		</>
	);
};

export default Content;