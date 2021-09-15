import React from 'react'

const Filter = ({ filterArr, setFilterArr }) => {
	return (
		<div>filter shown with 
			<input value={filterArr} onChange={(e) => setFilterArr(e.target.value)} />
		</div>
	)
}

export default Filter
