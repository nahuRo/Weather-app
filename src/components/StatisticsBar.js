import React from "react";

const StatisticsBar = ({ number, name, unit = "" }) => {
	return (
		<div className="rounded-md py-1 px-4">
			<h4 className="text-orange-600">
				{number} <span>{unit}</span>
			</h4>
			<h4 className="text-blue-400">{name}</h4>
		</div>
	);
};

export default StatisticsBar;
