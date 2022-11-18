import React from "react";

const StatisticsBar = ({ number, name }) => {
	return (
		<div className="rounded-md py-1 px-4">
			<h4 className="text-white">{number}</h4>
			<h4 className="text-white">{name}</h4>
		</div>
	);
};

export default StatisticsBar;
