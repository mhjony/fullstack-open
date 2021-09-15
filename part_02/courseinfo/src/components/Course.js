import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = ({course}) => {
	return (
		<>
			<h1>Web development curriculum</h1>
			{course && course.map((course) => (
				<div key={course.id}>
					<Header course={course.name} />
					<Content parts={course.parts} />
				</div>
			))}
		</>
	)
}

export default Course;
